import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

function Register() {
  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h1>Unohtuiko salasana?</h1>
            </div>
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Sähköpostiosoite"
                    type="email"
                    autoComplete="new-email"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button">
                  Lähetä
                </Button>
              </div>
            </Form>
            <Row className="mt-3">
              <Col xs="6">
                <a
                  className="text-dark"
                  href="/auth/login"
                >
                  <small>Kirjaudu sisään</small>
                </a>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Register.layout = Auth;

export default Register;
