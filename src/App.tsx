import React from "react";
import { useCurrentStation } from "./useCurrentStation";
import { useArrivalTimes } from "./useArrivalTimes";

export const App = () => {
  const { stationName, stationId } = useCurrentStation();
  const { arrivalTimes } = useArrivalTimes(stationId);

  return (
    <>
      <h3>Current Station</h3>
      <h1>{stationName}</h1>
      {arrivalTimes.map((arrival) => {
        return (
          <div key={arrival.id}>
            Expected arrival: {arrival.expectedArrival}
          </div>
        );
      })}
    </>
  );
};
