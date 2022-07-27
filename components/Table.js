import Link from 'next/link';

const Table = ({ post: { title, slug, description, categories } }) => {
  return (
    <div>
      <div className="border-t border-b divide-y">
        <div className="grid py-8 sm:grid-cols-4">
          <div className="mb-4 sm:mb-0">
            <div className="space-y-1 text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800">
              <Link href="/" aria-label="Category">
                Books
              </Link>
              <p className="text-gray-600">5 Jan 2020</p>
            </div>
          </div>
          <div className="sm:col-span-3 lg:col-span-2">
            <div className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700">
              <Link href="/" aria-label="Article">
                <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                  {title}
                </p>
              </Link>
            </div>
            <p className="text-gray-700">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Table;
