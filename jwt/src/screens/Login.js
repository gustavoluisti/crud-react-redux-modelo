import React, { Component } from 'react'
import ActionCreators from '../redux/actionCreators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Header from '../Header'
import { Form, Button } from 'semantic-ui-react'


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
        if(this.props.auth.isAuth){
            if(this.props.auth.user.role === 'admin'){
                return <Redirect to='/admin' />
            }
            return <Redirect to='/restrito' />
        }
        
        return(
            <div>
                <h1>Login</h1>
                <Header />
                <Form>
                    <Form.Field>
                        <label>E-mail</label>
                        <input type='text' value={this.state.form.email} onChange={this.handleChange('email')}></input>
                    </Form.Field>
                    <Form.Field>
                        <label>Senha</label>
                        <input type='password' value={this.state.form.passwd} onChange={this.handleChange('passwd')}></input>
                    </Form.Field>
                    
                    <Button onClick={this.login}>Logar</Button>
                    {
                        this.props.auth.error &&
                            <p>Erro ao logar</p>
                    }
                </Form>
                
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