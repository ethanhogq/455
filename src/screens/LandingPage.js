import { Component } from "react";
import CardHolder from "../components/CardHolder";
import MyCalendar from "../components/MyCalendar";
import Header from "../components/Header";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import InputForm from "../components/InputForm";

export class LandingPage extends Component {
  render() {
    return (
      <div className="LandingPage">
        <Header />
        <Container>
          <Row>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <MyCalendar />
                </ListGroup.Item>
                <ListGroup.Item>
                  <InputForm />
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={9}>
              <CardHolder databaseFlag="" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default LandingPage;