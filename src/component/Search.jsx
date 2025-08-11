import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../features/search/searchSlice";
import { useNavigate } from "react-router-dom";
import { HiOutlineMagnifyingGlass, HiOutlineXMark } from "react-icons/hi2";
import { toggleSearch } from "../features/search/searchSlice";
const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.search.searchTerm);
    const handleChange = (e) => {
    dispatch(setSearchTerm(e.target.value));
    navigate(`/collections`);
    // dispatch(toggleSearch(false));
  };
  const handleClear = () => {
    dispatch(setSearchTerm(""));
    // dispatch(toggleSearch(false));
  };
  const handleBlur = () => {
    dispatch(toggleSearch(false));
  };

  return (
    <div className="fixed top-16 left-0 right-0 w-full shadow px-2  h-20 backdrop-blur  z-50  flex justify-center">
      <div className="flex items-center w-full md:w-1/2 py-2 relative justify-center">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
          className="w-full p-2 pl-10 text-sm text-gray-700 border-b-2  border-primary  rounded focus:outline-none "
        />
      
        <HiOutlineMagnifyingGlass
          size={20}
          className="absolute w-5 h-5  left-3 top-1/2 -translate-y-1/2"
            />
            {
                searchTerm && (
                    <HiOutlineXMark
                    size={20}
                    className="absolute w-5 h-5  right-3 top-1/2 -translate-y-1/2"
                    onClick={handleClear}
                    />
                )
            }
            <div 
            size={20}
            className="absolute w-5 h-5  -right-10 font-bold cursor-pointer top-1/2 -translate-y-1/2"
            onClick={handleBlur}
            >
                Close
            </div>
      </div>
    </div>
  );
};

export default Search;
