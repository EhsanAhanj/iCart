import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row,
} from "reactstrap";

class Register extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col className="p-0">
              <Card>
                <CardBody className="p-4">
                  <Form>
                    <h1>ثبت نام</h1>
                    <p className="text-muted">اکانت خود را بسازید</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="نام کاربری"
                        autoComplete="username"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>@</InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="text"
                        placeholder="ایمیل"
                        autoComplete="email"
                      />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="رمز"
                        autoComplete="new-password"
                      />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        type="password"
                        placeholder="رمز مجدد"
                        autoComplete="new-password"
                      />
                    </InputGroup>
                    <Button color="success" block>
                      تایید اکانت
                    </Button>
                  </Form>
                </CardBody>
              </Card>
            </Col>
            <Card
              className="card-on-modal bg-primary py-5 d-none d-lg-block"
              style={{ width: "44%" }}
            >
              <CardBody className="text-center">
                <div>
                  <h2>ثبت نام</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
