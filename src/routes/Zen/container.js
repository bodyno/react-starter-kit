import { connect } from 'react-redux'
import { fetchZen,clearZen } from './modules'

import Zen from './components/Zen.js'

const mapActionCreators = {
  fetchZen,
  clearZen
}

const mapStateToProps = (state) => ({
  zen: state.zen
})

export default connect(mapStateToProps, mapActionCreators)(Zen)
