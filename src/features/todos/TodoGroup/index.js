import TodoItem from "../TodoItem";
import { Card, Col, Row } from 'antd';
import React from "react";

export default function TodoGroup(props) {
  const { todos } = props;
  return (
    <div>
        <div className="site-card-wrapper">
              <Row gutter={[16, 16]}>
                {
                  todos.map((todo) =>
                      <Col span={8} key={todo.id}>
                        <Card title={todo.done?"Done":"To be done"} bordered={true} hoverable={true}>
                            <TodoItem key={todo.id} todo={todo} />
                        </Card>
                      </Col>
                  )
                }
              </Row>
            </div>
    </div>
  );
}
