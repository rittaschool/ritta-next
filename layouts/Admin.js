import React from "react";
import Router, { useRouter } from "next/router";
// reactstrap components
import { Container } from "reactstrap";
// core components
import AdminNavbar from "components/Navbars/AdminNavbar.js";
import AdminFooter from "components/Footers/AdminFooter.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";
import auth from "../utils/auth";

function Admin(props) {
  // used for checking current route
  const router = useRouter();
  let mainContentRef = React.createRef();
  const [isAuth, setAuth] = React.useState(false);
  React.useEffect(() => {
    if (!auth.isAuthenticated()) {
      return Router.push("/auth/login");
    }
    document.body.classList.remove("bg-default");
    if (isAuth) {
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      mainContentRef.current.scrollTop = 0;
    }
    if (!isAuth) setAuth(true);
  }, [isAuth]);

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (router.route.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Ritta";
  };
  
  return !isAuth ? <></> : (
    <>
      <Sidebar
        {...props}
        routes={routes}
        logo={{
          innerLink: "/admin/index",
          imgSrc: require("assets/img/brand/nextjs_argon_black.png"),
          imgAlt: "...",
        }}
      />
      <div className="main-content" ref={mainContentRef}>
        <AdminNavbar {...props} brandText={getBrandText()} />
        {props.children}
        <Container fluid>
          <AdminFooter />
        </Container>
      </div>
    </>
  );
}

export default Admin;
