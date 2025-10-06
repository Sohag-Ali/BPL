import { Suspense, useState } from "react";
import "./App.css";

import AvailablePlayers from "./components/AvailablePlayers/availablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { ToastContainer } from "react-toastify";

const featchPlayer = async () => {
  const res = await fetch("/Player.json");
  return res.json();
};
const playerPromise = featchPlayer();

function App() {
  const [toggle, settoggle] = useState(true);
  const [availableBlance, setavailableBlance] = useState(5500000);
  const [purchasedPlayers, setpurchasedPlayers] = useState([]);
  const removePlayer = (p) => {
    const filterData = purchasedPlayers.filter(
      (ply) => ply.player_name !== p.player_name
    );
    setpurchasedPlayers(filterData);
    setavailableBlance(
      availableBlance +
        parseInt(p.price.split("USD").join("").split(",").join(""))
    );
  };

  return (
    <>
      <Navbar availableBlance={availableBlance}></Navbar>
      <div className=" mx-auto max-w-[1200px] flex justify-between items-center">
        <h1 className="font-bold text-2xl">
          {toggle === true
            ? "Available Player"
            : `Selected Player (${purchasedPlayers.length}/6)`}
        </h1>
        <div className="font-bold">
          <button
            onClick={() => settoggle(true)}
            className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${
              toggle === true ? "bg-[#86ad11]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => settoggle(false)}
            className={`py-3 px-4 border-1 border-gray-400 rounded-r-xl border-l-0 ${
              toggle === false ? "bg-[#86ad11]" : ""
            }`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {toggle === true ? (
        <Suspense
          fallback={
            <span className="loading loading-spinner text-error  "></span>
          }
        >
          <AvailablePlayers
            purchasedPlayers={purchasedPlayers}
            setpurchasedPlayers={setpurchasedPlayers}
            availableBlance={availableBlance}
            setavailableBlance={setavailableBlance}
            playerPromise={playerPromise}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <SelectedPlayers
          removePlayer={removePlayer}
          purchasedPlayers={purchasedPlayers}
        ></SelectedPlayers>
      )}
      <div className="max-w-[1200px] mx-auto">
        {toggle === false && ( 
          <div className="btn mt-5 py-3 px-4 border-1 border-gray-400 rounded-xl bg-[#86ad11] font-bold">
            <button onClick={() => settoggle(true)}>ADD MORE</button>
          </div>
        )}
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
