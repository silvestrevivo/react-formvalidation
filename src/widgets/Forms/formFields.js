import React from 'react'
import PropTypes from 'prop-types'

const FormFields = ({ formData }) => {
  const renderFields = () => {
    const formArray = []

    for (let elementName in formData) {
      formArray.push({
        id: elementName,
        settings: formData[elementName],
      })
    }

    console.log(formArray)
  }

  return (
    <div>
      <p>{renderFields()}</p>
    </div>
  )
}

FormFields.propTypes = {
  formData: PropTypes.object,
}

export default FormFields
