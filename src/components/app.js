import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import FormFields from '../widgets/Forms/formFields'

class App extends Component {
  state = {
    formData: {
      name: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Name',
        config: {
          name: 'name_input',
          text: 'text',
          placeholder: 'Enter your name',
        },
        validation: {
          required: true,
          minLen: 5,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      lastName: {
        element: 'input',
        value: '',
        label: true,
        labelText: 'Last name',
        config: {
          name: 'lastname_input',
          text: 'text',
          placeholder: 'Enter your last name',
        },
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
        validationMessage: '',
      },
      message: {
        element: 'textarea',
        value: '',
        label: true,
        labelText: 'Message',
        config: {
          name: 'message_input',
          rows: 4,
          cols: 36,
        },
        validation: {
          required: false,
        },
        valid: true,
      },
      age: {
        element: 'select',
        value: '',
        label: true,
        labelText: 'Age',
        config: {
          name: 'message_input',
          option: [{ val: 1, text: '10-20' }, { val: 2, text: '21-30' }, { val: 3, text: '+30' }],
        },
        validation: {
          required: false,
        },
        valid: true,
      },
    },
  }

  updateForm = newState => {
    this.setState({ formData: newState })
    // this function update the value of each input
  }

  submitForm = e => {
    e.preventDefault()
    let dataToSubmit = {}
    let formIsValid = true
    const { formData } = this.state

    for (let key in formData) {
      dataToSubmit[key] = formData[key].value
    }

    for (let key in formData) {
      formIsValid = formData[key].valid && formIsValid
    }

    if (formIsValid) {
      // just the function to submit data
      console.log('dataToSubmit', dataToSubmit)
    }
  }

  render() {
    const { formData } = this.state
    return (
      <div className="container">
        <h1>Form validation pattern</h1>
        <form onSubmit={this.submitForm}>
          <FormFields
            formData={formData}
            change={newState => this.updateForm(newState)}
            //onblur={newState => this.updateForm(newState)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default hot(module)(App)
