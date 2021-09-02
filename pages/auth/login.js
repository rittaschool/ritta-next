import React, { useState } from "react";
import axios from 'axios';
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

// layout for this page
import Auth from "layouts/Auth.js";
import auth from "../../utils/auth";

/* Auth functions */
async function login(username, password) {
  try {
    const res = await axios.post(`${rittaConfig.baseUrl}/v1/auth/login`, {
      username,
      password,
    });
    return { error: false, data: res.data };
  } catch (e) {
    return { error: true, message: e.response.data.message };
  }
}

async function mfaVerify(mfaToken, mfaCode) {
  try {
    const res = await axios.post(
      `${rittaConfig.baseUrl}/v1/auth/mfa/verify`,
      {
        mfa_code: mfaCode,
      },
      {
        headers: {
          Authorization: "Bearer " + mfaToken,
        },
      }
    );
    return { error: false, data: res.data };
  } catch (e) {
    return { error: true, message: e.response.data.message };
  }
}

export async function getStaticProps() {
  const Announcements = await fetch(
    `${rittaConfig.baseUrl}/v1/messages/announcement/list`,
    {
      method: "POST",
      body: JSON.stringify({}),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  console.log(Announcements.status);
  const announcements = await Announcements.json();

  const Info = await fetch(`${rittaConfig.baseUrl}/v1/info`);
  const info = await Info.json();

  // Pass data to the page via props
  return { props: { info, announcements }, revalidate: 120 };
}

function LoginForm({ setStatus, setMfaToken, setPasswordToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      {error && (
        <Alert color="danger">
          <span>
            <b>{error}</b>
          </span>
        </Alert>
      )}
      <div className="text-center text-muted mb-4">
        <small>Kirjaudu sisään</small>
      </div>
      <Form
        role="form"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          const res = await login(username, password);
          if (res.error) {
            let msg = res.message;
            switch (res.message) {
              case "Incorrect username or password":
                msg = "Virheellinen käyttäjänimi tai salasana";
                break;
              default:
                break;
            }
            setError(msg);
          } else {
            if (res.data.mfaToken) {
              setMfaToken(res.data.mfaToken);
              setStatus(1);
            } else if (res.data.passwordChangeToken) {
              setPasswordToken(res.data.passwordChangeToken);
              setStatus(2);
            } else {
              auth.setTokens(res.data.accessToken, res.data.refreshToken)
              window.location.reload();
            }
          }
        }}
      >
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-hat-3" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Käyttäjätunnus"
              type="text"
              autoComplete="new-username"
              onChange={(e) => setUsername(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Kirjaudu sisään
          </Button>
        </div>
      </Form>
    </>
  );
}

function MfaForm({ setStatus, mfaToken, setPasswordToken }) {
  const [mfaCode, setMfaCode] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      {error && (
        <Alert color="danger">
          <span>
            <b>{error}</b>
          </span>
        </Alert>
      )}
      <div className="text-center text-muted mb-4">
        <small>Monivaiheinen tunnistautuminen</small>
      </div>
      <Form
        role="form"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("");
          const res = await mfaVerify(mfaToken, mfaCode);
          if (res.error) {
            let msg = res.message;
            switch (res.message) {
              default:
                break;
            }
            setError(msg);
          } else {
            if (res.data.passwordChangeToken) {
              setPasswordToken(res.data.passwordChangeToken);
              setStatus(2);
            } else {
              auth.setTokens(res.data.accessToken, res.data.refreshToken)
              window.location.reload();
            }
          }
        }}
      >
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-badge" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="MFA-koodi tai varakoodi"
              type="text"
              autoComplete="off"
              onChange={(e) => setMfaCode(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <div className="text-center">
          <Button className="my-4" color="primary" type="submit">
            Kirjaudu sisään
          </Button>
        </div>
      </Form>
    </>
  );
}

function YubiForm({ setStatus, setPasswordToken }) {
  const [otp, setOTP] = useState("");
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  return (
    <>
      {error && (
        <Alert color="danger">
          <span>
            <b>{error}</b>
          </span>
        </Alert>
      )}
      <div className="text-center text-muted mb-4">
        <small>Tunnistaudu käyttäen YubiKey:tä</small>
      </div>
      <Form
        role="form"
        onSubmit={async (e) => {
          e.preventDefault();
          setError("YubiKeytä ei ole enabloitu tässä yksikössä juuri nyt");
          return;
          const res = await login(username, password);
          if (res.error) {
            let msg = res.message;
            switch (res.message) {
              case "Incorrect OTP":
                msg = "Virheellinen Yubikey-koodi";
                break;
              case "Incorrect PIN":
                msg = "Virheellinen pin-koodi";
                break;
              default:
                break;
            }
            setError(msg);
          } else {
            if (res.data.passwordChangeToken) {
              setPasswordToken(res.data.passwordChangeToken);
              setStatus(2);
            } else {
              auth.setTokens(res.data.accessToken, res.data.refreshToken)
              window.location.reload();
            }
          }
        }}
      >
        <FormGroup>
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-lock-circle-open" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="PIN-koodi"
              type="password"
              autoComplete="new-pin"
              onChange={(e) => setPin(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <FormGroup className="mb-3">
          <InputGroup className="input-group-alternative">
            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="ni ni-key-25" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder="Yubikey-koodi"
              type="password"
              autoComplete="off"
              onChange={(e) => setOTP(e.target.value)}
            />
          </InputGroup>
        </FormGroup>
        <div className="text-center">
          <Button className="my-4" color="primary" type="button" onClick={(e) => { e.preventDefault(); setStatus(0); }}>
            Takaisin
          </Button>
          <Button className="my-4" color="primary" type="submit">
            Kirjaudu sisään
          </Button>
        </div>
      </Form>
    </>
  );
}
function Login({ info, announcements }) {
  /*
  0 = login
  1 = mfa
  2 = password change
  3 = yubikey
  */
  const [status, setStatus] = useState(0);
  const [mfaToken, setMfaToken] = useState("");
  const [passwordToken, setPasswordToken] = useState("");
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
                <div key={index}>
                  <a href={`/auth/announcement/${announcement.id}`}>
                    <Alert color="primary">
                      <span>
                        <b>{announcement.name}</b>
                      </span>
                      <br />
                      <small>
                        Kirjoittanut <span>{announcement.sender}</span>
                      </small>
                    </Alert>
                  </a>
                </div>
              ))}
            </div>
          </CardHeader>
          <CardBody className="px-lg-5 py-lg-5">
            {status === 0 ? (
              <LoginForm
                setStatus={setStatus}
                setMfaToken={setMfaToken}
                setPasswordToken={setPasswordToken}
              />
            ) : status === 1 ? (
              <MfaForm
                setStatus={setStatus}
                mfaToken={mfaToken}
                setPasswordToken={setPasswordToken}
              />
            ) : status === 2 ? (
              <LoginForm
                setStatus={setStatus}
                setMfaToken={setMfaToken}
                setPasswordToken={setPasswordToken}
              />
            ) : <YubiForm
                setStatus={setStatus}
                setPasswordToken={setPasswordToken}
                />
            }
          </CardBody>
          {school.opinsysEnabled && (
            <CardFooter className="bg-transparent pb-5">
              <div className="text-muted text-center mt-2 mb-3">
                <small>Tai tunnistaudu käyttäen</small>
              </div>
              <div className="btn-wrapper text-center">
                {school.opinsysEnabled && (
                  <Button
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
                  </Button>
                )}
                <Button
                    className="btn-neutral btn-icon"
                    color="default"
                    href="/auth/yubikey"
                    onClick={(e) => { e.preventDefault(); setStatus(3); }}
                  >
                    <img
                        alt="yubico / yubikey"
                        src={require("assets/img/brand/yubico.png")}
                        height={20}
                      />
                  </Button>
              </div>
            </CardFooter>
          )}
        </Card>
        <Row className="mt-3">
          <Col xs="6">
            <a className="text-light" href="/auth/password">
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
