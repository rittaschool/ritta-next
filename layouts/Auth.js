import React from "react";
// reactstrap components
import { Container, Row, Col } from "reactstrap";


// core components
import AuthFooter from "components/Footers/AuthFooter.js";
import Router from "next/router";

import auth from "../utils/auth";

function Auth(props) {
  const [isAuth, setAuth] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("bg-default");
    if (auth.isAuthenticated()) {
      return Router.push("/admin/dashboard");
    }
    setAuth(true);
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-default");
    };
  }, []);
  return !isAuth ? <></> : (
    <>
      <div className="main-content">
        <div className="header bg-gradient-primary py-7 py-lg-8">
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">{props.children}</Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}

export default Auth;
