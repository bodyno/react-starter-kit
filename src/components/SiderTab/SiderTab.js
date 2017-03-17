import React from 'react'
import { IndexLink, Link } from 'react-router'
import {Tabs, Icon } from 'antd';
import './SiderTab.scss'
const {TabPane} = Tabs;

export const SiderTab = () => (
  <Tabs defaultActiveKey="1" size="small">
    <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
    <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
    <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
  </Tabs>
)

export default SiderTab
