import Link from 'next/link';

import { client, urlFor } from '../lib/client';
const Tipees = ({ posts }) => {
  return (
    <div className="mt-10 ">
      <h2 className="text-4xl leading-8 font-bold mb-12 text-slate-700 mt-4 ml-2 text-center ">
        all articel
      </h2>
      <div className="products-container ">
        {posts.map((post) => (
          <Link key={post._id} href={`/articel/${post.slug.current}`}>
            <div>
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
                <img
                  className="rounded-t-lg w-80 h-64 "
                  src={urlFor(post.mainImage).url()}
                  alt=""
                />
                <div className="p-5">
                  <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                    <a
                      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
                      aria-label="Category"
                      title="traveling"
                    >
                      traveling
                    </a>
                    <span className="text-gray-600">— 28 Dec 2020</span>
                  </p>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white inline-block transition-colors duration-200 hover:text-deep-purple-accent-700">
                    {post.title}
                  </h5>

                  <div className="mb-5">{post.description}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tipees;

export async function getServerSideProps() {
  const query = `*[_type == "post"]`;

  const posts = await client.fetch(query);
  return {
    props: {
      posts,
    },
  };
}
