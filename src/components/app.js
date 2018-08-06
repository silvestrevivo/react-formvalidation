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
      },
    },
  }

  updateForm = newState => {
    this.setState({ formData: newState })
  }

  submitForm = e => {
    e.preventDefault()
    let dataToSubmit = {}
    const { formData } = this.state
    for (let key in formData) {
      dataToSubmit[key] = formData[key].value
    }
    console.log('dataToSubmit', dataToSubmit)
  }

  render() {
    const { formData } = this.state
    return (
      <div className="container">
        <h1>Form validation pattern</h1>
        <form onSubmit={this.submitForm}>
          <FormFields formData={formData} change={newState => this.updateForm(newState)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default hot(module)(App)
