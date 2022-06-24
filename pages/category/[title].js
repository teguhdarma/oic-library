import Link from 'next/link';
import { client, urlFor } from '../../lib/client';
import { useRouter } from 'next/router';
import PortableText from 'react-portable-text';
const Tipees = ({ posts }) => {
  const { poster, overview } = posts;
  const Router = useRouter();
  console.log(posts);
  const { title } = Router.query;

  return (
    <div>
      <h2 className="text-4xl leading-8 font-semibold mb-12 text-slate-700 mt-4 ml-20">
        look at {title}
      </h2>
      <div className="products-container">
        {posts.map((post) => (
          <Link key={post._id} href={`/product/${post.slug.current}`}>
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <img
                className="rounded-t-lg w-full h-80"
                src={urlFor(post.poster).url()}
                alt=""
              />
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </h5>

                <div>
                  <PortableText
                    content={post.overview}
                    serializers={{
                      h1: ({ porps }) => (
                        <h1 className="text-3xl font-bold my-5{...props}"></h1>
                      ),
                      h2: ({ porps }) => (
                        <h2 className="text-xl font-bold my-5{...props}" />
                      ),
                      li: ({ children }) => (
                        <li className="ml-4 list-disc">{children}</li>
                      ),
                      link: ({ href, children }) => (
                        <a
                          href={href}
                          className="text-blue-500 hover:underline"
                        >
                          {children}
                        </a>
                      ),
                    }}
                  />
                </div>

                <a
                  href="#"
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    className="ml-2 -mr-1 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  ></svg>
                </a>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tipees;

export async function getServerSideProps(context) {
  const location = context.query.title;
  const query = `*[_type == "movie" && tipe->title == $location]
  {
    id,
    slug,
    poster,
    title,
    overview
  }`;
  const params = { location: location };
  const posts = await client.fetch(query, params);
  return {
    props: {
      posts,
    },
  };
}
