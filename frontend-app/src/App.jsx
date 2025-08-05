import CustomButton from "./components/CustomButton";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="w-full max-w-xl bg-gray-200 flex flex-col justify-center items-center space-y-4 rounded-lg p-4">
        <h1 className="text-2xl font-bold">Bridge User Interface</h1>

        <div className="w-full bg-gray-300 h-[0.5px] mx-5" />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-1">Status</h2>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-md font-medium">Bridge Status:</h2>
            <button className="bg-red-600 w-3 h-3 mt-1 rounded-full" />
            <h2 className="text-md font-medium">Backend Status:</h2>
            <button className="bg-red-600 w-3 h-3 mt-1 rounded-full" />
            <h2 className="text-md font-medium">ESP Status:</h2>
            <button className="bg-red-600 w-3 h-3 mt-1 rounded-full" />
          </div>
        </div>

        <div className="w-full bg-gray-300 h-[0.5px] mx-5" />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">Connect Controls</h2>

          <div className="flex items-center justify-center gap-2">
            <CustomButton text={"ESP"} />
            <CustomButton text={"Backend"} />
          </div>
        </div>

        <div className="w-full bg-gray-300 h-[0.5px] mx-5" />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">Bridge Controls</h2>

          <div className="flex items-center justify-center gap-2">
            <CustomButton text={"Open"} />
            <CustomButton text={"Close"} />
          </div>
        </div>

        <div className="w-full bg-gray-300 h-[0.5px] mx-5" />

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-2">Traffic Controls</h2>

          <div className="flex items-center justify-center gap-2">
            <CustomButton text={"Green"} />
            <CustomButton text={"Yellow"} />
            <CustomButton text={"Red"} />
          </div>
        </div>

        <div className="w-full bg-gray-300 h-[0.5px] mx-5" />
      </div>
    </div>
  );
}

export default App;
