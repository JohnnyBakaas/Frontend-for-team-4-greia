const ToDoItem = ({ item, api, setItemChanges, setItems, items }) => {
  const markAsDone = async () => {
    try {
      await api.put(`/markTaskAsDone?taskId=${item.id}`);
      setItems(items.filter((e) => e.id !== item.id));
    } catch (err) {
      console.log(err);
    }
  };

  const createdDate = new Date(item.createdDate);
  const formattedDate = `${createdDate.toLocaleDateString()} ${createdDate.toLocaleTimeString(
    [],
    { hour: "2-digit", minute: "2-digit" }
  )}`;

  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.description}</td>
      <td>{formattedDate}</td>
      <td>
        <button onClick={markAsDone}>Ferdig!</button>
      </td>
    </tr>
  );
};

export default ToDoItem;
