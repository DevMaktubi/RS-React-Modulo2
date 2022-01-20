import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer} from 'miragejs';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', (req,res) => {
      return [
        {
          id: 1,
          title: 'Transaction One',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Transaction Two',
          amount: 300,
          type: 'withdraw',
          category: "Trading",
          createdAt: new Date()
        }
      ]
    })  
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
