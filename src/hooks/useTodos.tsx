import { useMemo, useState } from "react";
import { TodoType, CATEGORIES } from "../types/types";

export const useTodos = (items: TodoType[] = []) => {
  const [todos, setTodos] = useState<TodoType[]>(items);
  const [category, switchCategory] = useState<CATEGORIES>(CATEGORIES.TOTAL);
  const [keyword, setKeyword] = useState<string>('');

  const active = useMemo(() => todos.filter(todo => !todo.completed), [todos]);
  const completed = useMemo(() => todos.filter(todo => todo.completed), [todos]);

  const displayTodos = useMemo(() => {
    let filteredTodos = [];
    switch (category) {
      case CATEGORIES.TOTAL:
        filteredTodos = todos;
        break;
      case CATEGORIES.ACTIVE:
        filteredTodos = active;
        break
      case CATEGORIES.COMPLETED:
        filteredTodos = completed;
        break;
      default:
        filteredTodos = todos;
    }
    return keyword ? filteredTodos.filter(todo => todo.content.includes(keyword)) : filteredTodos;
  }, [active, completed, category, todos, keyword])

  const aggregation = useMemo(() => {
    return {
      total: todos.length,
      active: active.length,
      completed: completed.length
    };
  }, [todos.length, active.length, completed.length])

  const search = (keyword: string) => {
    setKeyword(keyword);
  }

  const addTodo = (todo: TodoType) => {
    setTodos([todo, ...todos]);
  }

  const toggleTodo = (todo: TodoType) => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    }));
  }

  const deleteTodo = (todo: TodoType) => {
    setTodos(todos.filter(item => item.id !== todo.id));
  }

  const toggleEdit = (todo: TodoType) => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, isEditing: !item.isEditing };
      }
      return item;
    }));
  }

  const changeTodo = (value: string, todo: TodoType) => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return { ...item, content: value };
      }
      return item;
    }));
  }

  return {
    displayTodos,
    addTodo,
    switchCategory,
    toggleTodo,
    deleteTodo,
    toggleEdit,
    changeTodo,
    aggregation,
    search,
  }
}