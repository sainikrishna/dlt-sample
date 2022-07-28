import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Spinner, Table } from "reactstrap";
import InfoAlert from "../components/infoAlert";

// This data got from API
const dummyData = [
  {
    "time": "2 PM",
    "bid": "100",
    "offer": "1000",
    "purchaseAmt": "2000",
    "date": "20-Jan-2023",
  },
  {
    "time": "4 PM",
    "bid": "200",
    "offer": "3200",
    "purchaseAmt": "1900",
    "date": "24-Jan-2023",
  },
];

const Negotiation = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    // Here using Fake data API from - https://mocki.io/fake-json-api
    axios
      .get("https://mocki.io/v1/cd94a83d-2efe-429c-b174-9f841e230f95")
      .then((res) => {
        console.log("res", res);
        setData(res.data || []);
      })
      .catch((error) => {
        console.log("error", error);
        setData(dummyData);
        alert("Got error when fetch data from API");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Col>
      <h5 className="text-green fw-bold py-0">NEGOTIATION LOG</h5>
      <div className="mb-2">
        <InfoAlert text=" Current negotiations that are still open and require your further review and action." />
      </div>
      <Table className="bg-color-primary" bordered>
        <thead>
          <tr className="text-center text-light">
            <th>
              <div className="pb-2-5">
                <i class="fa-solid fa-clock"></i>
              </div>
            </th>
            <th>
              <div className="pb-2-5">Time</div>
            </th>
            <th>
              <div className="pb-2-5">Bid</div>
            </th>
            <th>
              <div className="pb-2-5">Offer</div>
            </th>
            <th>
              <div className="pb-2-5">Purchase Amt</div>
            </th>
            <th>
              <div className="">
                Remarks/Indicative <br /> Approval Date
              </div>
            </th>
          </tr>
        </thead>
        {loading ? null : (
          <tbody className="text-light text-center">
            {data.map((item, index) => (
                <tr>
                <td>{index + 1}</td>
                <td>{item.time}</td>
                <td>{item.bid}</td>
                <td>{item.offer}</td>
                <td>{item.purchaseAmt}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        )}
      </Table>
      {loading ? (
        <div className="loading-div">
          <Spinner color="secondary" type="grow">
            Loading...
          </Spinner>
        </div>
      ) : null}
    </Col>
  );
};

export default Negotiation;
