import React, { useState } from 'react';

export default function Example() {
  const [active, setActive] = useState(false);
  function closeItem() {
    setActive(true);
  }
  function openItem() {
    setActive(false);
  }
  return (
    <div className={active ? 'close' : 'open'}>
      <div className="bg-indigo-600 ">
        <div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8 ">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex w-0 flex-1 items-center">
              <span className="flex rounded-lg bg-indigo-800  text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"
                  />
                </svg>
              </span>
              <p className="ml-3 truncate font-medium text-white">
                <span className="md:hidden">※展示時間の短縮について</span>
                <span className="hidden md:inline">
                  ※展示時間の短縮について 18:30
                  までの作品展示を予定しておりましたが、降雪の影響により発表が終わり次第、
                  作品展示も終了させて頂きます.
                </span>
              </p>
            </div>

            <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3 ">
              <button
                onClick={closeItem}
                type="button"
                className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 h-6 w-10 text-white  items-center justify-between "
                aria-hidden="true"
              >
                <span className="sr-only">Dismiss</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
