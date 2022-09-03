import React from "react";
import { ArrivalCard } from "./ArrivalCard";
import { useCurrentStation } from "./useCurrentStation";
import { useArrivalTimes } from "./useArrivalTimes";

export const App = () => {
  const { stationName, stationId } = useCurrentStation();
  const { arrivalTimes } = useArrivalTimes(stationId);

  return (
    <>
      <h3>Current Station</h3>
      <h1>{stationName}</h1>
      {arrivalTimes.map(({ id, ...other }) => {
        return <ArrivalCard key={id} {...other} />;
      })}
    </>
  );
};
