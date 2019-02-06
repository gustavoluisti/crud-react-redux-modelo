import React from 'react'
import { connect } from 'react-redux';
import ActionCreators from './redux/actionCreators'

const Header = props => {
    return(
        <header className="App-header">
          
        </header>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)