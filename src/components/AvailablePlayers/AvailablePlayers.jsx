import React, { use } from "react";
import PlayerCard from "../PlayerCard/playerCard";


const availablePlayers = ({ playerPromise, setavailableBlance, availableBlance, purchasedPlayers, setpurchasedPlayers }) => {
  const PlayerData = use(playerPromise);
  console.log(PlayerData);
  return (
    <div class=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
      {PlayerData.map(player => <PlayerCard setpurchasedPlayers={setpurchasedPlayers} purchasedPlayers={purchasedPlayers} player={player} availableBlance={availableBlance} setavailableBlance={setavailableBlance}></PlayerCard>  )}
    </div>
  );
};

export default availablePlayers;
