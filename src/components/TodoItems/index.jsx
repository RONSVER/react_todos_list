import { useContext } from "react";
import { Context } from "../../context";
function TodoItems({ title, id }) {
  const { removeTodo, name } = useContext(Context);
  console.log(name);

  return (
    <li>
      <label>
        {id} {title}
      </label>
      <span
        onClick={() => removeTodo(id)}
        style={{ color: "red", cursor: "pointer" }}
      >
        x
      </span>
    </li>
  );
}
export default TodoItems;
