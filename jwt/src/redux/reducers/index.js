// Cada dado da store deve ter o seu próprio reducer, 
// por exemplo: o dado "user" teria o seu reducer,
//  chamado "userReducer". Um reducer é encarregado 
//  de lidar com todas as ações, como algum componente 
//  pedindo para alterar algum dado da store.

import { combineReducers } from 'redux'

import auth from './auth'
import runs from './runs'

const rootReducer = combineReducers({
    auth,
    runs
})
export default rootReducer