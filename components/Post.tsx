import Link from "next/link"

export default function Post({ post } : {post: any}) {
    const formatDate = (date) => {
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ar', options)
    }

    const decode = (txt) => {
        return decodeURI(txt.replace('/', ''))
    }
    const category = decode(post.dir)

    return (
        <article className="pt-4">
        <Link href={`/blog/${category}/${post.slug}`}>
            <h3 className="text-lg text-bold">{ post.title }</h3>
            <p className="text-xs pt-1 text-gray-500">{ formatDate(post.date) }</p>
            <p className="text-sm text-gray-600 pt-1">{ post.description }</p>
        </Link>
    </article>
    );
}
