import Link from 'next/link';
import { urlFor } from '../lib/client';

const New = ({ FooterBanner: { product, buttonText, image, desc } }) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          <img
            src={urlFor(image)}
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full opacity-110 transition duration-300 ease-in-out bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:opacity-70"
          />
          <svg
            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg>
        </div>
        <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              youtube
            </p>
          </div>
          <h5 className="mb-3 text-5xl font-extrabold leading-none sm:text-4xl">
            {product}
          </h5>
          <p className="mb-5 text-gray-800">{desc}</p>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              <Link href="https://youtu.be/6sQLf_ASXbI">{buttonText}</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default New;
