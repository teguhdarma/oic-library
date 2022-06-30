import React from 'react';
import { urlFor } from '../lib/client';
import { StarIcon } from '@heroicons/react/solid';
import PortableText from 'react-portable-text';
import Link from 'next/link';

function InfoCard({ product: { poster, title, popularity, overview, slug } }) {
  return (
    <Link href={`/product/${slug.current}`}>
      <div className="flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t ">
        <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 hover:scale-105 transform transition duration-300 ease-out">
          <img
            src={urlFor(poster)}
            width={250}
            height={250}
            className="rounded-xl  scrollbar-hide h-56 w-80"
            alt=""
          />
        </div>
        <div className="flex flex-col flex-grow pl-5">
          <h4 className="text-xl">{title}</h4>
          <div className="border-b w-10 py-2" />
          <div>
            <PortableText
              content={overview}
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
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>
          <div className="flex justify-between items-end pt-5">
            <p className="flex items-center">
              <StarIcon className="h-5 text-red-400" />
              {popularity}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default InfoCard;
