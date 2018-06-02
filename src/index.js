import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { SSL_OP_PKCS1_CHECK_2 } from 'constants';

// a variable declared with const cannot be changed unless it's an array or object
// a variable declared with let can be changed

//but if a variable is an array or object 
//its value can get altered

const para = {
 text: "When you have a talking mouth you don't have listening ears"
};

const list = [
   {
      title: "Tell me the truth without words",
      url: 'http://kaloraat.com',
      author: 'Ryan',
      num_comments : 100,
      points: 50,
      objectID: 1
   },
   {
      title: "Oh no, the candle is out!",
      url: 'http://kaloraat.com',
      author: 'Zen',
      num_comments : 50,
      points: 20,
      objectID: 2
   },
   {
      title: "The hard earned black belt",
      url: 'http://kaloraat.com',
      author: 'Ninja',
      num_comments : 10,
      points: 5,
      objectID: 3
   },
]

class Hello extends React.Component {
   render(){
      para.iAmNewPara = "I can change you!"
      return(
         <div>
               {
                  list.map(function(item){
                     return <div>
                              <h1> <a href = {item.url}>{ item.title}</a> by {item.author} </h1>
                              <h2> {item.num_comments} Comments | {item.points} Points </h2>
                              <h4> </h4>
                           </div>
                  })
               }
         </div>

      )
   }
}

ReactDOM.render(<Hello />, document.getElementById('root'));
registerServiceWorker();
