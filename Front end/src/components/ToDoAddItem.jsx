import { useState } from "react";

const ToDoAddItem = ({ setItemChanges, itemChanges, api }) => {
  const [tittel, setTittel] = useState("");
  const [description, setDescription] = useState("");

  const handleTittel = (e) => {
    setTittel(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const AddItem = async (e) => {
    e.preventDefault();

    try {
      const body = {
        title: tittel,
        description: description,
        createdDate: "2023-05-10T03:51:17.502Z",
        doneDate: "2023-05-10T03:51:17.502Z",
        userId: localStorage.getItem("TeamProsjektUserId"),
        id: 0,
      };

      const respnse = await api.post("/newTask", body);
      console.log(respnse);
    } catch (err) {
      console.log(err);
    }

    setTittel("");
    setDescription("");
    setItemChanges(2);
  };
  return (
    <form onSubmit={AddItem}>
      <label htmlFor="Tittel">Tittel</label>
      <input
        type="text"
        id="Tittel"
        value={tittel}
        onChange={handleTittel}
        required
      />

      <label htmlFor="Description">Beskrivelse</label>
      <input
        type="text"
        id="Description"
        value={description}
        onChange={handleDescription}
        required
      />

      <button type="submit">Legg til</button>
    </form>
  );
};

export default ToDoAddItem;
