import AdminLayout from '../components/Layout/AdminLayout';
import React from 'react';

export default class Index extends React.Component {
    render() {
        return <AdminLayout contentTitle={'Home'} contentTitleButton={<i className="fa fa-2x fa-home"/>} url={this.props.url}>
          <h1>Shesh</h1>
          <hr />
        </AdminLayout>
    }
}