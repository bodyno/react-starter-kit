import React from 'react'
import HeaderComp from '../../components/Header'
import SiderTab from '../../components/SiderTab'
import { Layout, Menu, Breadcrumb, Icon } from 'antd'
const { Content,Sider } = Layout;
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <Layout className='container text-center'>
    <HeaderComp />
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <SiderTab />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
