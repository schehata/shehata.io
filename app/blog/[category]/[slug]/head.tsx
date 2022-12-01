import {getPost} from "../../../../lib/posts";

export default async function Head({params: {category, slug}}) {
    const post = await getPost(category, slug)

    return (
        <>
            <title>{ post.matter.title }</title>
            <meta property="article:published_time" content={post.matter.date} />
            <meta
                property="og:image"
                content={`https://shehata.io/${post.matter.coverImage.src}`}
            />
            <meta property="og:image:alt" content={post.matter.coverImage.alt} />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="200" />
            <meta
                name="twitter:image"
                content={`https://arne.me${post.matter.coverImage.src}`}
            />
        <meta name="twitter:image:alt" content={post.matter.coverImage.alt} />
            <meta name="twitter:card" content="summary_large_image" />
        </>
    )
}