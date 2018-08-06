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

  submitForm = () => {
    //....
  }

  render() {
    const { formData } = this.state
    return (
      <div className="container">
        <h1>Form validation pattern</h1>
        <form onSubmit={this.submitForm}>
          <FormFields formData={formData} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default hot(module)(App)
