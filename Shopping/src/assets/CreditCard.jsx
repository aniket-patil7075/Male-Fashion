import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreditCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Payment Submitted Successfully!");
  };

  return (
    <div className="p-3 bg-light border border-secondary border-opacity-25">
      <h5 className="text-center">Card Details</h5>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {/* Card Number Field */}
          <Form.Group className="mb-3" controlId="formGridCardNumber">
            <Form.Label>Card Number</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="py-2 border border-secondary border-opacity-25 rounded rounded-0"
              {...register("cardNumber", {
                required: "Card number is required",
                pattern: {
                  value: /^[0-9]{12}$/,
                  message: "Card number must be 16 digits",
                },
              })}
            />
            {errors.cardNumber && (
              <p className="text-danger">{errors.cardNumber.message}</p>
            )}
          </Form.Group>

          {/* Name on Card Field */}
          <Form.Group className="mb-3" controlId="formGridNameOnCard">
            <Form.Label>Name on Card</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="py-2 border border-secondary border-opacity-25 rounded rounded-0"
              {...register("nameOnCard", {
                required: "Name on card is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
            />
            {errors.nameOnCard && (
              <p className="text-danger">{errors.nameOnCard.message}</p>
            )}
          </Form.Group>

          {/* Expiry Date Field */}
          <Form.Group as={Col} controlId="formGridExpiryDate">
            <Form.Label>Expiry Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="MM/YY"
              className="py-2 border border-secondary border-opacity-25 rounded rounded-0"
              {...register("expiryDate", {
                required: "Expiry date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/\d{2}$/,
                  message: "Enter a valid expiry date (MM/YY)",
                },
              })}
            />
            {errors.expiryDate && (
              <p className="text-danger">{errors.expiryDate.message}</p>
            )}
          </Form.Group>

          {/* Security Code Field */}
          <Form.Group as={Col} controlId="formGridSecurityCode">
            <Form.Label>Security Code</Form.Label>
            <Form.Control
              type="text"
              placeholder=""
              className="py-2 border border-secondary border-opacity-25 rounded rounded-0"
              {...register("securityCode", {
                required: "Security code is required",
                pattern: {
                  value: /^[0-9]{3,4}$/,
                  message: "Security code must be 3 or 4 digits",
                },
              })}
            />
            {errors.securityCode && (
              <p className="text-danger">{errors.securityCode.message}</p>
            )}
          </Form.Group>
        </Row>

        {/* Submit Button */}
        <div>
          <Button
            type="submit"
            variant="outline-primary"
            id="discovernow"
            className="heroButton py-2 px-4 mt-4"
          >
            Pay Now
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default CreditCard;
