import Head from 'next/head';
import { Header, Banner, Slide, Product, Footer } from '../components';

import { client } from '../lib/client';

export default function Home({ products }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <main className="max-w-7xl mx-auto px-8 sm:px-16 mb-4">
        <section>
          <div className="products-heading">
            <h2>Recommend book</h2>
            <p>speakers of many variationals</p>
          </div>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 scrollbar-hide">
            {products?.map((product) => (
              <Slide key={product._id} product={product} />
            ))}
          </div>
        </section>
      </main>
      <section>
        <div className="products-heading">
          <h2>All book </h2>
          <p>speakers of many variationals</p>
        </div>
        <div className="products-container">
          {products?.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      </section>
      <section>
        <div className="mt-12">
          <Footer />
        </div>
      </section>
    </div>
  );
}
export const getServerSideProps = async () => {
  const query = '*[_type == "movie"]';
  const products = await client.fetch(query);

  return {
    props: { products },
  };
};
