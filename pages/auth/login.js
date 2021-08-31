import React from "react";

import rittaConfig from "../../ritta.config";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Alert,
} from "reactstrap";

// Next

import Image from 'next/image';
// layout for this page
import Auth from "layouts/Auth.js";

export async function getStaticProps() {
  const Announcements = await fetch(`${rittaConfig.baseUrl}/v1/messages/announcement/list`, {
    method: "POST",
    body: JSON.stringify({}),
    headers: {
      "Content-Type": "application/json",
    },
  })
  console.log(Announcements.status)
  const announcements = await Announcements.json();

  const Info = await fetch(`${rittaConfig.baseUrl}/v1/info`);
  const info = await Info.json();

  // Pass data to the page via props
  return { props: { info, announcements }, revalidate: 120 }
}

function Login({ info, announcements }) {

  const school = info.school;

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
        <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              {/* School's logo, reserved
              <Image
                src={require("assets/img/testausakatemia.png")}
                width={128}
                height={128}
                alt="Koulun logo"
              /> */}
              <h2>{school.name}</h2>
              <small>Ajankohtaista</small>
            </div>
            <div className="btn-wrapper text-center">
              {announcements.map((announcement, index) => (
                <div key={index} >
                  <a
                    href={`/auth/announcement/${announcement.id}`}
                  >
                    <Alert
                      color="primary"
                    >
                      <span>
                        <b>
                          {announcement.name}
                        </b>
                      </span><br />
                      <small>Kirjoittanut <span>{announcement.sender}</span></small>
                    </Alert>
                  </a>
                </div>
              ))}
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Kirjaudu sisään</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Käyttäjätunnus"
                    type="text"
                    autoComplete="new-username"
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Salasana"
                    type="password"
                    autoComplete="new-password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Kirjaudu sisään
                </Button>
              </div>
            </Form>
          </CardBody>
          { school.opinsysEnabled && <CardFooter className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <small>Tai tunnistaudu käyttäen</small>
            </div>
            <div className="btn-wrapper text-center">
              { school.opinsysEnabled && <Button
                className="btn-neutral btn-icon"
                color="default"
                href="/auth/opinsys"
                onClick={(e) => e.preventDefault()}
              >
                <span className="btn-inner--icon">
                  <img
                    alt="..."
                    src={require("assets/img/icons/common/opinsys.png")}
                  />
                </span>
                <span className="btn-inner--text">opinsys</span>
              </Button> }
            </div>
          </CardFooter> }
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a
              className="text-light"
              href="/auth/password"
            >
              <small>Unohditko salasanasi?</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
}

Login.layout = Auth;

export default Login;
