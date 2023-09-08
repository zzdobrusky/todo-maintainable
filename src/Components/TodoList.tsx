import { TodoType } from "../types/types";
import { EditTodoInput } from "./EditTodoInput";

import './Todo.css';

export const TodoList = (
  {
    todos,
    onToggleItem,
    onDeleteItem,
    onToggleEditItem,
    onChangeItem,
  }: {
    todos: TodoType[],
    onToggleItem: (todo: TodoType) => void,
    onDeleteItem: (todo: TodoType) => void,
    onToggleEditItem: (todo: TodoType) => void,
    onChangeItem: (content: string, todo: TodoType) => void,
  }) => {

  return (
    <div>
      {todos.map((todo: TodoType) => (
        <div key={todo.id} className='todo-item' data-testid='todo-item'>
          <EditTodoInput
            todo={todo}
            onChangeItem={onChangeItem}
            onEnterKey={onToggleEditItem}
            onToggleItem={onToggleItem}
            onToggleEditItem={onToggleEditItem}
          />

          <div className='todo-btn'>
            <button
              data-testid='delete-button'
              onClick={() => onDeleteItem(todo)}>Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
};