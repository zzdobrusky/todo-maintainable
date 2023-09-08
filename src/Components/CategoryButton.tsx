import { CATEGORIES } from "../types/types";

export const CategoryButton = ({ title, type, number, switchCategory }: {
  title: string,
  type: CATEGORIES,
  number: number,
  switchCategory: (type: CATEGORIES) => void
}) => (
  <button
    data-testid={`todo-${type}`}
    onClick={() => switchCategory(type)}
  >
    {title} {number}
  </button>
);