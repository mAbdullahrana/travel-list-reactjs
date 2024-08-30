import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleSubmit(e) {
    e.preventDefault();

    initialItems.push({
      description,
      quantity,
      id: Date.now(),
      packed: false,
    });


    setDescription("");
    setQuantity(1);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="add-form">
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
          {Array.from({ length: 20 }, (_, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
}
function PackingList() {
 
  return (
    <div className="list">
      <ul>
        {initialItems.map((i) => (
          <Item item={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You Have X items on your list , and you already packed X%</em>
    </footer>
  );
}
