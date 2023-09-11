export type TodoType = {
  id: string;
  content: string;
  completed: boolean;
  isEditing: boolean;
}

export type AggregationType = {
  total: number;
  active: number;
  completed: number;
}

export enum CATEGORIES {
  TOTAL = 'total',
  ACTIVE = 'active',
  COMPLETED = 'completed'
}