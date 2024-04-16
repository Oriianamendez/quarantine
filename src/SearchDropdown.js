import React, { useState } from "react";

export function SearchDropdown({
  searchText,
  onSearchTextChange,

  onOptionChange,
}) {
  const [selectedOption, setSelectedOption] = useState("Options");

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onOptionChange(option);
  };

  const optionItems = [
    "id",
    "eventId",
    "correlationId",
    "allocationNid",
    "amount",
    "createdAt",
    "currency",
    "failureReason",
    "kafkaOffset",
    "kafkaPartition",
    "kafkaTopic",
    "publisherSystemId",
    "retryBudget",
    "transactionType",
    "transactionInstrument",
    "retryCount",
    "sequenceKey",
    "updatedAt",
  ];

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
        {optionItems.map((option) => (
          <li key={option}>
            <a
              className="dropdown-item"
              href="#"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </a>
          </li>
        ))}
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
