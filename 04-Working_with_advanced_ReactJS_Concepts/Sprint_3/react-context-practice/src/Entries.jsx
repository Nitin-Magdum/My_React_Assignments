import { useContext } from "react";
import Entry from "./Entry";
import { TodoContext } from "./Todo-context";

const Entries = () => {
  const { item } = useContext(TodoContext);
  //console.log(item);
  return (
    <>
      {item.map((el) => {
        return <Entry entry={el} />;
      })}
    </>
  );
};

export default Entries;
