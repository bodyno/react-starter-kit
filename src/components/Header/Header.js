import React,{Component} from 'react'
import { IndexLink, Link } from 'react-router'
import {Layout,Menu, Icon } from 'antd';
import './Header.scss'
const { Header } = Layout;
class HeaderComp extends  Component{
  render(){
    return(
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >

          <Menu.Item key="1"><IndexLink to='/'>Home</IndexLink></Menu.Item>


          <Menu.Item key="2"><Link to='/counter'>counter</Link></Menu.Item>

          <Menu.Item key="3"><Link to='/zen'>zen</Link></Menu.Item>


          <Menu.Item key="4"><Link to='/elapse'>elapse</Link></Menu.Item>


          <Menu.Item key="5"><Link to='/route/88'>route</Link></Menu.Item>


          <Menu.Item key="6"><Link to='/notFound'>404</Link></Menu.Item>

        </Menu>
      </Header>
    )
  }
}


export default HeaderComp
