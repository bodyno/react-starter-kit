import React from 'react';
import { Router, Route, IndexRoute, Link, IndexLink } from 'react-router';
import { Menu, Breadcrumb, Icon, Row, Col } from 'antd';
import styles from './Layout.less';

const SubMenu = Menu.SubMenu;
export const CoreLayout = ({ children }) => (
  <div className={styles["ant-layout-topaside"]}>
      <div className={styles["ant-layout-header"]}>
        <div className={styles["ant-layout-wrapper"]}>
          <div className={styles["ant-layout-logo"]}><h1>App</h1></div>
        </div>
      </div>
      <div className={styles["ant-layout-wrapper"]}>
        <div className={styles["ant-layout-container"]}>
          <aside className={styles["ant-layout-sider"]}>
            <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['example']}>
              <SubMenu key="example" title={<span><Icon type="appstore" />example</span>}>
                <Menu.Item key="home"><IndexLink to='/'>Home</IndexLink></Menu.Item>
                <Menu.Item key="counter"><Link to="/counter">Counter</Link></Menu.Item>
                <Menu.Item key="zen"><Link to="/zen">Zen</Link></Menu.Item>
                <Menu.Item key="elapse"><Link to="/elapse">Elapse</Link></Menu.Item>
                <Menu.Item key="form"><Link to="/form">Form</Link></Menu.Item>
                <Menu.Item key="route88"><Link to="/route/88">Route</Link></Menu.Item>
                <Menu.Item key="test"><Link to="/test">test</Link></Menu.Item>
                <Menu.Item key="notFound"><Link to="/notFound">404</Link></Menu.Item>
              </SubMenu>
              <SubMenu key="antdLearn" title={<span><Icon type="laptop" />antd</span>}>
                <Menu.Item key="table"><Link to="/antd/table">Table</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <div className={styles["ant-layout-content"]}>
            <div style={{ height: 240 }}>
              <div style={{clear: 'both'}}>{children}</div>
            </div>
          </div>
        </div>
        <div className={styles["ant-layout-footer"]}>
          xhyan--react+reactRedux+antd
        </div>
      </div>
    </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
