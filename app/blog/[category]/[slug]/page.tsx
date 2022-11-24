import Link from "next/link";
import MiniProfile from "../../../../components/MiniProfile";
import { getFileBySlug } from "../../../../utils/mdx";
import { MDXRemote } from 'next-mdx-remote'

export async function getData(params) {
  const post = await getFileBySlug(params.category, params.slug);
  console.log('>>>', post)
  return post;
}

export default async function Article({ params }) {
  console.log(params)
  // const {mdxSource, frontMatter } = await getFileBySlug(params.category, params.slug);
  const {mdxSource, frontMatter } = await getData(params);

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-12">
      <article className="flex flex-col md:flex-row gap-6">
        <section className="w-full md:w-3/4 flex flex-col">
          <div
            className="bg-gray-50 h-64 object-cover object-center bg-center bg-no-repeat max-h-64 w-full mb-6 square-shapre"
            style={{background: "url('" + frontMatter.img + "')'"}}
          />
          <section className="md:py-6">
            <div className="">
              <div className="flex flex-row grow gap-12">
                <div className="">
                  <h1 className="">{frontMatter.title}</h1>
                  <div className="flex flex-inline flex-wrap gap-3 mt-3">
                    {frontMatter.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={"/وسم/" + tag}
                        className="bg-gray-100 text-gray-600 py-0.5 px-1 rounded-lg"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                  <p className="text-sm pt-1 text-gray-500">
                    {/* { formatDate(article.date) } */}
                  </p>
                  <p className="pt-3 text-gray-500">
                    {frontMatter.description}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="md-content">
            {/* <nuxt-content
            :document="article"
            className="pt-3 text-gray-700 gap-4 custom"
          /> */}
          <MDXRemote {...mdxSource} />
          </section>
        </section>
        <section className="md:w-1/4">
          <MiniProfile />
        </section>
      </article>
    </div>
  );
}
