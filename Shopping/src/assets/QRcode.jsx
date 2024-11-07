import React, { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 15);
};
function QRcode() {
  const [qrValue, setQRValue] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);

  useEffect(() => {
    const generateQRValue = () => {
      const newValue = `QR-${Date.now()}`;
      setQRValue(newValue);
      setTimeLeft(120);
    };

    generateQRValue();

    const qrInterval = setInterval(generateQRValue, 120000);

    const countdownInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => (prevTimeLeft > 0 ? prevTimeLeft - 1 : 0));
    }, 1000);

    return () => {
      clearInterval(qrInterval);
      clearInterval(countdownInterval);
    };
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };
  return (
    <div style={{ textAlign: "center" }}>
      <Row>
        <Col>
          <div className="border border-secondary border-opacity-10">
            <QRCodeCanvas
              value={qrValue}
              size={200}
              className="w-50 h-50 m-3"
            />
          </div>
        </Col>
        <Col>
          <p>Scan the QR using any UPI app on your phone</p>
          <p className="">{`QR Code will update in: ${formatTime(
            timeLeft
          )}`}</p>
        </Col>
      </Row>
    </div>
  );
}

export default QRcode;
