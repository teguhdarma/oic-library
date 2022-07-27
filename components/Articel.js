import Link from 'next/link';
import { urlFor } from '../lib/client';
const Articel = ({
  post: { mainImage, title, slug, description, categories },
}) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-5">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={urlFor(mainImage)}
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            sasas
          </div>
          <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
            <Link href={`/articel/${slug.current}`} aria-label="Article">
              <p className="text-3xl font-extrabold leading-none sm:text-3xl xl:text-2xl">
                {title}
              </p>
            </Link>
          </div>
          <p className="mt-2 text-slate-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Articel;
