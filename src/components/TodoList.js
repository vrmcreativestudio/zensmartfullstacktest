import React, { Component } from 'react';
import { Container, Table, Form, Button, Modal } from 'react-bootstrap';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: props.todoList,
      showAddNewTodo: false,
      addNewTodoText: "Todo List " + (props.todoList.length+1),
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(key, event) {
    let newTodoList = this.state.todoList;
    if (newTodoList[key]) newTodoList[key].done = true;
    this.setState({
      todoList: newTodoList
    });
    this.props.onItemClick(this.state.todoList, event);
  }

  handleChange(event) {
    this.setState({addNewTodoText: event.target.value});
  }

  handleSubmit(event) {
    let newTodoList = this.state.todoList;
    newTodoList.push({text: this.state.addNewTodoText, done: false});
    this.setState({
      todoList: newTodoList,
      showAddNewTodo: false,
      addNewTodoText: "Todo List " + (newTodoList.length+1),
    }, this.props.onItemClick(this.state.todoList, event));
  }

  handleDelete(key, event) {
    let newTodoList = this.state.todoList;
    newTodoList.splice(key, 1);
    this.setState({
      todoList: newTodoList,
      showAddNewTodo: false,
      addNewTodoText: "Todo List " + (newTodoList.length+1),
    }, this.props.onItemClick(this.state.todoList, event));
  }

  render() {
    return(
      <Container id="todoList">
        <h1>Todo List</h1>
        <Button variant="success" className="mb-2" size="sm" onClick={() => this.setState({showAddNewTodo: true})}>Add New Todo</Button>
        <Table striped hover>
          <tbody>
            {
              (this.state.todoList.length > 0) ? (this.state.todoList.map((data, key) => 
                // Display data for each todo list.
                (<tr key={key}>
                  <td style={{textAlign: 'center'}}>{key+1}</td>
                  <td>{data.text}</td>
                  <td style={{verticalAlign: 'middle'}}>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Done" checked={data.done} disabled />
                    </Form.Group>
                  </td>
                  <td style={{width: '20%'}}>
                    <Button onClick={(event) => (!data.done) ? this.handleClick(key, event) : '' } variant="outline-success" style={{margin: '4px 3px'}} size="sm" disabled={(data.done) ? true : false}>Mark as Done</Button>
                    <Button onClick={(event) => this.handleDelete(key, event)} variant="outline-danger" style={{margin: '4px 3px'}} size="sm">Delete</Button>
                  </td>
                </tr>))) :
                // If no items for todo list.
                (<tr><td colSpan={3}>No Items.</td></tr>)
            }
          </tbody>
        </Table>

        <Modal show={this.state.showAddNewTodo} onHide={() => this.setState({showAddNewTodo: false})}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Todo</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formTodoText">
                <Form.Label>Todo Text</Form.Label>
                <Form.Control type="text" placeholder="Todo Text #" defaultValue={this.state.addNewTodoText} onChange={this.handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="outline-primary" onClick={this.handleSubmit}>Add</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

export default TodoList;