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

  const changeHandler = (event, id) => {
    const newState = formData
    newState[id].value = event.target.value
    change(newState)
  }

  const renderTemplates = data => {
    let formTemplate = ''
    let values = data.settings
    switch (values.element) {
      case 'input':
        formTemplate = (
          <Aux>
            {values.label ? <label>{values.labelText}</label> : null}
            <input {...values.config} value={values.value} onChange={event => changeHandler(event, data.id)} />
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
