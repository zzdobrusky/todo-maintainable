import { CategoryButton } from './CategoryButton';
import { CATEGORIES, AggregationType } from "../types/types";

import './Todo.css';

export const Aggregation = ({ aggregation, switchCategory }: { aggregation: AggregationType, switchCategory: (type: CATEGORIES) => void }) => (
  <div className='todo-aggregation'>
    <CategoryButton
      title='Total'
      type={CATEGORIES.TOTAL}
      number={aggregation.total}
      switchCategory={switchCategory}
    />
    <CategoryButton
      title='Active'
      type={CATEGORIES.ACTIVE}
      number={aggregation.active}
      switchCategory={switchCategory}
    />
    <CategoryButton
      title='Completed'
      type={CATEGORIES.COMPLETED}
      number={aggregation.completed}
      switchCategory={switchCategory}
    />
  </div>
)