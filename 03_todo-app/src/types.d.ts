//* Allgemeine type definition

interface ITodoType {
  task: string;
  isDone: boolean;
  id: number | number; //* id kann string oder number
  todo?: string; //* fals es gibt type ist string(muss man nicht definieren)
}

type AddFn = (task: string) => Promise<void>;
type ToggleFn = (todo: ITodoType) => Promise<void>;
type DeleteFn = (id: string | number) => Promise<void>;

interface ITodoListFn {
  deleteTodo: DeleteFn;
  toggleTodo: ToggleFn;
}
