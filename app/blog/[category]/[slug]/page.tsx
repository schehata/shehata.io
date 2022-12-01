import Image from "next/image";
import Link from "next/link";
import MiniProfile from "../../../../components/MiniProfile";
import {getPost, getSortedPosts} from "../../../../lib/posts";

export async function getData(params) {
    return await getPost(params.category, params.slug);
}

export async function generateStaticParams() {
   const posts = await getSortedPosts();
   return posts.map(post => ({
     slug: post.slug, category: post.category
   }));
 }

export default async function Article({params}) {
    const post = await getData(params);

    return (
        <>
            <div className="container mx-auto px-3 md:px-6 lg:px-12">
                <article className="flex flex-col md:flex-row gap-6">
                    <section className="w-full md:w-3/4 flex flex-col">
                        <Image className="bg-gray-50 h-64 object-cover object-center bg-center bg-no-repeat max-h-64 w-full mb-6 square-shapre"
                            src={post.matter.coverImage.src} alt={post.matter.coverImage.alt} width="400" height="200" />
                        <section className="md:py-6">
                            <div className="">
                                <div className="flex flex-row grow gap-12">
                                    <div className="">
                                        <h1 className="lg:text-5xl prose lg:prose-xl">{post.matter.title}</h1>
                                        <div className="flex flex-inline flex-wrap gap-2 mt-4 lg:text-sm">
                                            {post.matter.tags.map((tag) => (
                                                <Link
                                                    key={tag}
                                                    href={"/blog/?tag=" + tag}
                                                    className="bg-gray-100 text-gray-600 py-1 px-[12px] rounded hover:bg-gray-300 hover:text-gray-900"
                                                >
                                                    #{tag}
                                                </Link>
                                            ))}
                                        </div>
                                        <p className="text-sm mt-2 text-gray-500">
                                            { post.matter.date }
                                        </p>
                                        <p className="pt-3 text-gray-500">
                                            {post.matter.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="md-content prose lg:prose-xl">
                            <div dangerouslySetInnerHTML={{__html: post.contentHtml}}/>
                        </section>
                    </section>
                    <section className="md:w-1/4">
                        <MiniProfile/>
                    </section>
                </article>
            </div>
        </>
    );
}
