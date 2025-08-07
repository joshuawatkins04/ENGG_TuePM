import { useState } from "react";
import Divider from "./components/Divider";
import StatusControls from "./components/StatusControls";
import CarTrafficSection from "./components/CarTrafficSection";
import BoatTrafficSection from "./components/BoatTrafficSection";
import BridgeControls from "./components/BridgeControls";

function App() {
  const [bridgeStatus, setBridgeStatus] = useState(() => {
    return sessionStorage.getItem("bridge-status") || "DISCONNECTED";
  });

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-2">
      <div className="w-full max-w-xl bg-gray-100 flex flex-col justify-center items-center space-y-4 rounded-lg p-4">
        <h1 className="text-2xl font-bold">Bridge User Interface</h1>

        <Divider />

        <StatusControls setBridgeStatus={setBridgeStatus} />

        <Divider />

        <BridgeControls bridgeStatus={bridgeStatus} />

        <Divider />

        <CarTrafficSection title={"Road Traffic Left Status"} />
        <CarTrafficSection title={"Road Traffic Right Status"} />
        <BoatTrafficSection title={"Boat Traffic Light Status 1"} />
        <BoatTrafficSection title={"Boat Traffic Light Status 2"} />

        <Divider />
      </div>
    </div>
  );
}

export default App;
