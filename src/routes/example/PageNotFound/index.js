export default {
  getComponent(nextState, cb){
    require.ensure([],(require)=>{
      const PageNotFound = require('./components/PageNotFound').default
      cb(null,PageNotFound)
    },'PageNotFound')
  }
}
