import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

const element = <h1>Hello, world!</h1>;
class Welcome extends React.Component {
  render() {
    return <h1>Hello Welcome!</h1>;
  }
}
function HelloMessage() {
    return <h1>Hello Worldfff!</h1>;
}
function HelloMessage1(props: { name: React.ReactNode; }) {
    return <h1>Hello {props.name}!</h1>;
}

const elementHelloMessage1 = <HelloMessage1 name="Runoob"/>;
const element1 = <Welcome />;
function Name(props: { name: React.ReactNode; }) {
    return <h1>网站名称：{props.name}</h1>;
}
function Url(props: { url: React.ReactNode; }) {
    return <a href={"http://localhost:8080/user"}>本地</a>

}
function Nickname(props: { nickname: React.ReactNode; }) {
    return <a href={"http://47.100.161.227:8080/user"}>远程</a>
}

function App() {
    return (
    <div>
        <Name name="菜鸟教程" />
        <Url url="http://www.runoob.com" />
        <br/>
        <Nickname nickname="Runoob" />
    </div>
    );
}

 

ReactDOM.render(
<App/>
    ,
  document.getElementById('root')

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
