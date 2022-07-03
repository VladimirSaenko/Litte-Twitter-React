// import React, { Component } from 'react';
import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';

// function WhoAmI({name, surname, link}) {
//   return (
//     <>
//       <h1>My name is {name}, surname - {surname}</h1>
//       <a href={link}>My profile</a>
//     </>
//   )
// }

//    1 способ
// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 37
//     }
//     // this.nexYear = this.nexYear.bind(this); // 1 способ

//     // 2 способ 
//     // this.nexYear = () => {
//     //   this.setState(state => ({
//     //     years: ++state.years
//     //   }))
//     // }

//   }

//   // 3 способ
//   nexYear = () => {
//     console.log(1);
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }

//   // nexYear() {
//   //   console.log(1);
//   //   this.setState(state => ({
//   //     years: ++state.years
//   //   }))
//   // }

//   render() {
//     const { name, surname, link} = this.props;
//     return (
//     <>
//       <button onClick={this.nexYear}>+</button>
//       <h1>My name is {name}, surname - {surname}, years = {this.state.years} </h1>
//       <a href={link}>My profile</a>
//     </>
//   )
//   }
// }

function WhoAmI({name, surname, link}) {
  const [years, setYears] = useState(26);
 
  const nextYear = () => {
    setYears(years + 1);
  }
 
  return (
    <>
      <button onClick={nextYear}>++</button>
      <h1>My name is {name}, surname - {surname}, years = {years}</h1>
      <a href={link}>My profile</a>
    </>
  )
}
 
const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Fox" link="instagram.com"/>
      <WhoAmI name="James" surname="Bond" link="google.com"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <All />
  </React.StrictMode>
);
