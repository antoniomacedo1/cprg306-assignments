"use client";
import Item from "./item";
import { useState } from "react";
import items from "./items.json";

export default function ItemList({})
{
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a,b) => {
        if(sortBy == "name"){
            return a.name.localeCompare(b.name);
        }
        else if(sortBy == "category"){
            return a.category.localeCompare(b.category);
        }
        return 0;
    })

    return (
        <div className="p-3 m-3">
            <button onClick={() => setSortBy("name")} className={`p-2 m-2 border-2 text-black ${sortBy === "name" ? "bg-amber-600 border-black" : "bg-amber-200 border-transparent"}`}>
                Name
            </button>
            <button onClick={() => setSortBy("category")} className={`p-2 border-2 text-black ${sortBy === "category" ? "bg-amber-600 border-black" : "bg-amber-200 border-transparent"}`}>
                Category
            </button>
            <ul className="">
                {sortedItems.map((item) => (
                <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                />
            ))}</ul>
        </div>
    );
}