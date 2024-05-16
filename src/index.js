import React from 'react';
import ReactDOM from 'react-dom'; // 올바른 방식으로 수정
import './sty.css';
import TodoApp from './TodoApp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <TodoApp />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
