import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Mount from './Mount';
import AppMixin from './Mixin';
import AppInputTest from './AppInputTest';
import AppPersonTable from './AppPersonTable';
//ReactDOM.render(<App name="Hello properties"/>, document.getElementById('app'));

ReactDOM.render(<AppPersonTable />, document.getElementById('app'));