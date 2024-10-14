import React, {Component} from 'react';
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import "./App.css"


/*
* 1.拆分组件
* 2.实现静态组件
* 3.实现动态组件
* */
export default class App extends Component {
    /*
    * 状态在哪里，操作状态的方法就在哪里
    * */

    // 初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: false},
            {id: '003', name: '写代码', done: false},
            {id: '004', name: '逛街', done: true},
        ]
    }

    // 子传父，添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        const {todos} = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({todos: newTodos});
    }

    // 用于更新一个todo对象，勾选的更改在这里修改对应todo的props中的属性
    updateTodo = (id, done) => {
        const {todos} = this.state;
        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) return {...todoObj, done: done};
            else return todoObj;
        });
        this.setState({todos: newTodos});
    }

    // 删除一个todo对象
    deleteTodo = (id) => {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id;
        });
        this.setState({todos: newTodos});
    }

    // 全选
    checkAllTodo = (done) => {
        const {todos} = this.state;
        const newTodos = todos.map((todoObj) => {
            return {...todoObj, done};
        });
        this.setState({todos: newTodos});
    }

    // 清除所有已完成
    clearAllDone = () => {
        const {todos} = this.state;
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done;
        });
        this.setState({todos: newTodos});
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        )
    }
}