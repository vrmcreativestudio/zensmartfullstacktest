import React, { Component } from 'react';
import { Container, Table, Form } from 'react-bootstrap';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: props.todoList
    };
    
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(key, event) {
    let newTodoList = this.state.todoList;
    if (newTodoList[key]) newTodoList[key].done = true;
    this.setState({
      todoList: newTodoList
    });
    this.props.onItemClick(this.state.todoList, event);
  }

  render() {
    return(
      <Container>
        <h1>Todo List Page</h1>
        <Table striped hover>
          <tbody>
            {
              (this.state.todoList) ? (this.state.todoList.map((data, key) => 
                // Display data for each todo list.
                (<tr key={key} onClick={(event) => (!data.done) ? this.handleClick(key, event) : '' }>
                  <td>{key+1}</td>
                  <td>{data.text}</td>
                  <td>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Done" checked={data.done} disabled />
                    </Form.Group>
                  </td>
                </tr>))) :
                // If no items for todo list.
                (<tr><td colSpan={3}>No Items.</td></tr>)
            }
          </tbody>
        </Table>
      </Container>
    );
  }
}

export default TodoList;