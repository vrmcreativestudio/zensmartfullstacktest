import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

import TodoList from './components/TodoList';
import TestLibrary from './components/TestLibrary';

import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const todoList = [
    {
      text: "Todo List 1",
      done: false,
    },
    {
      text: "Todo List 2",
      done: false,
    },
    {
      text: "Todo List 3",
      done: false,
    },
    {
      text: "Todo List 4",
      done: false,
    },
  ];

  const [todoListItems, setTodoListItems] = useState(todoList);
  
  const onItemClick = (todoListItems, event) => {
    setTodoListItems(todoListItems);
  }

  useEffect(() => {
  }, [todoListItems]);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">ZenSmart React Fullstack Test</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end flex-grow-1">
              <Nav.Link href="/todo-list">Todo List</Nav.Link>
              <Nav.Link href="/test-library">Test Library</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Router>
          <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/todo-list" element={<TodoList todoList={todoListItems} onItemClick={onItemClick} />} />
          <Route path="/test-library" element={<TestLibrary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

function Home() {
  return(
    <Container>
      <h1>Home Page</h1>
    </Container>
  );
}