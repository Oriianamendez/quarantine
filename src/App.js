import "./App.css";
import React from "react";
import { FetchingInfo } from "./FetchingInfo";

function InformationRow({ information }) {
  const name = information.id;

  return (
    <tr>
      <td className="description">{name}</td>
      <td className="description">{information.allocationNid}</td>
      <td className="description">{information.amount}</td>
      <td className="description">{information.correlationId}</td>
      <td className="description">{information.createdAt}</td>
      <td className="description">{information.currency}</td>
      <td className="description">{information.eventId}</td>
      <td className="description">{information.failureReason}</td>
      <td className="description">{information.kafkaOffset}</td>
      <td className="description">{information.kafkaPartition}</td>
      <td className="description">{information.kafkaTopic}</td>
      <td className="description">{information.publisherSystemId}</td>
      <td className="description">{information.retryBudget}</td>
      <td className="description">{information.retryCount}</td>
      <td className="description">{information.sequenceKey}</td>
    </tr>
  );
}

export function InformationTable({ information, searchText }) {
  const rows = [];
  information.forEach((info) => {
    if (!info.id.toLowerCase().startsWith(searchText.toLowerCase())) {
      return;
    }
    rows.push(<InformationRow information={info} key={info.id} />);
  });
  console.log(searchText);
  return (
    <table className="head">
      <thead>
        <tr>
          <th className="heading">ID</th>
          <th className="heading">allocationNid</th>
          <th className="heading">amount</th>
          <th className="heading">correlationId</th>
          <th className="heading">createdAt</th>
          <th className="heading">currency</th>
          <th className="heading">Event ID</th>
          <th className="heading">failureReason</th>
          <th className="heading">kafkaOffset</th>
          <th className="heading"> kafkaPartition</th>
          <th className="heading">kafkaTopic</th>
          <th className="heading">publisherSystemId</th>
          <th className="heading">retryBudget</th>
          <th className="heading">retryCount</th>
          <th className="heading">sequenceKey</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function App() {
  return <FetchingInfo />;
}

export default App;
