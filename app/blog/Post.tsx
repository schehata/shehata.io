import Link from "next/link"
import { Post as P } from "../../lib/posts"

export default function Post({ post } : {post: P}) {
    const formatDate = (date) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('en', options)
    }

    const decode = (txt) => {
        return decodeURI(txt.replace('/', ''))
    }

    const {category, slug} = post
    const {title, description, date} = post.matter
//    const url = decodeURIComponent(`/blog/${category}/${decode(slug)}`)
    const url = `/blog/${category}/${slug}`
    //    const category = decode(post.category)
//    const slug = post.slug

    return (
        <article className="pt-4">
        <Link href="/blog/[category]/[slug]" as={url}>
            <h3 className="text-lg text-bold">{ title }</h3>
            <p className="text-xs pt-1 text-gray-500">{ formatDate(date) }</p>
            <p className="text-sm text-gray-600 pt-1">{ description }</p>
        </Link>
    </article>
    );
}
