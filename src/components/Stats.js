export function Stats({ items }) {
  if (!items.length)
    return (
      <em className="stats">Start Adding Some Items To Your Packing List</em>
    );
  const numItems = items.length;
  const packed = items.filter((i) => i.packed === true).length;
  const percentage = Math.floor((packed / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Are Ready To GO"
          : `You Have ${numItems} items on your list , and you already packed ${packed}
        (${percentage})% `}
      </em>
    </footer>
  );
}
