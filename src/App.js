import React from "react";
import "./App.css";
import { Card } from "antd";

const { Meta } = Card;

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="coming-soon" style={{ color: "#fff" }}>
          COMING SOON
        </h1>
        <h3 className="wip" style={{ color: "#fff" }}>
          Sember.com is under construction
        </h3>

        <div className="team">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="Tôny Quách" description="Developer" />
          </Card>
        </div>
        <div className="team">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
          >
            <Meta title="N/A" description="N/A" />
          </Card>
        </div>
        <p className="copyright" style={{ color: "#fff" }}>
          © 2020 Coming soon Sember.com{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
