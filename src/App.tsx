import React from "react";
import { PlatformColumn } from "./PlatformColumn";
import { useCurrentStation } from "./useCurrentStation";
import { useArrivalTimes } from "./useArrivalTimes";
import { ColumnWrapper } from "./components";

export const App = () => {
  const { stationName, stationId } = useCurrentStation();
  const { arrivalTimes } = useArrivalTimes(stationId);

  return (
    <>
      <h3>Current Station</h3>
      <h1>{stationName}</h1>
      <ColumnWrapper>
        {Object.entries(arrivalTimes).map(([platformNumber, arrivals]) => (
          <PlatformColumn
            key={`platform${platformNumber}`}
            arrivals={arrivals}
            platformNumber={platformNumber}
          />
        ))}
      </ColumnWrapper>
    </>
  );
};
