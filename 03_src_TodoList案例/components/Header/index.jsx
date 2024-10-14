import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
import './index.css';

export default class Header extends Component {
    // 对接受的props进行类型、必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        const {target, keyCode} = event;
        // 判断是否按了回车键
        if (keyCode !== 13) return;
        // 判断不能为空
        if (target.value.trim() === '') {
            alert('输入不能为空');
            return;
        }
        // 准备好一个todo对象
        const todoObj = {id: nanoid(), name: target.value, done: false};
        // 将todoObj传递给App
        this.props.addTodo(todoObj);
        // 情况输入
        target.value = '';
    }


    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车确认"/>
            </div>
        );
    }
}
