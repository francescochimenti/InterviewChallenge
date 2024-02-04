import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setGender, setNationality, setName } from "../../reducers/userReducer";

const UserSearchBar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [selectedGender, setSelectedGender] = useState("all");
  const [selectedNationality, setSelectedNationality] = useState("all");

  // Update the user search parameters in the redux store
  useEffect(() => {
    dispatch(setName(search));
    dispatch(setGender(selectedGender));
    dispatch(setNationality(selectedNationality));
  }, [search, selectedGender, selectedNationality, dispatch]);

  return (
    <div className="bg-gray-200 p-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500  mb-20 max-w-4xl mx-auto shadow-xl">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <input
            type="text"
            placeholder="Search by name..."
            className="w-full md:w-1/3 rounded-lg p-2 shadow-xl border-gray-400 focus:outline-none focus:border-blue-500 hover:scale-105  transition-all duration-200"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <select
            className="w-full md:w-1/4 rounded-lg p-2 shadow-xl border-gray-400 focus:outline-none focus:border-blue-500 hover:scale-105  transition-all duration-200"
            value={selectedGender}
            onChange={(e) => setSelectedGender(e.target.value)}
          >
            <option value="all">All Genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <select
            className="w-full md:w-1/4 rounded-lg p-2 shadow-xl border-gray-400 focus:outline-none focus:border-blue-500 hover:scale-105  transition-all duration-200"
            value={selectedNationality}
            onChange={(e) => setSelectedNationality(e.target.value)}
          >
            <option value="all">All Nationalities</option>
            <option value="AU">Australia (AU)</option>
            <option value="BR">Brazil (BR)</option>
            <option value="CA">Canada (CA)</option>
            <option value="CH">Switzerland (CH)</option>
            <option value="DE">Germany (DE)</option>
            <option value="DK">Denmark (DK)</option>
            <option value="ES">Spain (ES)</option>
            <option value="FI">Finland (FI)</option>
            <option value="FR">France (FR)</option>
            <option value="GB">United Kingdom (GB)</option>
            <option value="IE">Ireland (IE)</option>
            <option value="IN">India (IN)</option>
            <option value="IR">Iran (IR)</option>
            <option value="MX">Mexico (MX)</option>
            <option value="NL">Netherlands (NL)</option>
            <option value="NO">Norway (NO)</option>
            <option value="NZ">New Zealand (NZ)</option>
            <option value="RS">Serbia (RS)</option>
            <option value="TR">Turkey (TR)</option>
            <option value="UA">Ukraine (UA)</option>
            <option value="US">United States (US)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default UserSearchBar;
