import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
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

                <div className="main-bg"></div>
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
                <Route path="/detail" element={<Detail />}></Route>
                <Route path="*" element={<div>없는페이지에요~</div>}></Route>
                <Route
                    path="/about"
                    element={<div>어바웃페이지임</div>}
                ></Route>
                <Route path="/event" element={<Event />}>
                    <Route
                        path="one"
                        element={<div>첫 주문시 양배추즙 서비스</div>}
                    />
                    <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
                </Route>
            </Routes>
            <Link to="/">홈</Link>
            <Link to="/detail">상세페이지</Link>
        </>
    );
}

function Event() {
    return (
        <div>
            <h4>오늘의 이벤트</h4>
            <Outlet></Outlet>
        </div>
    );
}

function Card(props) {
    return (
        <div className="col-md-4">
            <img
                src={`https://codingapple1.github.io/shop/shoes${
                    props.i + 1
                }.jpg`}
                width={"80%"}
            />
            <h4>{props.shoes.title}</h4>
            <p>{props.shoes.price}</p>
        </div>
    );
}
export default App;
