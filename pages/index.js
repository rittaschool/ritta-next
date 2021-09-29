import AdminLayout from '../components/Layout/AdminLayout';
import React from 'react';

export default class Index extends React.Component {
  componentDidMount() {
    window.location.href = '/auth';
  }  
  
  render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home"/>} url={this.props.url}>
          <h1>Redirecting to login</h1>
          <hr />
        </AdminLayout>
    }
}