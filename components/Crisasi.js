import Link from 'next/link';
import React from 'react';

function Crisasi() {
  return (
    <div>
      <div className="relative flex flex-col-reverse px-4 py-16 mx-auto lg:block lg:flex-col lg:py-32 xl:py-48 md:px-8 sm:max-w-xl md:max-w-full">
        <div className="z-0 flex justify-center h-full -mx-4 overflow-hidden lg:pt-16 lg:pb-16 lg:pr-8 xl:pr-0 lg:w-1/2 lg:absolute lg:justify-end lg:bottom-0 lg:left-0 lg:items-center">
          <img
            src="img/chirashi.png"
            className="object-cover object-right w-full h-auto lg:w-auto lg:h-full px-4 "
            alt=""
          />
        </div>
        <div className="relative flex justify-end max-w-xl mx-auto xl:pr-32 lg:max-w-screen-xl">
          <div className="mb-16 lg:pr-5 lg:max-w-lg lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  download
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                チラシダウンロード
                <br className="hidden md:block" />
                <span className="inline-block text-deep-purple-accent-400">
                  したいかた
                </span>
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                チラシの横に記載して頂きたい文章
                卒業研究発表会のチラシになります。
              </p>
            </div>

            <div className="flex items-center mt-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                <a href="img/cisasi.png" download>
                  download
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Crisasi;
