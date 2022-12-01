import Profile from './Profile'
import Post from './blog/Post'
import { getSortedPosts } from '../lib/posts';

export default async function Home() {
  const posts = await getSortedPosts(3)

  return (
    <section>
    <Profile />

    <section className="bg-primary py-12 px-3 md:px-6 lg:px-12">
      <div className="container mx-auto">
      <div className="text-xl leading-relaxed">
          <p className="text-2xl text-[#444]">أهلاً بكم في صالوني الثقافي،</p>
          حيث كل كتابة هى نداء الى التفكر والتأمل في مجريات العصر الحالي، مع
          مزيج من جديد التقنية والويب.
        </div>
      </div>
    </section>

    <section className="container mx-auto py-12 px-3 md:px-6 lg:px-12">
      <div className="flex flex-col md:flex-row gap-12">
        
        <div className="flex flex-col md:flex-row w-full gap-6">
          <section className="md:w-2/3">
            <h2 className="">آخر كتاباتي</h2>
            {posts.map((post) =>
            <div key={post.slug}>
              <Post post={post} />
            </div>
          )}
          </section>
          <section className="md:w-1/3">
            <h2>المشروعات</h2>
            <ul className="list-none">
              <li>
                <h3>
                  <a target="_blank" title="مٍصباح" rel="noopener" href="https://mesba7.com" className="font-bold text-lg">مِصباح</a>
                </h3>
                <p className="text-gray-600">مولد النصوص العشوائية باللغة العربية</p>
              </li>
            </ul>
          </section>
        </div>
      </div>
      
    </section>
    
  </section>
  )
}
