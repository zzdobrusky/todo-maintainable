import { KeyboardEvent } from 'react';
import { TodoType } from "types";

import styles from './shared.module.css';

export const EditTodoInput = (
  {
    todo,
    onToggleItem,
    onChangeItem,
    onEnterKey,
    onToggleEditItem,
  }: {
    todo: TodoType,
    onToggleItem: (todo: TodoType) => void,
    onChangeItem: (content: string, todo: TodoType) => void,
    onEnterKey: (todo: TodoType) => void,
    onToggleEditItem: (todo: TodoType) => void,
  }) => {

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, todo: TodoType) => {
    if (e.key === 'Enter') {
      onEnterKey(todo);
    }
  }

  return (
    <>
      {todo.isEditing
        ?
        <input
          data-testid='todo-edit-input'
          className={styles.todo_edit}
          type='text'
          defaultValue={todo.content}
          onChange={(e) => onChangeItem(e.target.value, todo)}
          onKeyDown={(e) => handleKeyDown(e, todo)}
        />
        :
        <div
          className={styles.todo_content}
          data-completed={todo.completed}
          onClick={() => onToggleItem(todo)}
        >
          {todo.content}
        </div>
      }
      <div className={styles.todo_btn}>
        <button
          data-testid='toggle-edit-button'
          onClick={() => onToggleEditItem(todo)}>
          {todo.isEditing ? 'Done' : 'Edit'}
        </button>
      </div>
    </>

  );
}