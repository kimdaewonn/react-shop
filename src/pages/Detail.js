import React, { useState, useEffect, useContext } from "react";
import { Nav } from "react-bootstrap";
import styled from "styled-components";
import { Context1 } from "./../App.js";

function Detail(props) {
  let YellowBox = styled.div`
    background: yellow;
    color: black;
    padding: 10px;
  `;
  let { 재고 } = useContext(Context1);
  // 보관함 대체해줌
  let [yellow, setYellow] = useState(true);
  let [num, setNum] = useState("");
  let [탭, 탭변경] = useState(0);
  let [fade2, setFade2] = useState("");

  useEffect(() => {
    setFade2("end");
    return () => {
      setFade2("");
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setYellow(false);
    }, 2000);
  }, []);
  useEffect(() => {
    if (isNaN(num) === true) {
      alert("숫자만치세요");
    }
  }, [num]);

  return (
    <>
      <div className={"container start " + fade2}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://codingapple1.github.io/shop/shoes1.jpg"
                width="100%"
              />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.shoes[0].title}</h4>
              <p>{props.shoes[0].content}</p>
              <p>{props.shoes[0].price}원</p>
              <button className="btn btn-danger">주문하기</button>
              {yellow === true ? (
                <YellowBox className="">노랑박스임</YellowBox>
              ) : null}
            </div>
            <input
              onChange={(e) => {
                setNum(e.target.value);
                console.log(num);
              }}
            ></input>
          </div>
          <TabContent shoes={props.shoes} 탭={탭} />
          <Nav variant="tabs" defaultActiveKey="link0-">
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(0);
                }}
                eventKey="link0"
              >
                버튼0
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(1);
                }}
                eventKey="link1"
              >
                버튼1
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                onClick={() => {
                  탭변경(2);
                }}
                eventKey="link2"
              >
                버튼2
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      </div>
    </>
  );
}
function TabContent({ 탭, shoes }) {
  let { 재고 } = useContext(Context1);
  // 보관함 대체해줌
  let [fade, setFade] = useState("");
  useEffect(() => {
    let a = setTimeout(() => {
      setFade("end");
    }, 10);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [탭]);
  return (
    <div className={"start " + fade}>
      {[<div>{shoes[0].title}</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}

export default Detail;
