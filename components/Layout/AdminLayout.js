import PropTypes from 'prop-types';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '../../assets/logo_color.png';
import User from '../../assets/user.jpg';

/**
 * Main admin layout - A Higher Order Component
 */
class AdminLayoutHoc extends React.Component {
    render() {
        return (
        <>
          <header className="mb-3 border-bottom bg-light">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand p-0"><Image src={Logo} alt="Ritta Logo" height="64" width="160"/></a>
                <div className="dropdown text-end d-flex">
                  <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src={User} alt="mdo" className="rounded-circle" width="32" height="32" />
                  </a>
                  <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li><a className="dropdown-item" href="#">Profile</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Sign out</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          <div className="container"> 
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              {this.props.children}
            </main>
          </div>
        </>
      );
    }
}

AdminLayoutHoc.propTypes = {
    contentTitle: PropTypes.string,
    contentTitleButton: PropTypes.element,
};

export default AdminLayoutHoc