import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import data from "./data.js";
import Detail from "./pages/Detail";

function App() {
  let [shoes] = useState(data);
  let navigage = useNavigate();

  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand id="ddd" href="#home">
              Shop
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigage("/detail");
                }}
                href="#features"
              >
                Cart
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="container">
          <div className="row">
            {shoes.map((a, i) => {
              return <Card shoes={shoes[i]} i={i} />;
            })}
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<div>메인페이지</div>}></Route>
        <Route path="/detail" element={<Detail shoes={shoes} />}></Route>
      </Routes>
      <Link style={{ paddingRight: "10px", paddingLeft: "650px" }} to="/">
        홈
      </Link>
      <Link to="/detail">상세페이지</Link>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width={"80%"}
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  );
}
export default App;
