import React, {Component} from 'react';
import {Table} from 'antd';
import reqwest from 'reqwest';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    sorter: true,
    render: name => `${name.first} ${name.last}`,
    width: '20%'
  }, {
    title: '性别',
    dataIndex: 'gender',
    filters: [
      {
        text: 'Male',
        value: 'male'
      }, {
        text: 'Female',
        value: 'female'
      }
    ],
    width: '20%'
  }, {
    title: '邮箱',
    dataIndex: 'email'
  }
];

export default class AntTable extends Component {
  // const Test = React.createClass({
  constructor(props){
      super(props);
      // this.state = {
      //   data: [],
      //   pagination: {},
      //   loading: false
      // };
  }

  handleTableChange = (pagination, filters, sorter) => {
    // const pager = this.state.pagination;
    // pager.current = pagination.current;
    // this.setState({pagination: pager});
    // this.fetch({
    //   results: pagination.pageSize,
    //   page: pagination.current,
    //   sortField: sorter.field,
    //   sortOrder: sorter.order,
    //   ...filters
    // });
  }

  // fetch = (params = {}) => {
  //   console.log('请求参数：', params);
  //   this.setState({loading: true});
  //   reqwest({
  //     url: 'http://api.randomuser.me',
  //     method: 'get',
  //     data: {
  //       results: 10,
  //       ...params
  //     },
  //     type: 'json'
  //   }).then(data => {
  //     const pagination = this.state.pagination;
  //     // Read total count from server
  //     // pagination.total = data.totalCount;
  //     pagination.total = 200;
  //     this.setState({loading: false, data: data.results, pagination});
  //   });
  // }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const props = this.props;
    return (<Table columns={columns} rowKey={record => record.registered} dataSource={props.table.data} pagination={props.table.pagination} loading={props.table.loading} onChange={props.onChange}/>);
  }
  // });
}
