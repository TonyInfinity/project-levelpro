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
          Soga.io is under construction
        </h3>

        <div className="team">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/116869522_1237468073255337_6769249137399727135_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=9jWZ8oc19LAAX8oiAk4&_nc_ht=scontent.fsgn5-4.fna&oh=c10898514e13e30865d67b53a2a0be0c&oe=5FB3E0E1"
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
                src="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-0/s526x395/121108493_118825286653903_4234418330511596790_o.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_ohc=-ef8VpdSdS8AX_ZWb22&_nc_ht=scontent.fdad3-3.fna&tp=7&oh=014599099b8cebb33dda74a9071d535d&oe=5FB4F3A9"
              />
            }
          >
            <Meta title="Tài Lý" description="Designer" />
          </Card>
        </div>
    <div className="team">
          <Card
            style={{ width: 300 }}
            cover={
              <img
                alt="example"
                src="https://thedesignmanagementjournal.files.wordpress.com/2017/05/drowning-girl-391x395.jpg"
              />
            }
          >
            <Meta title="N/A" description="Marketing & Sales" />
          </Card>
        </div>
        <p className="copyright" style={{ color: "#fff" }}>
          © 2020 Coming soon Soga.io{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
