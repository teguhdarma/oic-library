/* eslint-disable @next/next/no-html-link-for-pages */
export const Footer = () => {
  return (
    <div className="overflow-hidden bg-cyan-400">
      <div className=" py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between xl:flex-row">
          <div className="w-full max-w-xl mb-12 xl:pr-16 xl:mb-0 xl:w-7/12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              <span className="text-white-400">
                専門学校岡山情報ビジネス学院
              </span>
            </h2>
            <p className="max-w-xl mb-4 text-base text-white md:text-lg">
              岡山県岡山市北区駅元町1-4 ターミナルスクエア
              <br />
              TEL：086-224-2336
            </p>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-white hover:text-teal-accent-700"
            >
              HP：https://www.oic-ok.ac.jp/
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
          <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
            <div className="relative">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute bottom-0 right-0 z-0 hidden w-32 -mb-8 -mr-20 text-teal-accent-400 lg:w-32 lg:-mr-16 sm:block"
              >
                <defs>
                  <pattern
                    id="766323e1-e594-4ffd-a688-e7275079d540"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#766323e1-e594-4ffd-a688-e7275079d540)"
                  width="52"
                  height="24"
                />
              </svg>

              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431.6419190068736!2d133.91901771145854!3d34.664568903886085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3554064ceb0ed20f%3A0x81b50930498b82f6!2z44CSNzAwLTAwMjQgT2theWFtYSwgS2l0YSBXYXJkLCBFa2ltb3RvbWFjaGksIDHiiJI0IOOCv-ODvOODn-ODiuODq-OCueOCr-OCqOOCog!5e0!3m2!1sid!2sjp!4v1673587684103!5m2!1sid!2sjp"
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
