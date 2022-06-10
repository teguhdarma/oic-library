import { SearchIcon, UserCircleIcon, UserIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import { useRouter } from 'next/router';
import Option from './Option';
import Cart from './Cart';

function Header({ placeholder }) {
  // kalender
  const [searchInput, setSearchInput] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuest] = useState(1);
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput('');
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 md:px-10">
      {/* left */}
      <div
        onClick={() => router.push('/')}
        className="relative flex items-center h-10 cursor-pointer my-auto"
      >
        <img src="" alt="My Image" className="logo" />
      </div>
      {/* middle search bar*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600"
          type="text"
          placeholder={placeholder || 'start your search'}
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-blue-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>
      {/* right */}

      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <div className="flex items-center space-x-1 border-2 p-2 rounded-full">
          <UserCircleIcon className="h-6" />
          <div>
            {/* <Cart /> */}
            <div>
              <Option />
            </div>
          </div>
        </div>
      </div>

      {/* kalender */}
    </header>
  );
}

export default Header;
