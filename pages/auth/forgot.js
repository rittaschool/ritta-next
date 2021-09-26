import LoginLayout from '../../components/Layout/LoginLayout';
import React from 'react';

// Icons
import { ImLock } from 'react-icons/im';

export default class Index extends React.Component {
    render() {
      return (
        <LoginLayout contentTitle={'Home'} url={this.props.url}>
          <h3 className="login-heading mb-4"><ImLock /> Vaihda salasana</h3>
          {/* Sign In Form */}
          <form>
            <p>Mikäli tiliisi ei ole liitetty sähköpostiosoitetta, ota yhteys oppilaitokseen.</p>
            <div className="form-floating mb-3">
              <input type="text" className="form-control bg-light" id="floatingInput" placeholder="etunimi.sukunimi" />
              <label htmlFor="floatingInput">Sähköpostiosoite</label>
            </div>
            <div className="d-grid">
              <button className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2" type="submit">Lähetä</button>
                <div className="text-center">
                  <a className="small" href="/auth">Takaisin</a>
                </div>
            </div>
          </form>
        </LoginLayout>
      );
    }
}