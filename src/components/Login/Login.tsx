import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {AppDispatchForThunk, AppStateType, useAppSelector} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";

type FormDataType = {
    email:string
    password:string
    rememberMe:boolean
}

const Login = () => {

    const dispatch:AppDispatchForThunk = useDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)

    const onSubmit = (formData:FormDataType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe))
    }

if (isAuth) {
    return <Redirect to={"/profile"}/>
}

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name={'email'} placeholder={"Email"} component={Input} validate={[required]}/></div>
            <div><Field name={'password'} placeholder={"Password"} component={Input} validate={[required]} type="password"/></div>
            <div><Field name={'rememberMe'} component={"input"} type={"checkbox"}/>Remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)



export default Login;