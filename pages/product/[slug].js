import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { Navbar } from '../../components/Navbar';
import PortableText from 'react-portable-text';
import PostBody from '../../components/post-body';
import PostBody2 from '../../components/post-body2';
import PostBody3 from '../../components/post-body3';
import PostBody4 from '../../components/post-body4';
import PostBody5 from '../../components/post-body5';
import PostBody6 from '../../components/post-body6';
import PostBody7 from '../../components/post-body7';
import PostRes from '../../components/post-res';
import PostRes2 from '../../components/post-res2';
import PostRes3 from '../../components/post-res3';
import PostRes4 from '../../components/post-res4';
import PostRes5 from '../../components/post-res5';
import PostRes6 from '../../components/post-res6';
import PostRes7 from '../../components/post-res7';
const ProductDetails = ({ product, products }) => {
  const {
    title,
    tipesetsumei1,
    tipesetsumei2,
    tipesetsumei3,
    tipesetsumei4,
    tipesetsumei5,
    tipesetsumei6,
    tipesetsumei7,
    tipehaikei1,
    tipehaikei2,
    tipehaikei3,
    tipehaikei4,
    tipehaikei5,
    tipehaikei6,
    tipehaikei7,
    overview,
    sakuhinnamae1,
    sakuhinnamae2,
    sakuhinnamae3,
    sakuhinnamae4,
    sakuhinnamae5,
    sakuhinnamae6,
    sakuhinnamae7,
    sakuhinsetsumei1,
    sakuhinsetsumei2,
    sakuhinsetsumei3,
    sakuhinsetsumei4,
    sakuhinsetsumei5,
    sakuhinsetsumei6,
    sakuhinsetsumei7,
    sakuhinhaikei1,
    sakuhinhaikei2,
    sakuhinhaikei3,
    sakuhinhaikei4,
    sakuhinhaikei5,
    sakuhinhaikei6,
    sakuhinhaikei7,
    name,
    mainImage1,
    mainImage2,
    mainImage3,
    mainImage4,
    mainImage5,
    mainImage6,
    mainImage7,
    image,
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
      <Navbar />
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

      {/* Container for demo purpose */}
      <div className="container my-24 px-6 mx-auto">
        {/* Section: Design Block */}
        <section className="mb-32 text-gray-800">
          <div className="products-heading ">
            <h2 className="br-4">作品</h2>
          </div>
          <div className="flex flex-wrap mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage1 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage1).url()}
                    alt=""
                  />
                )}
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae1}</h3>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei1}
              </div>
              <p className="text-gray-500 mb-6">
                <PostBody content={sakuhinsetsumei1} />
              </p>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                {tipehaikei1}
              </div>
              <p className="text-gray-500">
                <PostRes content={sakuhinhaikei1} />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-row-reverse mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage2 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage2).url()}
                    alt=""
                  />
                )}

                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae2}</h3>
              <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei2}
              </div>
              <p className="text-gray-500">
                <PostBody2 content={sakuhinsetsumei2} />
              </p>
              <div className="text-blue-600 text-sm mb-4 flex items-center mt-4 font-medium">
                {tipehaikei2}
              </div>
              <p className="text-gray-500">
                <PostRes2 content={sakuhinhaikei2} />
              </p>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}

      {/* Section: Design Block */}
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage3 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage3)}
                    alt=""
                  />
                )}
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae3}</h3>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei3}
              </div>
              <p className="text-gray-500 mb-6">
                <PostBody3 content={sakuhinsetsumei3} />
              </p>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                {tipehaikei3}
              </div>
              <p className="text-gray-500">
                <PostRes3 content={sakuhinhaikei3} />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-row-reverse mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage4 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage4)}
                    alt=""
                  />
                )}

                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae4}</h3>
              <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei4}
              </div>
              <p className="text-gray-500">
                <PostBody4 content={sakuhinsetsumei4} />
              </p>
              <div className="text-blue-600 text-sm mb-4 flex items-center mt-4 font-medium">
                {tipehaikei4}
              </div>
              <p className="text-gray-500">
                <PostRes4 content={sakuhinhaikei4} />
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Section: Design Block */}

      {/* Section: Design Block */}
      <div className="container my-24 px-6 mx-auto">
        <section className="mb-32 text-gray-800">
          <div className="flex flex-wrap mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage5 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage5)}
                    alt=""
                  />
                )}
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae5}</h3>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei5}
              </div>
              <p className="text-gray-500 mb-6">
                <PostBody5 content={sakuhinsetsumei5} />
              </p>
              <div className="text-red-600 text-sm mb-4 flex items-center font-medium">
                {tipehaikei5}
              </div>
              <p className="text-gray-500">
                <PostRes5 content={sakuhinhaikei5} />
              </p>
            </div>
          </div>
          <div className="flex flex-wrap lg:flex-row-reverse mb-12">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage6 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage6)}
                    alt=""
                  />
                )}

                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae6}</h3>
              <div className="text-blue-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei6}
              </div>
              <p className="text-gray-500">
                <PostBody6 content={sakuhinsetsumei6} />
              </p>
              <div className="text-blue-600 text-sm mb-4 flex items-center mt-4 font-medium">
                {tipehaikei6}
              </div>
              <p className="text-gray-500">
                <PostRes6 content={sakuhinhaikei6} />
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pr-6 mb-6 lg:mb-0">
              <div
                className="relative overflow-hidden bg-no-repeat bg-cover ripple shadow-lg rounded-lg"
                style={{ backgroundPosition: '50%' }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                {mainImage7 && (
                  <img
                    className="bg-gray-100 rounded-lg w-full "
                    src={urlFor(mainImage7)}
                    alt=""
                  />
                )}
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 hover:opacity-100 transition duration-300 ease-in-out"
                    style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                  />
                </a>
              </div>
            </div>
            <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 lg:pl-6">
              <h3 className="text-2xl font-bold mb-4">{sakuhinnamae7}</h3>
              <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium">
                {tipesetsumei7}
              </div>
              <p className="text-gray-500 mb-6 ">
                <PostBody7 content={sakuhinsetsumei7} />
              </p>
              <div className="text-yellow-600 text-sm mb-4 flex items-center font-medium">
                {tipehaikei7}
              </div>
              <p className="text-gray-500">
                <PostRes7 content={sakuhinhaikei7} />
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* Section: Design Block */}

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
    tipesetsumei1,
    tipesetsumei2,
    tipesetsumei3,
    tipesetsumei4,
    tipesetsumei5,
    tipesetsumei6,
    tipesetsumei7,
    tipehaikei1,
    tipehaikei2,
    tipehaikei3,
    tipehaikei4,
    tipehaikei5,
    tipehaikei6,
    tipehaikei7,
    overview,
    sakuhinnamae1,
    sakuhinnamae2,
    sakuhinnamae3,
    sakuhinnamae4,
    sakuhinnamae5,
    sakuhinnamae6,
    sakuhinnamae7,
    sakuhinsetsumei1,
    sakuhinsetsumei2,
    sakuhinsetsumei3,
    sakuhinsetsumei4,
    sakuhinsetsumei5,
    sakuhinsetsumei6,
    sakuhinsetsumei7,
    sakuhinhaikei1,
    sakuhinhaikei2,
    sakuhinhaikei3,
    sakuhinhaikei4,
    sakuhinhaikei5,
    sakuhinhaikei6,
    sakuhinhaikei7,
    name,
    mainImage1,
    mainImage2,
    mainImage3,
    mainImage4,
    mainImage5,
    mainImage6,
    mainImage7,
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
