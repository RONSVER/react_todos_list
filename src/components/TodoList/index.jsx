import TodoItem from "../TodoItems";
import { Context } from "../../context";
let nums = [1, 2, 3];

function TodoList({ todos, removeTodo }) {
  return (
    // <Context.Provider value={{ nums }}>
    <ul>
      {todos.map((el) => {
        return <TodoItem key={el.id} {...el} />;
      })}
    </ul>
    /* </Context.Provider> */
  );
}
export default TodoList;
