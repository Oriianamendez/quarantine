import React, { useState, useEffect } from "react";
import { InformationTable } from "./App";
import { SearchDropdown } from "./SearchDropdown";

export function FetchingInfo({}) {
  const [Info, setInfo] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("id");

  useEffect(() => {
    fetch("/input.json", { mode: "no-cors" })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((data) => {
        setInfo(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <SearchDropdown
        searchText={searchText}
        onSearchTextChange={setSearchText}
        selectedOption={selectedOption}
        onOptionChange={handleOptionSelect}
      />
      <InformationTable
        information={Info}
        searchText={searchText}
        onSearchTextChange={setSearchText}
        selectedOption={selectedOption}
      />
    </div>
  );
}
