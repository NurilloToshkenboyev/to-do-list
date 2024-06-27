import { Form } from "./components/form";
import { Card } from "./components/card";
import React from "react";

function App() {
  const [data, setData] = React.useState([]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="container mx-auto p-4 bg-blue-400 rounded-lg shadow-lg">
        <a href="#">
        <h1 className="text-3xl font-bold mb-6 text-center">To-Do-List</h1>
        </a>
        <div className="bg-blue-400 p-6 rounded-lg shadow-md mb-6">
          <Form setData={setData} />
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <Card setData={setData} key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;


