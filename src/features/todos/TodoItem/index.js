import "./index.css";
import {useDispatch} from "react-redux";
import {doneTodo, removeTodo} from "../todosSlice";
import {deleteTodo, updateTodo} from "../../../api/todos";
import React, {useRef, useState} from "react";
import {Button, Modal, Form, Input, Popconfirm} from "antd";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';


export default function TodoItem(props) {
    const [isUpdateVisible, setIsUpdateVisible] = useState(false)
    const {todo} = props;
    const dispatch = useDispatch();
    const updateForm = useRef(null);

    const onTodoDone = () => {
        updateTodo(todo.id, {done: !todo.done}).then(response => {
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

    const submitUpdate = () => {
        updateForm.current.validateFields().then(value => {
            setIsUpdateVisible(false)
            updateTodo(todo.id, value).then(response => {
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
                <Popconfirm
                    title="Are you sure to delete this card?"
                    onConfirm={onDeleteItem}
                    okText="Yes"
                    cancelText="No"
                >
                    <Button type="danger" shape="circle" icon={<DeleteOutlined/>}/>
                </Popconfirm>
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
                        rules={[{required: true, message: 'input your todo!'}]}
                        initialValue={todo.text}
                    >
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}
