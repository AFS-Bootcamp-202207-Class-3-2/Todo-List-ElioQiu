import "./index.css";
import {useDispatch} from "react-redux";
import {doneTodo, removeTodo} from "../todosSlice";
import {deleteTodo, updateTodo, updateTodoText} from "../../../api/todos";
import React, {useRef, useState} from "react";
import {Button, Modal, Form, Input} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';




export default function TodoItem(props) {
    const [isUpdateVisible, setIsUpdateVisible] = useState(false)
    const {todo} = props;
    const dispatch = useDispatch();
    const updateForm = useRef(null);

    const onTodoDone = () => {
        updateTodo(todo).then(response => {
            dispatch(doneTodo(response.data));
        })
    }

    const onDeleteItem = () => {
        deleteTodo(todo).then(response => {
            dispatch(removeTodo(response.data));
        })
    }

    const onHandleTodo = () => {
        setIsUpdateVisible(true)
    }

    const submitUpdate = ()=>{
        updateForm.current.validateFields().then(value => {
            setIsUpdateVisible(false)
            updateTodoText(todo.id, value).then(response => {
                dispatch(doneTodo(response.data));
            })
        })
    }

    return (
        <div className="TodoItem">
            <span className={todo.done ? "Done" : ""} onClick={onTodoDone}>
              {todo.text}
            </span>
            <div>
                <Button type="primary" shape="circle" icon={<EditOutlined/>}
                        onClick={onHandleTodo}/>
                <Button type="danger" shape="circle" icon={<DeleteOutlined/>}
                        onClick={onDeleteItem}/>
            </div>

            <Modal
                visible={isUpdateVisible}
                title="UpdateTodo"
                okText="Update"
                cancelText="Cancel"
                onCancel={() => {
                    setIsUpdateVisible(false)
                }}
                onOk={() => submitUpdate()}
            >
                <Form
                    ref={updateForm}
                >
                    <Form.Item
                        name="text"
                        label="Todo Text"
                        rules={[{ required: true, message: 'input your todo!' }]}
                        initialValue={todo.text}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
