import CustomButton from "./components/CustomButton";
import Divider from "./components/Divider";
import StatusSection from "./components/StatusSection";
import CarTrafficSection from "./components/CarTrafficSection";
import BoatTrafficSection from "./components/BoatTrafficSection";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-xl bg-gray-200 flex flex-col justify-center items-center space-y-4 rounded-lg p-4">
        <h1 className="text-2xl font-bold">Bridge User Interface</h1>

        <Divider />

        <StatusSection />

        <Divider />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">Connect Controls</h2>

          <div className="flex items-center justify-center gap-2">
            <CustomButton text={"ESP"} />
            <CustomButton text={"Backend"} />
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
