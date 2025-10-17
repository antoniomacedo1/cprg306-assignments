export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center p-3 border rounded-lg shadow-sm bg-white hover:bg-gray-50">
      <span className="w-2/5 text-left font-medium text-gray-800">{name}</span>
      <span className="w-1/5 text-center text-gray-600">Qty: {quantity}</span>
      <span className="w-2/5 text-right text-gray-500 italic">{category}</span>
    </li>
  );
}
