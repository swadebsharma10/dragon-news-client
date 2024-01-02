import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";


const Main = () => {
    return (
        <section>
        <Header></Header>
        <Container>
        <Row>
          <Col lg="2">
          <LeftNav></LeftNav>
          </Col>
          <Col lg="7">
          <Outlet></Outlet>
          </Col>
          <Col lg="3">
          <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
        </section>
    );
};

export default Main;