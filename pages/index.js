import { useState } from "react";
import { Avatar, Button, Col, Row } from "antd";

const members = process.env.MEMBERS.split(",");

const Random = () => {
  const [value, setValue] = useState(members[0]);
  const [showValue, setShowValue] = useState(false);

  const handleClick = () => {
    const randomValue = members[Math.floor(Math.random() * members.length)];
    setValue(randomValue);
    setShowValue(true);
  };

  return (
    <Col style={{ height: "98vh" }}>
      <Row justify="center" align="middle" style={{ height: "33.33%" }}>
        <Col span={24}>
          <Row justify="center">
            <Col>
              <Button type="primary" size="large" onClick={handleClick}>
                Random
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center" style={{ height: "33.33%" }}>
        <Col span={24}>
          {showValue && (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Avatar
                size={100}
                style={{ backgroundColor: "green", fontWeight: "bold" }}
              >
                {value}
              </Avatar>
            </div>
          )}
        </Col>
      </Row>
      <Row justify="center" style={{ height: "33.33%" }}>
        <Col span={24}>
          <Row justify="center" gutter={[16, 16]}>
            {members.map((member, index) => (
              <Col key={index}>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    width: "100px",
                    height: "10px",
                    margin: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    fontSize: "20px",
                    textAlign: "center",
                    boxShadow: "2px 2px 10px #ccc",
                  }}
                >
                  {member}
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default Random;
