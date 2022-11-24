import Post from '../../components/Post';
import { getSortedPost } from '../../utils/mdx';

export default async function BlogIndex() {
  // const posts = await $content('/', {deep: true}).without(['body']).where({isDraft: {'$ne': true}}).sortBy('date', 'desc').fetch()
  const posts = await getSortedPost()

  return (
    <div className="container mx-auto px-3 md:px-6 lg:px-12">
      <div className="mt-6 md:w-3/4">
        <h1 className="title">المدونة</h1>
        <div className="posts">
          <ul>
            {posts.map((post,index) => 
            <li key={index} className="mt-6">
              <Post post={post} />
            </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
