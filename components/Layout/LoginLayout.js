import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';

import Logo from '../../assets/logo_color.png';
import Link from 'next/link';

// Icons
import { MdSchool } from 'react-icons/md';
import { IoLogInOutline } from 'react-icons/io5';

// Bootstrap
import { Accordion } from "react-bootstrap";

/**
 * Main Login layout - A Higher Order Component
 */
class LoginLayoutHoc extends React.Component {
  render() {
    return (
      <>
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="col-md-8 col-lg-6">
              <div className="d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <Image src={Logo} alt="Ritta Logo" height={96} width={240}/>
                      <h3 className="mb-4"><MdSchool /> Tervetuloa käyttämään Rittaa!</h3>
                      <Link href="/auth#login">
                        <a className="btn btn-primary hide-on-desktop my-3"><IoLogInOutline /> Kirjaudu sisään</a>
                      </Link>
                      <p>Ritta on helppokäyttöinen ja monipuolinen oppilashallintojärjestelmä.</p>
                      <p>Tämä Ritta-yksikön omistaa <b>TestausAkatemia (Testausserveri Ry)</b></p>
                      <h4>Julkiset tiedoitteet</h4>
                      <hr />
                      <Accordion className="mb-3">
                        <Accordion.Item eventKey="0">
                          <Accordion.Header><b>1.8.2021</b><span className="mx-1"></span>Tervetuloa takaisin kouluun!</Accordion.Header>
                          <Accordion.Body> 
                            Julkaissut <b>Reino Rehtori</b><br/><br />
                            Hei kaikki oppilaat! <br />
                            Kesäloman jälkeen voimme aloittaa 11.8.2021 iloisesti lukuvuoden 2021-2022! <br />
                            Tervetuloa takaisin kouluun! <br />
                            - Rehtori ja opettajat
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                          <Accordion.Header><b>4.6.2021</b><span className="mx-1"></span>Hyvää kesälomaa!</Accordion.Header>
                          <Accordion.Body> 
                            Julkaissut <b>Reino Rehtori</b><br/><br />
                            Hei kesälomaa kaikille! <br />
                            Kesäloman jälkeen voimme aloittaa 11.8.2021 iloisesti lukuvuoden 2021-2022! <br />
                            Muistakaa uida ja käydä ulkona! <br />
                            - Rehtori ja opettajat
                          </Accordion.Body>
                        </Accordion.Item>
                      </Accordion>
                      <h4>Yhteyshenkilö</h4>
                      <hr />
                      <p>Tästä yksiköstä vastaa:<br /><br /><b>Raikas Teknikko</b><br />040123456789<br />raikas@testausserveri.fi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-lg-6 desktop-bg-light" id="login">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      {this.props.children}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
}

LoginLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};
export default LoginLayoutHoc