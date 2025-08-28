import React from "react";

function Card({ userName, btnText="visit me" }) {
    console.log(userName);

    return (
        <div className="bg-white shadow-md rounded-xl p-6 max-w-sm mx-auto">
            <h2 className="text-xl font-bold text-gray-800 mb-2">{userName}</h2>
            <p className="text-gray-600 mb-4">
                This is a simple card component made with Tailwind CSS in React.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                {btnText}
            </button>
        </div>


    )
}

export default Card