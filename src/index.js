import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
let d=new Date().getHours()
var greeting=""
const cssStyle={}

if (d>=1 && d<12){
  greeting="Good morning"
  cssStyle.color='green'

}
else if(d>=12 && d<18){
  greeting="Good Afternoon"
  cssStyle.color='yellow'
}
else if(d>=18 && d<20){
  greeting="Good Afternoon"
  cssStyle.color='orange'
}

else{
  greeting="Good night"
  cssStyle.color='red'

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <h1>Hello sir ,<span style= {cssStyle}> {greeting}</span></h1>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
