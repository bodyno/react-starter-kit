import React, {Component} from 'react'
import classes from './Form.scss'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = '请填写用户名'
  }

  if (!values.lastName) {
    errors.lastName = '请填写用户名'
  }
  return errors
}

const renderFiled = props => {
  return (
    <div>
      <label>{props.placeholder}</label>
      <span>
        <input {...props} />
        {props.touched && props.error && <span>{props.error}</span>}
      </span>
    </div>
  )
}

class ContactForm extends Component {
  render () {
    const { reset, submitting } = this.props
    const submit = values =>
      new Promise(resolve => {
        setTimeout(() => {  // simulate server latency
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
          resolve()
        }, 500)
      })

    return (
      <form onSubmit={submit} className={classes.form}>
        <Field name='firstName' type='text' component={renderFiled} placeholder='firstName' />
        <Field name='lastName' type='text' component={renderFiled} placeholder='lastName' />
        <button type='submit' disabled={submitting}>Submit</button>
        <button type='submit' onClick={reset}>Clear Values</button>
      </form>
    )
  }
}

ContactForm = reduxForm({
  form: 'contact',
  validate
})(ContactForm)

export default ContactForm
