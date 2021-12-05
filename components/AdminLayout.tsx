import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../assets/logo_color.png';
import { Dropdown } from 'react-bootstrap';

import { IoLogOutOutline, IoSettingsOutline } from 'react-icons/io5';

// DO NOT USE TYPE any
function AdminLayout(props: any) {
  return (
    <>
      <header className="mb-3 border-bottom bg-light">
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand p-0">
              <Image src={Logo} alt="Ritta Logo" height="64" width="160" />
            </a>
            <div className="dropdown text-end d-flex">
              <Dropdown>
                <Dropdown.Toggle
                  variant="link"
                  id="dropdown-basic"
                  className="text-decoration-none text-black"
                >
                  Etunimi Sukunimi
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/settings">
                    <IoSettingsOutline /> Asetukset
                  </Dropdown.Item>
                  <Dropdown.Item href="/auth/logout">
                    <IoLogOutOutline /> Kirjaudu ulos
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </nav>
      </header>
      <div className="container">
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          {props.children}
        </main>
      </div>
    </>
  );
}

AdminLayout.propTypes = {
  contentTitle: PropTypes.string,
  contentTitleButton: PropTypes.element,
};

export default AdminLayout;
