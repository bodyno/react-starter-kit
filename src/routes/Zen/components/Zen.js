import React, {Component} from 'react'
import './Zen.scss'
import Spinner from 'react-spinkit'
import { Button,Table, Icon } from 'antd'

export default class Zen extends Component {

  render () {
    const changePage = (page) => {
      fetchZen(page);
    };

    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Mac',
      dataIndex: 'mac',
      key: 'mac'
    }, {
      title: 'Status',
      dataIndex: 'status',
      key: 'status'
    }, {
      title: 'Hw_ver',
      dataIndex: 'hw_ver',
      key: 'hw_ver'
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
      <a href="#">Action 一 {record.name}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
      ),
    }];

    const { fetchZen, clearZen, zen: {fetching, page} } = this.props

    return (
      <div>
        <div className='loading'>
          { fetching ?
            <Spinner spinnerName='double-bounce' /> : ''
          }
        </div>
        <div>
          <Button type="primary" onClick={fetchZen}>
            {fetching ? 'Fetching...' : 'Fetch'}
          </Button>
          &nbsp;&nbsp;
          <Button type="danger" onClick={clearZen}>Clear</Button>
        </div>
        <div>
          <Table rowKey="id" columns={columns} dataSource={page.lists} scroll={{ x: true, y: 300 }} pagination={{ pageSize: page.pagesize, current: page.page, total:page.total, onChange: changePage }}/>
        </div>
      </div>
    )
  }
}

Zen.propTypes = {
  zen: React.PropTypes.object.isRequired
}
