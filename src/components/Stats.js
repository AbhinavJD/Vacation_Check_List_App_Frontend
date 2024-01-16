export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em> Start addding some items to your packing list 🚀</em>
      </p>
    );
  const itemCount = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / itemCount) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You got everythong! Ready to go ✈️"
          : `💼 You have ${itemCount} items on your list, and you already packed
        ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}
