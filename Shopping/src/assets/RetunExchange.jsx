import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import { PiDressBold } from "react-icons/pi";

function RetunExchange() {
    return (
        <div
            style={{ paddingTop: "150px", textAlign: "center" }}
            className="m-auto"
        >
            <Container>
                <h1 className="fw-bold pt-5 pb-3">Return and Exchange</h1>
                <p className="pb-5 fw-bold">
                    Based on the Return/ Exchange policy updated on PDP. Return/exchange
                    requests will be accommodated. In the case of a non-serviceable PIN
                    code, the product can be self-shipped. Pickup and refund timelines
                    will differ basis the courier and payment mode.
                </p>
                <Row className="justify-content-center">
                    <Col lg={4} className="d-flex justify-content-center">
                        <div
                            className="rounded-circle d-flex flex-column align-items-center justify-content-center"
                            style={{
                                backgroundColor: "#d07272",
                                height: "210px",
                                width: "210px",
                            }}
                        >
                            <img src="/circle.png" className="w-25 m-1" style={{ filter: "brightness(0)" }} />
                            <p className="px-4 fw-bold text-center">I want a different color or size</p>
                        </div>

                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <div
                            className="rounded-circle bg-dark  d-flex flex-column align-items-center justify-content-center"
                            style={{ height: "210px", width: "210px" }}
                        >
                            <img src="/style-removebg-preview.png" className="w-25 m-1" style={{
                                filter: "brightness(0) invert(1)",
                            }} />


                            <p className="text-white px-4 fw-bold">
                                I want a different style
                            </p>
                        </div>
                    </Col>
                    <Col lg={4} className="d-flex justify-content-center">
                        <div
                            className="rounded-circle bg-secondary bg-opacity-25  d-flex flex-column align-items-center justify-content-center"
                            style={{ height: "210px", width: "210px" }}

                        >
                            <img src="/refund.png" className="w-25 m-1" style={{
                                filter: "brightness(0) "
                            }} />
                            <p className="px-4 fw-bold">I want immediate refund</p>
                        </div>
                    </Col>
                </Row>
                <div className="m-auto shadow mb-5 bg-white rounded w-100 my-5">
                    {/* Single Accordion with unique event keys */}
                    <Accordion
                        defaultActiveKey="0"
                        flush
                        className="mainAccor p-3 text-start"
                    >
                        {/* First Accordion Item */}
                        <Accordion.Item eventKey="0" className="accor">
                            <Accordion.Header className="accorhead">
                                <h6 className="dark fw-bold">
                                    What is Ultras Return and Exchange policy?
                                </h6>
                            </Accordion.Header>
                            <Accordion.Body className="ps-4 accor">
                                <p> Ultras provides a hassle-free return and exchange policy.</p>

                                <p>The availability of return and exchange will be mentioned on each product’s description page. Generally, it ranges from 2 to 14 days, except for certain high-priced products that are non-returnable.</p>

                                <p>The availability of exchange service depends on courier partner services and pin code
                                </p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className="accor">
                            <Accordion.Header className="accorhead">
                                <h6 className="dark fw-bold">What is Style Exchange?</h6>
                            </Accordion.Header>
                            <Accordion.Body className="ps-4 accor">
                                <p> Ultras provides a style exchange facility where you can exchange a product from your order with a different size, color or a completely new and different product from Ultras.</p>

                                <p>If the new product’s amount is higher than the product you wish to exchange, you can pay that extra amount via cash on delivery or using any of the digital payment modes.</p>

                                <p>If the new product’s amount is lower than the product you wish to exchange, you will get a refund for the excess amount either to your bank account or your original payment mode.
                                </p>

                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className="accor">
                            <Accordion.Header className="accorhead">
                                <h6 className="dark fw-bold">
                                    What is Self-Ship & how do I do it?
                                </h6>
                            </Accordion.Header>
                            <Accordion.Body className="ps-4 accor">
                                <p>
                                    For a few pin codes and due to certain courier partners limitations, Myntra is unable to provide the product pick up option during returns.
                                </p>
                                <p>If your pin code comes under this limitation, you can return the product by self-shipping the item to our return desk.</p>
                                <p>You can self-ship the item by sending the product to any one of the following Ultras return desks:</p>
                                <h6 className="dark fw-bold">South</h6>
                                <p>Survey Numbers 231, 232 and 233,Soukya Road, Samethanahalli Village,Anugondanahalli Hobli,Hoskote Taluk,Bangalore-560067</p>
                                <h6 className="dark fw-bold">North</h6>
                                <p>Khasra no - 1031/1 1032/1,Near grand Shobha hotel,Mahipalpur Village,New Delhi -110037</p>
                                <h6 className="dark fw-bold">West</h6>
                                <p>Survey Nos 42/2,42/3,51/2,51/3,51/4,51/5B(old sno.51/51A+B), 51/5A+6B,51/5B+6A,51/6,57/17,57/18, K Square Logistics Park,Prakhhyat Infraprojects Pvt Ltd,Building No 9, Near Padgha Toll Naka,Mumbai Nashik Highway, Tal -Bhiwandi, District Thane, Maharashtra -421302</p>
                                <h6 className="dark fw-bold">East</h6>
                                <h6>Instakart Services Pvt Ltd, 430, Pashupati Bhattacharjee Road PS Behala, PO-Paschim Putiary Kolkata-700041</h6>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className="accor">
                            <Accordion.Header className="accorhead">
                                <h6 className="dark fw-bold">What are my Pick-Up timelines?</h6>
                            </Accordion.Header>
                            <Accordion.Body className="ps-4 accor">
                                <p>We always try to get the pick-up done at the earliest. However, based on the pin codes and courier partner assignment, the pick-up timeline may vary from 3-7 days.</p>
                                <p></p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="accor">
                            <Accordion.Header className="accorhead">
                                <h6 className="dark fw-bold">What are my Refund timelines?</h6>
                            </Accordion.Header>
                            <Accordion.Body className="ps-4 accor">
                                <p>
                                    Ultras. initiates refunds once the product gets picked up and the
                                    quality check is done. For self-shipped items, the return is
                                    initiated after it arrives at our return desk and passes the
                                    quality check.
                                </p>
                                <p>
                                    Refund time depends on the mode of refund
                                    selected by you.
                                </p>
                                <h6 className="dark fw-bold">For Bank Account: </h6>
                                <p> 1-3 business days after the
                                    item reaches us. </p>
                                <h6 className="dark fw-bold">For Online Refund:</h6>
                                <p>7-10 business days after the
                                    item reaches us.</p>
                                <h6 className="dark fw-bold">
                                    For Wallets:</h6>
                                <p>1 business day after the item
                                    reaches us.</p>
                                <p> You can track the refund timeline for your active
                                    orders here.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className="accor">
                            <Accordion.Header className="accorhead">
                                <h6 className="dark fw-bold">
                                    Why is my Return put on hold/declined?
                                </h6>
                            </Accordion.Header>
                            <Accordion.Body className="ps-4 accor">
                                <p>Usually, a return is put on hold/declined due to the following reasons:</p>
                                <p>SDA are supposed to perform a set of checks that reflect on their device as per the reason for return. In case of any check failure, SDA will refuse to pick up the product. You can ask the SDA the reason for the pickup denial.</p>
                                <p>Also, ensure you raise the return request with the correct reason code and hand over the right product to SDA to avoid such instances.</p>
                            </Accordion.Body>
                        </Accordion.Item>
                        {/* Additional Accordion Items */}
                    </Accordion>
                </div>
            </Container>
        </div>
    );
}

export default RetunExchange;
