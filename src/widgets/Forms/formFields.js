import React from 'react'
import PropTypes from 'prop-types'
import Aux from '../../hoc/aux'

const FormFields = ({ formData, change }) => {
  const renderFields = () => {
    const formArray = []

    for (let elementName in formData) {
      formArray.push({
        id: elementName,
        settings: formData[elementName],
      })
    }

    return formArray.map((item, i) => {
      return (
        <div key={i} className="form_element">
          {renderTemplates(item)}
        </div>
      )
    })
  }

  const changeHandler = (event, id, blur) => {
    const newState = formData
    newState[id].value = event.target.value

    if (blur) {
      let validData = validate(newState[id])
      newState[id].valid = validData[0]
      newState[id].validationMessage = validData[1]
    }

    newState[id].touched = blur

    change(newState)
  }

  const validate = element => {
    let error = [true, '']
    // here is where we writte the rules for validation
    // the order of the checkings has to be consequent

    // Validation minLength > 5
    if (element.validation.minLen) {
      const valid = element.value.length >= element.validation.minLen
      const message = `${!valid ? 'Must be greater than ' + element.validation.minLen : ''}`

      error = !valid ? [valid, message] : error
    }

    // Validation required
    if (element.validation.required) {
      const valid = element.value.trim() !== ''
      const message = `${!valid ? 'This field is required' : ''}`

      error = !valid ? [valid, message] : error
    }

    return error
  }

  const renderTemplates = data => {
    let formTemplate = ''
    let values = data.settings
    switch (values.element) {
      case 'input':
        formTemplate = (
          <Aux>
            {values.label ? <label>{values.labelText}</label> : null}
            <input
              {...values.config}
              value={values.value}
              onBlur={event => changeHandler(event, data.id, true)}
              onChange={event => changeHandler(event, data.id, false)}
            />
            {values.validation && !values.valid ? <div className="label-error">{values.validationMessage}</div> : null}
          </Aux>
        )
        break
      case 'textarea':
        formTemplate = (
          <Aux>
            {values.label ? <label>{values.labelText}</label> : null}
            <textarea {...values.config} value={values.value} onChange={event => changeHandler(event, data.id)} />
          </Aux>
        )
        break
      case 'select':
        formTemplate = (
          <Aux>
            {values.label ? <label>{values.labelText}</label> : null}
            <select name={values.config.name} value={values.value} onChange={event => changeHandler(event, data.id)}>
              {values.config.option.map((item, i) => (
                <option key={i} value={item.val}>
                  {item.text}
                </option>
              ))}
            </select>
          </Aux>
        )
        break
      default:
        formTemplate = null
    }

    return formTemplate
  }

  return <Aux>{renderFields()}</Aux>
}

FormFields.propTypes = {
  formData: PropTypes.object,
}

export default FormFields
