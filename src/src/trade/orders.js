import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Input, Row, Spinner } from "reactstrap";

// This data got from API
const dummyData = {
  "borrower": "A3 Creating for TI (cloned from 192)",
  "facilityAmount": "USD 930,000,000",
  "facilityType": "TLF",
  "maturityDate": "31-Dec-25",
  "margin": "LIBOR + 0.00% p.a.",
  "partialSalePermitted": "Yes",
  "minimumAmountSell": "23,000,000",
  "multipleThereafter": "12,000,000",
  "amountToSell": "USD 477,000,000",
  "offerPrice": "99.00%",
};

const Orders = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        // Here using Fake data API from - https://mocki.io/fake-json-api
        axios.get('https://mocki.io/v1/43521c84-f15f-4bc5-8dcb-c6ee42094ace').then(res => {
            console.log("res", res);
            setData(res.data || {});
        }).catch(error => {
            console.log("error", error);
            setData(dummyData);
            alert("Got error when fetch data from API")
        }).finally(() => {
            setLoading(false);
        })
    }

  return (
    <Col className="pe-0">
      <h5 className="text-green fw-bold py-0 pt-0">TRADE ORDER</h5>
      <Row className="mx-0 bg-color-lightGray p-2 rounded border-gray align-items-center text-black fw-semibold mb-2">
        <Col>Participant/Principal</Col>
        <Col>
          <Input required id="marginType" name="marginType" type="select">
            <option value="">Select Principal</option>
            <option>Principal 1</option>
            <option>Principal 2</option>
          </Input>
        </Col>
      </Row>

      <Col className="mx-0 bg-color-lightGray p-2 rounded border-gray align-items-center text-black fw-semibold px-0 pb-0 mb-2">
        <Col className="text-center pb-2 border-bottom px-0">
          <i class="fa-solid fa-people-arrows text-green"></i> DIRECT SETTLEMENT
        </Col>
        <Col className="bg-color-light2 pb-0">
          <Col className="text-center py-3">
            <i class="fa-solid fa-circle-check text-success fs-2"></i>
          </Col>
          <Col>
            <ul className="text-muted fw-normal mb-0 pb-3">
              <li className="mb-1">
                Identities of the Seller and Buyer will be revealed{" "}
                <a className="text-muted" href="#">
                  AFTER
                </a>{" "}
                a Price Match/Price Consensus
              </li>
              <li>
                Transfer of the loan and payment settlement will be managed{" "}
                <a className="text-muted" href="#">
                  DIRECTLY
                </a>{" "}
                between Seller and Buyer
              </li>
            </ul>
          </Col>
        </Col>
      </Col>
      <Col className="mx-0 bg-color-lightGray p-3 rounded border-gray align-items-center text-black fw-semibold mb-2">
        {loading ? (
          <div className="loading-div">
            <Spinner color="secondary" type="grow">
              Loading...
            </Spinner>
          </div>
        ) : (
          <>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Borrower/Guarantor
              </Col>
              <Col className="text-muted fs-7">{data.borrower}</Col>
            </Row>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Facility Amount{" "}
                <i class="fa-solid fa-circle-info text-green cursor-pointer"></i>
              </Col>
              <Col className="text-muted fs-7">{data.facilityAmount}</Col>
            </Row>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Facility Type
              </Col>
              <Col className="text-muted fs-7">{data.facilityType}</Col>
            </Row>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Maturity Date
              </Col>
              <Col className="text-muted fs-7">{data.maturityDate}</Col>
            </Row>
            <Row className="mb-3">
              <Col md={5} className="fs-7">
                Margin
              </Col>
              <Col className="text-muted fs-7">{data.margin}</Col>
            </Row>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Partial Sale Permitted
              </Col>
              <Col className="text-muted fs-7">{data.partialSalePermitted}</Col>
            </Row>
            <Row className="mb-1 ps-2">
              <Col md={5} className="fs-8">
                Minimum Amount to Sell
              </Col>
              <Col className="text-muted fs-7">{data.minimumAmountSell}</Col>
            </Row>
            <Row className="mb-1 ps-2">
              <Col md={5} className="fs-8">
                Multiple Thereafter
              </Col>
              <Col className="text-muted fs-7">{data.multipleThereafter}</Col>
            </Row>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Amount to Sell{" "}
                <i class="fa-solid fa-circle-info text-green cursor-pointer"></i>
              </Col>
              <Col className="text-muted fs-7">USD 477,000,000</Col>
            </Row>
            <Row className="mb-1">
              <Col md={5} className="fs-7">
                Offer Price
              </Col>
              <Col className="text-muted fs-7">{data.offerPrice}</Col>
            </Row>
          </>
        )}
      </Col>
      <Col className="mx-0 bg-color-lightGray p-3 rounded border-gray align-items-center text-black fw-semibold mb-2">
        <Row className="mb-2">
          <Col md={5} className="fs-7">
            Amount to Buy
          </Col>
          <Col>
            <Row className="text-muted fs-7 align-items-center">
              <Col md={2}>USD</Col>
              <Col md={6}>
                <Input
                  id="accruedInterest"
                  name="accruedInterest"
                  type="number"
                  className="p-0"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col md={5} className="fs-7">
            Bid Price
          </Col>
          <Col className="text-muted fs-7">
            <Row className="align-items-center">
              <Col md={3} className="pe-1">
                <Input
                  id="indicativeAverageLife1"
                  name="indicativeAverageLife1"
                  placeholder=""
                  type="text"
                  className="p-0"
                />
              </Col>
              <Col className="flex-unset width-unset d-flex align-items-end px-0">
                {" "}
                &#x2022;
              </Col>
              <Col md={3} className="ps-1 pr-0">
                <Input
                  id="indicativeAverageLife2"
                  name="indicativeAverageLife2"
                  placeholder=""
                  type="text"
                  className="p-0"
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={5} className="fs-7">
            Remarks
          </Col>
          <Col className="text-muted fs-7">
            <Input
              required
              id="marginType"
              name="marginType"
              type="select"
              className="py-0"
            >
              <option value="">Response Text</option>
              <option value="">Response Text 2</option>
            </Input>
          </Col>
        </Row>
        <Col>
          <Button className="w-100 bg-green fw-bold rounded" disabled>
            Place Order
          </Button>
        </Col>
      </Col>
    </Col>
  );
};

export default Orders;
