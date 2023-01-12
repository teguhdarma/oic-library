import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import PortableText from 'react-portable-text';

const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  {
    name: 'Material',
    description:
      'Solid walnut base with rare earth magnets and powder coated steel card cover',
  },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  {
    name: 'Finish',
    description: 'Hand sanded and finished with natural oil',
  },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  {
    name: 'Considerations',
    description:
      'Made from natural materials. Grain and color vary with each item.',
  },
];
const ProductDetails = ({ product, products }) => {
  const {
    overview,
    title,
    image,
    mainImage,
    mainImage2,
    mainImage3,
    mainImage4,
    author,
    cast,
    cast2,
    cast3,
  } = product;
  console.log(products);
  const [index, setIndex] = useState(0);
  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    fetch('/api/createComment', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then(() => {
        console.log(data);
        setSubmitted(true);
        Swal.fire('terima kasih!', 'sudah terkirim!', 'success');
      })
      .catch((err) => {
        console.log(err);
        setSubmitted(false);
      });
  };

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div>
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image h-60 w-80"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? 'small-image selected-image' : 'small-image'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className="product-detail-desc">
          <div className="text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl">
            {title}
          </div>

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
        </div>
      </div>
      <div>
        <div className="bg-white">
          <div className="max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                作品
              </h2>
              <p className="mt-4 text-gray-500">
                The walnut wood card tray is precision milled to perfectly fit a
                stack of Focus cards. The powder coated steel divider separates
                active cards from new ones, or can be used to archive important
                task lists.
              </p>

              <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                  <div
                    key={feature.name}
                    className="border-t border-gray-200 pt-4"
                  >
                    <dt className="font-medium text-gray-900">
                      {feature.name}
                    </dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
              {mainImage2 && (
                <img
                  className="bg-gray-100 rounded-lg"
                  src={urlFor(mainImage)}
                  alt=""
                />
              )}
              {mainImage3 && (
                <img
                  className="bg-gray-100 rounded-lg"
                  src={urlFor(mainImage3)}
                  alt=""
                />
              )}

              {mainImage4 && (
                <img
                  className="bg-gray-100 rounded-lg"
                  src={urlFor(mainImage4)}
                  alt=""
                />
              )}
              {mainImage && (
                <img
                  className="bg-gray-100 rounded-lg"
                  src={urlFor(mainImage2)}
                  alt=""
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <section></section>

      <div className="products-heading ">
        <h2 className="br-4">他の学科</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      {/* form */}
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    },
    
  }`;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "movie" && slug.current == '${slug}'][0]{
    _id,
    title,
    overview,
    mainImage,
      mainImage2,
      mainImage3,
      mainImage4,
    image,
    'cast': castMembers[].person->name,
    'cast2': castMembers[].characterName,
    'cast3': castMembers[].person->image,
  }
  `;
  const productsQuery = '*[_type == "movie"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(products);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
