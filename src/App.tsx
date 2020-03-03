import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { TodoFormRef } from './components/TodoFormRef';
import { TodoList } from './components/TodoList';
import { iTodo } from './interfaces';

declare var confirm: (question: string) => boolean;

const App: React.FC = () => {
  const [todos, setTodos] = useState<iTodo[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as iTodo[]
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);
  
  const addHandler = (title: string) => {
    const newTodo: iTodo = {
      title: title,
      id: Date.now(),
      completed: false
    }
    setTodos(prev => [newTodo, ...prev]);
  }

  const toggleHandler = (id: number) => {
    setTodos(prev => prev.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    }))
  }
  const removeHandler = (id: number) => {
    const shouldRemove = confirm('Вы уверены, что хотите удалить этот элемент?');
    if (shouldRemove) {
      setTodos(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <>
     <Navbar />
     <div className="container">
       <TodoFormRef onAdd={addHandler} />

       <TodoList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
     </div>
    </>
  );

}

export default App;
