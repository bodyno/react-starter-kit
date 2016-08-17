import { injectReducer } from '../../../store/reducers';

export default (store) => ({
  path: '/antd/table',
  getComponent (nextState, cb){
    require.ensure([], (require) => {
      const Table  = require('./containers/TableContainer').default;
      const reducer = require('./modules/table').default;
      // const Table = require('./components/Table').default;
      injectReducer(store, {key: 'table', reducer});
      cb(null, Table);
    }, 'table')
  }
});
