import React,{Component} from 'react';

function Login(){
    return <h1>Login</h1>
}

function Logout(){
    return <h1>Logout</h1>
}


export default class RenderCondicional extends Component{
    constructor(props){
        super(props)
        this.state={
            login: false,
        }
    }

    render(){
        return (<div>
        <h1>Render Condicional</h1>
        {this.state.login===true ? <Login /> : <Logout />}    {/*Render Condicional*/}
        </div>)
    }

}