import Head from 'next/head';
import React from 'react';
import { Slide, Product, Simple } from '../components';
import { client } from '../lib/client';
import { Hero } from '../components/Hero';
import { Feature } from '../components/Features';
import { Team } from '../components/Team';
import New from '../components/New';
import Articel from '../components/Articel';
import Link from 'next/link';

const Home = ({ products, bannerData, slides, posts }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Hero />
      </div>
      <div>
        <Feature />
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
            <Product key={product._id} product={product} variants={product} />
          ))}
        </div>
      </section>
      <section>
        <div className="max-w-7xl mx-auto px-8 sm:px-16 mb-4">
          <div className="products-heading">
            <h2>Category</h2>
          </div>
          <Simple slides={slides} />
        </div>
      </section>
      <section>
        <div>
          <div className="products-heading">
            <h2>Articel</h2>
          </div>
          {posts?.map((item) => (
            <Articel key={item._id} post={item} />
          ))}
          <div className="text-center mt-10 px-5  font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
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
      <section>
        <div className="products-heading">
          <h2>What`s a new</h2>
          <New FooterBanner={bannerData && bannerData[0]} />
        </div>
      </section>
      <section>
        <Team />
      </section>
    </div>
  );
};
export const getServerSideProps = async () => {
  const query = '*[_type == "movie"]';
  const products = await client.fetch(query);
  const slide = '*[_type == "tipe"]';
  const slides = await client.fetch(slide);
  const bannerquery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerquery);
  const post = '*[_type == "post"][0...3]';
  const posts = await client.fetch(post);

  return {
    props: { products, bannerData, slides, posts },
  };
};
export default Home;
