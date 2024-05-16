import React, { Component } from 'react';
import './sty.css';

class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            completedTodos: [],
        };
        this.titleInput = React.createRef();
        this.contentInput = React.createRef();
    }

    addTodo = () => {
        const title = this.titleInput.current.value.trim();
        const content = this.contentInput.current.value.trim();
        if (title && content) {
            const newTodo = {
                id: Date.now(),
                title,
                content,
            };
            this.setState((prevState) => ({
                todos: [...prevState.todos, newTodo],
            }));
            this.clearInputs();
        } else {
            alert('제목과 내용을 모두 입력해주세요.');
        }
    };

    clearInputs = () => {
        this.titleInput.current.value = '';
        this.contentInput.current.value = '';
    };

    handleComplete = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
            completedTodos: [...prevState.completedTodos, prevState.todos.find((todo) => todo.id === id)],
        }));
    };

    handleDelete = (id) => {
        this.setState((prevState) => ({
            todos: prevState.todos.filter((todo) => todo.id !== id),
            completedTodos: prevState.completedTodos.filter((todo) => todo.id !== id),
        }));
    };

    render() {
        return (
            <div>
                <div className="main">
                    <a
                        href="#"
                        className="home"
                        onClick={(event) => {
                            event.preventDefault();
                            window.location.reload();
                        }}
                    >
                        My Todo List
                    </a>
                    <span className="logo">React</span>
                </div>

                <div className="contents">
                    <div className="input-group">
                        <label htmlFor="todo-title">제목:</label>
                        <input type="text" id="todo-title" ref={this.titleInput} placeholder="제목을 입력하세요" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="todo-content">내용:</label>
                        <input type="text" id="todo-content" ref={this.contentInput} placeholder="내용을 입력하세요" />
                    </div>
                    <button onClick={this.addTodo}>추가하기</button>
                </div>

                <div className="contents-list">
                    <h3>Working</h3>
                    <input type="checkbox" id="check-all-todos" /> 전체 선택
                    <ul>
                        {this.state.todos.map((todo) => (
                            <li key={todo.id}>
                                <input type="checkbox" className="todo-checkbox" />
                                <div className="todo-title">{todo.title}</div>
                                <div>{todo.content}</div>
                                <div className="button-container">
                                    <button onClick={() => this.handleComplete(todo.id)}>완료</button>
                                    <button onClick={() => this.handleDelete(todo.id)}>삭제</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="completed-list">
                    <h3>Done</h3>
                    <input type="checkbox" id="check-all-completed" /> 전체 선택
                    <ul>
                        {this.state.completedTodos.map((todo) => (
                            <li key={todo.id}>
                                <input type="checkbox" className="todo-checkbox" />
                                <div className="todo-title">{todo.title}</div>
                                <div>{todo.content}</div>
                                <div className="button-container">
                                    <button onClick={() => this.handleDelete(todo.id)}>삭제</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TodoApp;
