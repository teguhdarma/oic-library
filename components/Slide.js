import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import Image from 'next/image';
const Slide = ({ product: { poster, title, slug } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out scrollbar-hide ">
          <div className="relative h-80 w-80  scrollbar-hide">
            <img
              src={urlFor(poster)}
              alt={poster[0]?.alternativeText}
              layout="fill"
              className="rounded-xl  scrollbar-hide　 h-80 w-80"
            />
          </div>

          <h3 className="text-2xl mt-3">{title}</h3>
        </div>
      </Link>
    </div>
  );
};

export default Slide;
