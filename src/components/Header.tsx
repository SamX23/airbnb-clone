import { AIRBNB_LOGO } from "@/constant/URLS";
import Image from "next/image";
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);

  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };

  const handleOnChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleRangePicker = (ranges) => {
    console.log(ranges);
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const handleInputGuest = (e) => setNoOfGuests(e.target.value);

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 items-center">
      <div className="flex relative items-center h-10 cursor-pointer">
        <Image
          src={AIRBNB_LOGO}
          alt="Airbnb Logo"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex items-center justify-between py-1 md:border-2 md:shadow-sm rounded-full">
        <input
          value={searchInput}
          onChange={handleOnChange}
          type="text"
          name="search"
          placeholder="Start your search | Where ever you go"
          className="flex-grow pl-5 outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex md:mx-1 h-8 bg-red-500 text-white rounded-full p-2" />
      </div>
      <div className="flex space-x-4 justify-end items-center text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleRangePicker}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl font-semibold flex-grow">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />

            <input
              type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              value={noOfGuests}
              onChange={handleInputGuest}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
