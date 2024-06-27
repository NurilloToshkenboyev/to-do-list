import React from "react";


export const Form = ({ setData, defaultValue, editedItem }) => {
  const [userName, setUserName] = React.useState(
    defaultValue ? defaultValue : ""
  );

  const submit = (e) => {
    e.preventDefault();
    if (defaultValue) {
      editedItem(userName);
      return;
    }
    setData((state) => {
      return [...state, { name: userName, id: Date.now() }];
    });
    setUserName("");
  };

  return (
    <form onSubmit={submit} className="flex flex-col space-y-4 items-center">
      <input
        onChange={(e) => setUserName(e.target.value)}
        value={userName}
        type="text"
        name="userName"
        className="border rounded-3xl p-5 w-full max-w-xs"
      />
      <button
        type="submit"
        className="bg-green-200 text-green px-4 py-2 rounded hover:bg-red-600"
      >
        {defaultValue ? "Edit" : "Send"}
      </button>
    </form>
  );
};

