import { connect } from 'react-redux'
// import { plus } from './../modules/route'

import Route from './../components/Route'

const mapActionCreators = {

}

const mapStateToProps = (state) => ({
  route: state.route
})

export default connect(mapStateToProps, mapActionCreators)(Route)
