import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div>
      <div className="flex justify-between items-center border-2 border-gray-300 p-3 rounded-xl mt-5">
        <div className="flex items-center">
          <img
            className="h-[50px] w-[50px] rounded-xl"
            src={player.player_image}
            alt=""
          />
          <div className="ml-2">
            <h1>{player.player_name}</h1>
            <p className="text-xs">{player.playing_role}</p>
          </div>
        </div>
        <div onClick={handleRemove}>
          <img src="https://i.ibb.co.com/Y4zgZF8Z/Frame.png" alt="" />
        </div>
      </div>

      
    </div>
  );
};

export default SelectedCard;
