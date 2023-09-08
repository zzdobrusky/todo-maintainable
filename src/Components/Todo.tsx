import { TodoInput } from './TodoInput';
import { TodoList } from './TodoList';
import { useTodos } from '../hooks/useTodos';
import { Aggregation } from './Aggregation';
import { TodoType } from "../types/types";
import { SearchInput } from './SearchInput';

import './Todo.css';

export const Todo = ({ items }: { items?: TodoType[] }) => {
  const { displayTodos, addTodo, deleteTodo, toggleTodo, toggleEdit, changeTodo, switchCategory, aggregation, search } = useTodos(items);

  return (
    <div className='todo_container'>
      <h1>todos</h1>
      <TodoInput onItemAdded={addTodo} />
      <Aggregation aggregation={aggregation} switchCategory={switchCategory} />
      <TodoList
        todos={displayTodos}
        onToggleItem={toggleTodo}
        onDeleteItem={deleteTodo}
        onToggleEditItem={toggleEdit}
        onChangeItem={changeTodo} />
      <SearchInput performSearch={search} />
    </div>
  );
}