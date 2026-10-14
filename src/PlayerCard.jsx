import { useState } from "react";
import { players } from "./players.js";
export default function PlayerCard() {
  const [deletePlayers, setDeletePlayers] = useState(players);

  function removePlayers(id) {
    const newList = deletePlayers.filter((player) => player.id !== id);
    setDeletePlayers(newList);
  }
  function showPlayers() {
    setDeletePlayers(players);
  }
  return (
    <section className=" bg-white rounded-lg shadow-md p-4 m-2 " id="players">
      <h2 className="block text-3xl font-bold text-center mb-4 font-[Titr]">
        بازیکنان
      </h2>
      {deletePlayers.length === 0 && (
        <div className="flex flex-col items-center bg-gray-800 p-30 rounded-xl shadow-md">
          <p className="text-center text-white mb-8 font-bold font-[Titr]">هیچ بازیکنی وجود ندارد</p>
          <button onClick={showPlayers} className="bg-white font-bold font-[Titr] rounded-lg p-4 cursor-pointer hover:bg-green-500">نمایش تمام بازیکنان</button>
        </div>
      )}
      <div className="grid grid-cols-1 p-3 gap-10 rounded-lg font-[vazirmatn] sm:grid-cols-3">
        {deletePlayers.map((player) => (
          <div
            key={player.id}
            className="bg-gray-800 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={player.image}
              className="w-full h-100 object-cover rounded-xl"
            />
            <h3 className="text-2xl font-[Titr] mt-3 mb-5 text-white">
              {player.name}
            </h3>
            <p className="text-gray-200 mb-2">پست: {player.position}</p>
            <p className="text-gray-200 mb-2">تیم: {player.team}</p>
            <p className="text-gray-200 mb-2">ملیت: {player.nationality}</p>
            <p className="text-gray-200 mb-4">سن: {player.age}</p>
            <button
              onClick={() => removePlayers(player.id)}
              className="w-full bg-white rounded-lg p-2 text-black text-center font-[Titr] cursor-pointer hover:bg-red-500 hover:text-black"
            >
              حذف بازیکن
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
