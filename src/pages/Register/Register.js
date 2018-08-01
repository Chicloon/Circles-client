import React, { Component } from 'react'
import { CenteredLayout } from '../../layouts/CenteredLayout'
import RegisterForm from './RegisterForm'

import profilePic from './blank-profile.svg'

class Register extends Component {
  submitForm(event) {
    event.preventDefault()

    return fetch('/api/user/create', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(this.props.user),
    })
      .then(response => {
        this.setState({ error: false })

        if (response.ok) {
          let contentType = response.headers.get('content-type')
          if (contentType && contentType.includes('application/json')) {
            return response.json()
          }

          throw new TypeError('От сервера получен ответ в неверном формате')
        }

        throw new TypeError('От сервера получен неверный ответ')
      })
      .then(registeredUserProps => {
        if (typeof this.onRegister === 'function') {
          return this.onRegister(registeredUserProps)
        }
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  render() {
    return (
      <CenteredLayout logo={true} title="Регистрация">
        <RegisterForm />
        {/* <div className="card">
          <div style={{ padding: '2rem 6rem' }}>
            <img className="card-img-top" src={profilePic} alt="" />
            <p>
              
            </p>
          </div>
          <div className="card-body">
            {this.state.error ? (
              <div className="alert alert-danger" role="alert">
                Ошибка: {this.state.error}
              </div>
            ) : (
              ''
            )}

            <form className="" onSubmit={this.submitForm.bind(this)}>
              <SexInput name="sex" onChange={this.changeSex.bind(this)} />
              <div className="form-group">
                <div className="row">
                  <label className="col">Имя</label>
                </div>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Введите полные имя и фамилию"
                  onChange={this.changeName.bind(this)}
                />
              </div>
              <div className="form-group">
                <label className="">Дата рождения</label>
                <input
                  type="date"
                  name="birthday"
                  className="form-control"
                  onChange={this.changeBirthday.bind(this)}
                />
              </div>
              <button className="btn btn-primary btn-block btn-lg">
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div> */}
      </CenteredLayout>
    )
  }
}

export default Register
