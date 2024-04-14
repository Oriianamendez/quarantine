import "./App.css";
import React, { useState, useEffect } from "react";

// const INFO = [
//   {
//     allocationNid: null,
//     amount: "null",
//     correlationId: "f32bade2-0dd4-4300-a043-9b42fd2916a6",
//     createdAt: "2023-03-15 14:11:30.024759",
//     currency: null,
//     eventId: "5c5f6eef-d080-473d-aa9c-7fdd591b8c61",
//     failureReason:
//       "Listener method 'public void com.klarna.prr.payment_router.kafka.tle.TleKafkaListenerService.onCardTransaction(org.apache.kafka.clients.consumer.ConsumerRecord<byte[], byte[]>,org.springframework.kafka.support.Acknowledgment)' threw exception",
//     id: "47437b7b-1032-4406-b209-ec3087ec7d9b",
//     kafkaOffset: "222565",
//     kafkaPartition: "0",
//     kafkaTopic: "eu-staging.payment-processing.tle.card-transactions.v1",
//     publisherSystemId: null,
//     retryBudget: "10",
//     retryCount: "0",
//     sequenceKey: null,
//   },
//   {
//     allocationNid: null,
//     amount: "null",
//     correlationId: "f32bade2-0dd4-4300-a043-9b42fd2916a6",
//     createdAt: "2023-03-15 14:11:30.024759",
//     currency: null,
//     eventId: "5c5f6eef-d080-473d-aa9c-7fdd591b8c61",
//     failureReason:
//       "Listener method 'public void com.klarna.prr.payment_router.kafka.tle.TleKafkaListenerService.onCardTransaction(org.apache.kafka.clients.consumer.ConsumerRecord<byte[], byte[]>,org.springframework.kafka.support.Acknowledgment)' threw exception",
//     id: "47437b7b-1032-4406-b209-ec3087ec7d9b",
//     kafkaOffset: "222565",
//     kafkaPartition: "0",
//     kafkaTopic: "eu-staging.payment-processing.tle.card-transactions.v1",
//     publisherSystemId: null,
//     retryBudget: "10",
//     retryCount: "0",
//     sequenceKey: null,
//   },
// ];

function FetchingInfo({}) {
  const [Info, setInfo] = useState([]);

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

  return (
    <div>
      <InformationTable information={Info} />
    </div>
  );
}

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

function InformationTable({ information }) {
  const rows = [];
  information.forEach((info) => {
    rows.push(<InformationRow information={info} key={info.id} />);
  });

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
