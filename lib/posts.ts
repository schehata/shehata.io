import {promises as fs} from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import readingTime from 'reading-time';

const rootDirectory = process.cwd();
const postsDirectory = path.join(rootDirectory, "posts");

export interface MatterData {
    title: string;
    description: string;
    descriptionHtml?: string;
    date: string;
    isDraft: boolean;
    coverImage?: {
        src: string;
        alt: string;
        caption: string;
        captionHtml?: string;
    };
    tags: string[];
}

export interface Post {
    slug: string;
    matter: MatterData;
    category: string;
    content?: string;
    contentHtml?: string;
    readingTimeMinutes: number;
}

export async function getPost(category: string, slug: string): Promise<Post> {
    const s = decodeURIComponent(slug)
    const fullPath = path.join(postsDirectory, category, `${s}.md`);
    const source = await fs.readFile(fullPath);

    // Use gray-matter to parse the post metadata section
    const {data, content} = matter(source);
    data.date = formatDate(data.date)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id and contentHtml
    return {
        category,
        slug,
        content: content,
        contentHtml,
        matter: data as MatterData,
        readingTimeMinutes: readingTime(content).minutes,
    };
}

async function readCategoryPosts(cat: string): Promise<Post[]> {
    const catDirectory = path.join(postsDirectory, cat);
    const files = await fs.readdir(catDirectory, "utf8");

    if (!files) return;

    return Promise.all(
        files.map(async (file) => {
            const filePath = path.join(catDirectory, file);
            const source = await fs.readFile(filePath, "utf8");
            const {data} = matter(source);

            return {
                matter: data as MatterData,
                category: cat,
                slug: file.replace(".md", ""),
                readingTimeMinutes: readingTime(source).minutes,
            };
        })
    );
}

export async function getSortedPosts(limit: number = 20, tag: string = null, category: string = null): Promise<Post[]> {
    const postLists = [];

    let categories = await fs.readdir(postsDirectory);
    if (category) {
        categories = categories.filter((cat) => cat === category)
    }
    await Promise.all(
        categories.map(async (cat) => {
            let posts = await readCategoryPosts(cat);
            if (tag) {
                posts = posts.filter(post => post.matter.tags.indexOf(tag) != -1)
            }
            posts = posts.filter(post => !post.matter.isDraft)
            postLists.push(...posts);
        })
    );

    // Sort posts by date
    return postLists
        .sort((a, b) => {
            const d1 = new Date(a.matter.date).getTime()
            const d2 = new Date(b.matter.date).getTime()
            return d2 - d1
        })
        .splice(0, limit).map(post => {
            post.matter.date = formatDate(post.matter.date);
            return post;
        });
}

const formatDate = (date) => {
    const options: Intl.DateTimeFormatOptions = {year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(date).toLocaleDateString('en', options)
}
