import LoginLayout from '../../components/Layout/LoginLayout';
import React from 'react';

import Link from 'next/link';

// Icons
import { ImKey2 } from 'react-icons/im';

export default class Index extends React.Component {
    render() {
      return (
        <LoginLayout contentTitle={'Home'} url={this.props.url}>
          <h3 className="login-heading mb-4"><ImKey2 /> Kirjaudu sisään</h3>
          {/* Sign In Form */}
          <form>
            <div className="form-floating mb-3">
              <input type="text" className="form-control bg-light" id="floatingInput" placeholder="etunimi.sukunimi" />
              <label htmlFor="floatingInput">Käyttäjätunnus</label>
            </div>
            <div className="form-floating mb-3">
              <input type="password" className="form-control bg-light" id="floatingPassword" placeholder="Salasana" />
              <label htmlFor="floatingPassword">Salasana</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Kirjaudu sisään</button>
                <div className="text-center">
                  <Link href="/auth/forgot">
                    <a className="small">Unohditko salasanasi?</a>
                  </Link>
                </div>
            </div>
          </form>
        </LoginLayout>
      );
    }
}