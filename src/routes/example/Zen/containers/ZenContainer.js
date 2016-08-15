import { connect } from 'react-redux'
import { fetchZen, clearZen } from './../modules/zen'

import Zen from '../components/Zen'

const mapActionCreators = {
  fetchZen,
  clearZen
}

const mapStateToProps = (state) => ({
  zen: state.zen
})

export default connect(mapStateToProps, mapActionCreators)(Zen)
