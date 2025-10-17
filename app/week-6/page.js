import ItemList from "./item-list";

export default function Page()
{
    return (
        <main className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Shopping List</h1>
            <ItemList />
        </main>
    );
}