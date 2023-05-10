import { useEffect, useState } from "react";
import Loading from "./Loading";
import ToDoItem from "./ToDoItem";

const ToDoITems = ({ items, setItems, api }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getToDoItems = async () => {
      try {
        const response = await api.get(
          `/userTaskList?userId=${localStorage.getItem("TeamProsjektUserId")}`
        );
        const data = response.data.filter((e) => !e.doneDate);
        setItems(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    getToDoItems();
  }, []);

  if (loading) return <Loading />;
  if (!items.length) return <h1>Du har gjort alt på listen din!🎉🎉🎉</h1>;
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Beskrivelse</th>
          <th>Dato</th>
          <th>Ferdig?</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            api={api}
            setItems={setItems}
            items={items}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ToDoITems;
