import React from "react";

import rittaConfig from "../../../ritta.config";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
} from "reactstrap";

// Next

import Router from 'next/router';

// layout for this page
import Auth from "layouts/Auth.js";

function formatDate(date) {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} klo. ${date.getMinutes()}:${date.getHours()}`
}

function Login({ announcement }) {
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-center">
              <Button 
                className="my-4"
                color="primary"
                type="button"
                onClick={() => Router.push('/auth/login')}
              >
                Palaa kirjautumiseen
              </Button>
            </div>
            <div className="text-muted text-center mt-2 mb-3">
              <h1>{announcement.name}</h1>
              <small>Kirjoittanut {announcement.sender}</small> <br />
              <small>Julkaistu {formatDate(new Date(announcement.created))}</small>
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            <p>
              {announcement.content}
            </p>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}

Login.layout = Auth;

Login.getInitialProps = async (ctx) => {
  const { id } = ctx.query  
  const res = await fetch(`${rittaConfig.baseUrl}/v1/messages/announcement`, {
    method: "POST",
    body: JSON.stringify({
      "announcement_id": id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.status !== 200) {
    ctx.res.writeHead(302, { Location: '/auth/login' });
    return ctx.res.end();
  }
  const announcement = await res.json();
  return { announcement }
}

export default Login;
