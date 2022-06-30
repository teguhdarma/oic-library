import React, { useRef } from 'react';
import Link from 'next/link';
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';

import { urlFor } from '../lib/client';
import getStripe from '../lib/getStripe';
import { useStateContext } from '../context/StateContex';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt:
      'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
];

const Cart = () => {
  const cartRef = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className="heading">Your Cart</span>
          <span className="cart-num-items">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className="empty-cart ">
            <div className="flex items-center justify-center">
              <AiOutlineShopping size={150} />
            </div>

            <p>buy</p>
            <h3>Your shopping bag is empty</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}

        {/* <div className="product-container mt-8">
          <div className="flow-root">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <div
                  className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                  key={item._id}
                >
                  <img
                    src={urlFor(item?.poster)}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="item-desc">
                    <div className="flex top">
                      <h5>{item.title}</h5>
                    </div>
                    <div className="flex bottom">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Consequatur quidem molestiae, placeat quae non
                        sapiente incidunt.
                      </p>
                      <button
                        type="button"
                        className="remove-item"
                        onClick={() => onRemove(item)}
                      >
                        <TiDeleteOutline />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div> */}

        <div className="flow-root mt-12 my-6">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItems.length >= 1 &&
              cartItems.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                    <img
                      src={urlFor(item?.poster)}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3>
                          <a href={item.href}> {item.title} </a>
                        </h3>
                        <p className="ml-4">{item.popularity}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        {item.relase}
                      </p>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <p className="text-gray-500">Qty {item.quantity}</p>

                      <div className="flex">
                        <button
                          type="button"
                          className="remove-item"
                          onClick={() => onRemove(item)}
                        >
                          <TiDeleteOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <span className="cart-num-items">({totalQuantities} items)</span>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <a
              href="/check"
              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <Link href="/">
                <button
                  type="button"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Continue Shopping<span aria-hidden="true"> &rarr;</span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>

    // {cartItems.length >= 1 && (
    //   <div className="cart-bottom">
    //     <div className="total">
    //       <h3>Subtotal:</h3>
    //       <h3>${totalPrice}</h3>
    //     </div>
    //     <div className="btn-container">
    //       <button type="button" className="btn" onClick={handleCheckout}>
    //         Pay with Stripe
    //       </button>
    //     </div>
    //   </div>
    // )}
    //   </div>
    // </div>
  );
};

export default Cart;
