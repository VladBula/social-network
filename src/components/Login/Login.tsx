import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login:string
    password:string
    rememberMe:boolean
}

const Login = () => {

    const onSubmit = (formData:FormDataType) => {
        console.log(formData)
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
            <div><Field name={'login'} placeholder={"Login"} component={"input"}/></div>
            <div><Field name={'password'} placeholder={"Password"} component={"input"}/></div>
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