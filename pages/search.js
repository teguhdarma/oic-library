import React from 'react';
import { useRouter } from 'next/router';

import InfoCard from '../components/InfoCard';
import Pagination from '../components/Pagination';
import { client } from '../lib/client';
import Link from 'next/link';
import Table from '../components/Table';

function search({ products, categories }) {
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
        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Table />
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

  return {
    props: {
      products,
      categories,
    },
  };
}
