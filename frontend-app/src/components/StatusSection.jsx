/**
 * Need to implement
 *
 * General guide:
 *
 * 1. Need functions to get the state of the bridge,
 * backend and ESP.
 * 2. Based on this state, the colour should correspond
 * to that state
 *      - For example: red for disconnected, green for connected, blue for connecting
 *      - Should be done using a useState()
 */

import { useEffect, useState } from "react";

function StatusSection() {
  // Example useState for implementation
  const [bridgeStatus, setBridgeStatus] = useState(false);

  /**
   * Need to send a request for the status from backend, respond accordingly
   */
  useEffect(() => {
    const getBridgeStatus = () => {
      const something = false;
      if (something) {
        setBridgeStatus(true);
      }
    };

    getBridgeStatus();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="text-lg font-bold mb-1">Status</h2>
      <div className="flex items-center justify-center gap-2">
        <h2 className="text-md font-medium">Bridge Status:</h2>
        <button
          className={`w-3 h-3 mt-1 rounded-full ${bridgeStatus ? "bg-green-600" : "bg-red-600"}`}
        />
        <h2 className="text-md font-medium">Backend Status:</h2>
        <button className="bg-red-600 w-3 h-3 mt-1 rounded-full" />
        <h2 className="text-md font-medium">ESP Status:</h2>
        <button className="bg-red-600 w-3 h-3 mt-1 rounded-full" />
      </div>
    </section>
  );
}

export default StatusSection;
