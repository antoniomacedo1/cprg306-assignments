export default function Item({name, quantity, category})
{
    return (
        <li className="flex justify-between items-center p-3 border rounded-lg shadow-sm bg-white hover:bg-gray-50">
        <span className="font-medium text-gray-800">{name}</span>
        <span className="text-gray-600">Qty: {quantity}</span>
        <span className="text-gray-500 italic">{category}</span>
        </li>
    );
}