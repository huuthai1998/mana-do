export enum TodoStatus {
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
}

export interface Todo {
  [key: string]: any;
}

export type EnhanceTodoStatus = TodoStatus | "ALL";
