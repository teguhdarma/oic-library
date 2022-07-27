import React from 'react';
import { useRouter } from 'next/router';
import InfoCard from '../components/InfoCard';
import Pagination from '../components/Pagination';
import { client } from '../lib/client';
import Link from 'next/link';
import Table from '../components/Table';
import Articel from '../components/Articel';

function search({ products, categories, posts }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div>
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          {categories?.map((item) => (
            <Link key={item._id} href={`/category/${item.title}`}>
              <div className="hidden lg:inline-flex mb-5 ml-3 space-x-3 text-gray-800 whitespace-nowrap">
                <p className="button">{item.title}</p>
              </div>
            </Link>
          ))}
          {/* render info card */}
          <div>
            {products?.map((product) => (
              <InfoCard key={product._id} product={product} />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[600px] mt-16 mb-2">
          <div>
            <div className="text-5xl mb-2">
              <h2>Articel</h2>
            </div>
            {posts?.map((item) => (
              <Table key={item._id} post={item} />
            ))}
            <div className="text-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 mt-5">
              <Link href="/blog" aria-label="">
                See all articles
              </Link>
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Pagination />
    </div>
  );
}

export default search;

export async function getServerSideProps() {
  const query = '*[_type == "movie"]';
  const products = await client.fetch(query);
  const category = '*[_type == "tipe"]';
  const categories = await client.fetch(category);
  const post = '*[_type == "post"][0...3]';
  const posts = await client.fetch(post);

  return {
    props: {
      products,
      categories,
      posts,
    },
  };
}
