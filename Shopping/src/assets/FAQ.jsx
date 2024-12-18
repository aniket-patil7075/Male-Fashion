import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import Accordion from "react-bootstrap/Accordion";

function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="blogMainDiv">
      <div className="blogDiv">
        <img src="/breadcrumb-bg.jpg" className="w-100" alt="" />
      </div>
      <div className="" style={{ paddingTop: "50px" }}>
        <Container>
          <div className="mx-lg-4">
            <h2 className="fw-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-5 shadow mb-5 bg-white rounded">
              {/* Single Accordion with unique event keys */}
              <Accordion defaultActiveKey="0" flush className="mainAccor p-3">
                {/* First Accordion Item */}
                <Accordion.Item eventKey="0" className="accor">
                  <Accordion.Header className="accorhead">
                    <h3 className="dark fw-bold">General</h3>
                  </Accordion.Header>
                  <Accordion.Body className="ps-1 accor">
                    {/* Nested Accordion for FAQs */}
                    <Accordion defaultActiveKey="0" className="text-start">
                      <Accordion.Item eventKey="0" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What is Male Fashion?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Male fashion refers to the clothing, accessories, and overall style choices designed for men. It includes various types of attire such as casual, formal, streetwear, and luxury fashion, reflecting personal expression, trends, and cultural influences.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What kind of products does Male Fashion sell?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Male Fashion offers 5000+ products, including everything from casual and formal clothing to shoes, accessories, grooming products, and outerwear.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What cities and locations does Male Fashion operate in?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Male Fashion currently operates in Delhi, Gurgaon, Kolkata, Lucknow, Mumbai, Bengaluru, Goa, Jaipur, Pune, Sangli, Satara, Kolhapur.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Second Accordion Item */}
                <Accordion.Item eventKey="1" className="accor">
                  <Accordion.Header className="accorhead">
                    <h3 className="dark fw-bold">Delivery</h3>
                  </Accordion.Header>
                  <Accordion.Body className="ps-1 accor">
                    {/* Nested Accordion for Shipping FAQs */}
                    <Accordion defaultActiveKey="0" className="text-start">
                      <Accordion.Item eventKey="0" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">Do you charge for delivery?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Every store has its own delivery charges. The delivery charges are mentioned on the app and web at the checkout page.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What are your delivery timings?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          The delivery timings are different for different cities and localities. In some locations, our deliveries begin from 6 AM and the last delivery is completed by 11 PM.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">Can I change the delivery address of my order?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          At this time, we do not offer this option. You can, however, cancel your order and reorder from a different locality
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What if I don’t receive my order by the scheduled time?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Over 70% of our deliveries are honoured within the 15 minute timelines. On rare occasions, due to unforeseen circumstances, your order might be delayed. In case of imminent delay, our customer support executive will keep you updated about the delivery time of your order
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">Can I change the delivery address of my order?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          At this time, we do not offer this option. You can, however, cancel your order and reorder from a different locality
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>


                <Accordion.Item eventKey="2" className="accor">
                  <Accordion.Header className="accorhead">
                    <h3 className="dark fw-bold">Cancellation and return</h3>
                  </Accordion.Header>
                  <Accordion.Body className="ps-1 accor">
                    {/* Nested Accordion for Shipping FAQs */}
                    <Accordion defaultActiveKey="0" className="text-start">
                      <Accordion.Item eventKey="0" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">How can I cancel my order?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Male Fashoin provides easy and hassle-free cancellation. You can cancel your order via the app or web on the order details page while it is still in the packing stage.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What If I want to return something?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          The timeline to raise a complaint depends on the category in which the product falls into: Consumable Perishables – meats, seafood, frozen food and FnV, dairy category including milk, eggs and bread, etc. (72 hours); Consumable Non-perishables – groceries, etc. (72 hours); General Merchandise – Electronics, home furnishings, fashion, etc. (24 hours); Freebie missing issue (72 hours); Entire wrong order and MDND (24 hours); boAt products (24 hours); book products (24 hours); and Other issues – insect, fungus or foreign material, expired products, etc. (no restriction).
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">Can I reschedule my order?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          We deliver your order in 10 minutes during all times the store in your area is operational. Hence we request you to order when you are available. It is not possible to reschedule an order.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What if I have a complaint regarding my order?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Please reach out to us via the “Customer Support” section on the app/web. Our customer care team is more than happy to help
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">Can I change the delivery address of my order?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          At this time, we do not offer this option. You can, however, cancel your order and reorder from a different locality
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="accor">
                  <Accordion.Header className="accorhead">
                    <h3 className="dark fw-bold">Miscellaneous</h3>
                  </Accordion.Header>
                  <Accordion.Body className="ps-1 accor">
                    {/* Nested Accordion for Shipping FAQs */}
                    <Accordion defaultActiveKey="0" className="text-start">
                      <Accordion.Item eventKey="0" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What are some essential wardrobe pieces every man should own?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Every man should have a few key items: a well-fitting white t-shirt, a classic button-down shirt, a pair of dark jeans, versatile chinos, a blazer, and a pair of white sneakers. These basics can be mixed and matched for both casual and semi-formal looks.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">How can I find my personal style?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Start by observing outfits you naturally gravitate toward, whether in magazines, on social media, or on the street. Experiment with different styles in affordable ways and see what feels most comfortable. Keep what makes you feel confident and aligns with your lifestyle.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">How do I determine the best fit for shirts, jeans, and suits?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          For shirts, ensure that the shoulder seams align with your shoulders and that the length doesn’t go past mid-fly. Jeans should fit snugly around the waist without needing a belt and should have a slight break at the ankle. Suits should be fitted but not tight, with jacket sleeves ending at the wrist and pants sitting just above the shoe.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">What’s the best way to layer clothing for different weather conditions?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          Start with a light base layer like a t-shirt or shirt, add a sweater or lightweight jacket for warmth, and top it off with a coat for insulation if needed. Layering allows you to adjust to temperature changes and adds depth to your outfit. Stick to complementary colors to keep it looking cohesive.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4" className="accor">
                        <Accordion.Header>
                          <h6 className="dark fw-bold">How should I match my shoes with my outfit?</h6>
                        </Accordion.Header>
                        <Accordion.Body>
                          For formal outfits, match black shoes with black or gray suits, and brown shoes with navy or brown outfits. For casual looks, white sneakers go well with almost everything. Consider the color and style of your belt, as it should generally coordinate with your shoes.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default FAQ