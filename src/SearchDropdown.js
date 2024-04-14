import React, { useState } from "react";

export function SearchDropdown({ searchText, onSearchTextChange }) {
  const [selectedOption, setSelectedOption] = useState("Options");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dropdown input-group mb-3">
      <button
        className="btn btn-outline-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {selectedOption}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect("ID")}
          >
            ID
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect("allocationNid")}
          >
            allocationNid
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect("amount")}
          >
            amount
          </a>
        </li>
        <li>
          <a
            className="dropdown-item"
            href="#"
            onClick={() => handleOptionSelect("correlationId")}
          >
            correlationId
          </a>
        </li>
      </ul>
      <input
        type="text"
        className="form-control"
        value={searchText}
        onChange={(e) => onSearchTextChange(e.target.value)}
        aria-label="Text input with dropdown button"
      />
    </div>
  );
}
