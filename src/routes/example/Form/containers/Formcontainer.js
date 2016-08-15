import { connect } from 'react-redux'
import { submit } from './../modules/form'

import Form from '../components/Form'

const mapActionCreators = {
  submit
}

const mapStateToProps = (state) => ({
  formPage: state.form
})

export default connect(mapStateToProps, mapActionCreators)(Form)
