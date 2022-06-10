import React from 'react';
import { urlFor } from '../lib/client';
import Link from 'next/link';
const Product = ({ product: { poster, title, slug } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(poster)}
            width={250}
            height={250}
            className="rounded-xl  scrollbar-hide h-64 w-64"
            alt=""
          />
          <p className="product-name">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
