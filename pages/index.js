import Head from 'next/head';
import React from 'react';
import parse from 'html-react-parser';
import { client, urlFor } from '../lib/client';
import Features from '../components/Features';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import New from '../components/New';
import Caraosel from '../components/Caraosel';
import Hero from '../components/Hero';
import Crisasi from '../components/Crisasi';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Slide } from '../components';

const Home = ({ products, bannerData, slides }) => {
  return (
    <div>
      <Head>
        <title>卒業研究発表会</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
      </motion.div>
      <div>
        <Caraosel />
      </div>

      <section id="about">
        <Features />
      </section>
      <div>
        <Hero />
      </div>
      <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img h-60 "></section>
      <section>
        <div className="products-heading">
          <h2>学科</h2>
        </div>
        <div className="flex space-x-3 justify-center overflow-scroll scrollbar-hide p-3 scrollbar-hide">
          <Slide slides={slides} />
        </div>
      </section>

      <section id="colab">
        <div className="products-heading">
          <h2>✕ IT</h2>
        </div>
        <div className="products-container">
          {products.map((post) => (
            <Link key={post._id} href={`/product/${post.slug.current}`}>
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg w-full h-80 hover:scale-105 transition-transform duration-200 ease-in-out"
                    src={urlFor(post.poster).url()}
                    alt=""
                  />
                </a>

                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {parse(post.title)}
                    </h5>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    詳しく見る→
                  </a>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section id="table">
        <div className="products-heading content-center sm:w-full">
          <h2>タイムスケジュール</h2>
        </div>
        <img
          src="img/table3.png"
          className="h-auto  sm:w-full h-full lg:max-w-full rounded-lg content-center"
          alt="image description"
        />
      </section>

      <section id="articel">
        <div>
          <div className="max-w7xl mx-auto px-8 sm:px-16 mb-10 ">
            <div className="products-heading">
              <h2 className="mb-10">OICのツイッター</h2>
              <div>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="shirokuma014"
                  options={{ height: 600 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="haishin">
        <div className="products-heading">
          <h2>YouTube配信</h2>
          <New FooterBanner={bannerData && bannerData[0]} />
        </div>
      </section>

      <section id="download">
        <div className="products-heading ">
          <h2 className="mt-24">Download</h2>
          <Crisasi />
        </div>
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
