export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 ">
          Oic Team
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium.
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">難波</p>
            <p className="text-sm text-gray-800">Backend Developver</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">ゆうあとも</p>
            <p className="text-sm text-gray-800">Backend Developer</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">handoko</p>
            <p className="text-sm text-gray-800">Designer UI/UX</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <img
            className="object-cover w-20 h-20 mb-2 rounded-full shadow"
            src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt="Person"
          />
          <div className="flex flex-col items-center">
            <p className="text-lg font-bold">teguh</p>
            <p className="text-sm text-gray-800">Frontend Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};
