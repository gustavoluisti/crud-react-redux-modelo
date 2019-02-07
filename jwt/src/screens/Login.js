import React, { Component } from 'react'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'

class Login extends Component{
    state = {
        form: {
            email: '',
            passwd: ''
        }
    }
    handleChange = fieldname => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }
    login = () => {
        const { email, passwd } = this.state.form
        this.props.login(email, passwd)
    }
    render(){
        return(
            <div>
                <h1>Login {JSON.stringify(this.state)} </h1>
                <input type='text' value={this.state.form.email} onChange={this.handleChange('email')}></input>
                <input type='password' value={this.state.form.passwd} onChange={this.handleChange('passwd')}></input>
                <button onClick={this.login}>Logar</button>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (email, passwd) => dispatch(ActionCreators.signinRequest(email, passwd))
        // login: (email, passwd) => dispatch(ActionCreators.signinRequest(email, passwd))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)