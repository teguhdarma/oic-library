import React, { useState } from 'react';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from 'react-icons/ai';
import Swal from 'sweetalert2';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import { useStateContext } from '../../context/StateContex';
import { useForm } from 'react-hook-form';
import PortableText from 'react-portable-text';

const ProductDetails = ({ product, products }) => {
  console.log(product);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { poster, overview, title } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();
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
        <div className="product-card">
          <img
            src={urlFor(poster)}
            width={250}
            height={250}
            className="rounded-xl  scrollbar-hide h-56 w-80"
            alt=""
          />
          <p className="product-name">{title}</p>
        </div>
        <div className="product-detail-desc">
          <h1>{title}</h1>
          <div className="reviews">
            <div className="flex">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
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
          {/* <div className="flex">
            <div className="quantity">
              <h3>Quantity:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>
          </div> */}
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
      {/* form */}
      <hr className="max-w-lg my-5 mx-auto border border-green-500" />
      {submitted ? (
        <div className="flex flex-col py-10 my-10 bg-yellow-500 text-white max-w-2xl mx-auto">
          <h3 className="mx-auto text-3xl mb-4">
            terima kasih telah memberikan komen
          </h3>
          <p className="mx-auto">sudah di terima </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-5 max-w-2xl mx-auto mb-10"
          action=""
        >
          <h3 className="text-sm text-green-500">
            berikan komen untuk rumah ini
          </h3>
          <h4 className="text-3xl font-bold">tingalkan komen di bawah</h4>
          <hr className="py-3 mt-2" />
          <input
            {...register('_id')}
            type="hidden"
            name="_id"
            value={product._id}
          />
          <label className="block mb-5" htmlFor="">
            <span className="text-gray-700">Name</span>
            <input
              {...register('name', { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring "
              placeholder="jhon applessed"
              type="text"
            />
          </label>
          <label className="block mb-5" htmlFor="">
            <span className="text-gray-700">email</span>
            <input
              {...register('email', { required: true })}
              className="shadow border rounded py-2 px-3 form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring "
              placeholder="jhon applessed"
              type="email"
            />
          </label>
          <label className="block mb-5" htmlFor="">
            <span className="text-gray-700">comment</span>
            <textarea
              {...register('comment', { required: true })}
              className="shadow border rounded py-2 px-3 form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
              placeholder="jhon appleseed "
              rows={9}
            />
          </label>
          {/* error will return when field validation fails */}
          <div className="flex flex-col p-5">
            {errors.name && (
              <span className="text-red-500">the name field is required</span>
            )}
            {errors.comment && (
              <span className="text-red-500">
                the comment field is required
              </span>
            )}
            {errors.email && (
              <span className="text-red-500">
                the comment field is required
              </span>
            )}
          </div>

          <input
            type="submit"
            className="shadow bg-green-500 hover:bg-green-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded cursor-pointer"
          />
        </form>
      )}
      {/* comment */}
      <div className="flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2">
        <h3 className="text-4xl">Comment</h3>
        <hr className="pb-2" />
        {product.comments.map((data) => (
          <div key={data._id}>
            <p>
              <span className="text-yellow-500">{data.name}</span>:
              {data.comment}
              <span className="text-gray-500 "></span>
            </p>
          </div>
        ))}
      </div>
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
    poster,
    overview,
    title,
    'comments': *[_type == "comment" && post._ref == ^._id],
  }
  `;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(products);

  return {
    props: { products, product },
  };
};

export default ProductDetails;
