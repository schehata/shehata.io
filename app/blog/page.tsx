import Post from './Post';
import { getSortedPosts } from '../../lib/posts';

export default async function BlogIndex({ searchParams }: any) {
    const posts = await getSortedPosts(20, searchParams.tag)

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
