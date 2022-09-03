import React from "react";
import { PlatformColumn } from "./PlatformColumn";
import { useCurrentStation } from "./useCurrentStation";
import { useArrivalTimes } from "./useArrivalTimes";
import { ColumnWrapper, PageContainer } from "./components";

export const App = () => {
  const { stationName, stationId } = useCurrentStation();
  const { arrivalTimes } = useArrivalTimes(stationId);

  return (
    <PageContainer>
      <h3>Trains arriving at</h3>
      <h1>{stationName} Station</h1>
      <ColumnWrapper>
        {Object.entries(arrivalTimes).map(([platformNumber, arrivals]) => (
          <PlatformColumn
            key={`platform${platformNumber}`}
            arrivals={arrivals}
            platformNumber={platformNumber}
          />
        ))}
      </ColumnWrapper>
    </PageContainer>
  );
};
