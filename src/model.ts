export interface Entry {
  id: number;
  done: boolean;
  descrip: string;
}

let nextId = 0;

export function createEntry(descrip: string): Entry {
  return {
    id: ++nextId,
    done: false,
    descrip,
  };
}

export type ShowFilter = "all" | "completed" | "active";
