import { useState, ChangeEvent, KeyboardEvent } from "react";
import { v4 as uuid } from 'uuid';
import { TodoType } from "../types/types";
import { useShortcutKey } from "../hooks/useShortcutKey";

import './Todo.css';

export const TodoInput = ({ onItemAdded }: { onItemAdded: (todo: TodoType) => void }) => {
  const [content, setContent] = useState<string>('');
  const { inputRef } = useShortcutKey('k');


  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onItemAdded({ id: uuid(), content, completed: false, isEditing: false });
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  }

  return (
    <input
      ref={inputRef}
      type='text'
      data-testid='todo-input'
      className='todo-input'
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder='Type to add item, enter to confirm...'
    />
  );
}