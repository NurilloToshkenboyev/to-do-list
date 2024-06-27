import React from "react";
import { Form } from "../form/form"


export const Card = ({ name, id, setData }) => {
  const [show, setShow] = React.useState(false);

  const deleteItem = () => {
    setData((data) => {
      return data.filter((item) => item.id !== id);
    });
  };

  const editItem = () => {
    setShow(!show);
  };

  const editedItem = (newValue) => {
    setData((data) => {
      return data.map((item) =>
        item.id === id ? { name: newValue, id } : item
      );
    });

    setShow(false);
  };

  return (
    <div className="bg-green-400 shadow-2xl rounded-lg p-4 mb-4">
      {show ? (
        <div className="my-8">
          <Form editedItem={editedItem} defaultValue={name} />
        </div>
      ) : (
        <h1 className="text-xl font-bold">{name}</h1>
      )}
      <div className="flex space-x-2 mt-4">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          onClick={deleteItem}
        >
           Delete
        </button>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          onClick={editItem}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

