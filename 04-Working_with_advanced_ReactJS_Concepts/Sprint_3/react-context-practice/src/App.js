import Entries from "./Entries";
import "./styles.css";
import { TodoProvider } from "./Todo-context";
import AddTodo from "./AddTodo";
import Theme from "./Theme";
import "bootstrap/dist/css/bootstrap.min.css";
import "./dark.css";

export default function App() {
  return (
    <div className="text-center">
      <TodoProvider>
        <Theme />
        <AddTodo />
        <Entries />
      </TodoProvider>
    </div>
  );
}
