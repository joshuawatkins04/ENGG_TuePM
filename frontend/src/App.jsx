import { useState } from "react";
import CustomButton from "./components/CustomButton";
import Divider from "./components/Divider";
import StatusSection from "./components/StatusSection";
import CarTrafficSection from "./components/CarTrafficSection";
import BoatTrafficSection from "./components/BoatTrafficSection";

const BackendStatus = {
  CONNECTED: "CONNECTED",
  CONNECTING: "CONNECTING",
  DISCONNECTED: "DISCONNECTED",
};

function App() {
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState(() => {
    return sessionStorage.getItem("backend-status") || BackendStatus.DISCONNECTED;
  });

  const handleConnectToBackend = async () => {
    setBackendLoading(true);
    setBackendStatus(BackendStatus.CONNECTING);
    sessionStorage.setItem("backend-status", BackendStatus.CONNECTING);

    try {
      const result = await fetch("http://localhost:9002");
      const data = await result.text();

      let state = null;

      if (data.startsWith("STATE:")) {
        state = data.split("STATE:")[1].trim();
        console.log(state);

        if (state === "RUNNING") {
          setBackendStatus(BackendStatus.CONNECTED);
          sessionStorage.setItem("backend-status", BackendStatus.CONNECTED);
        }
      }
    } catch (error) {
      console.error("Connection error:", error);
      setBackendStatus(BackendStatus.DISCONNECTED);
      sessionStorage.setItem("backend-status", BackendStatus.DISCONNECTED);
    } finally {
      setBackendLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mx-2">
      <div className="w-full max-w-xl bg-gray-100 flex flex-col justify-center items-center space-y-4 rounded-lg p-4">
        <h1 className="text-2xl font-bold">Bridge User Interface</h1>

        <Divider />

        <StatusSection backendStatus={backendStatus} />

        <Divider />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">Connect Controls</h2>

          <div className="flex items-center justify-center gap-2">
            <CustomButton text={"ESP"} />
            <CustomButton text={"Backend"} onClick={handleConnectToBackend} loading={backendLoading} />
          </div>
        </div>

        <Divider />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">Bridge Controls</h2>

          <div className="flex items-center justify-center gap-2">
            <CustomButton text={"Open"} />
            <CustomButton text={"Close"} />
          </div>
        </div>

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
