import React from "react";
import { ArrivalCard } from "./ArrivalCard";
import { ArrivalsContainer, ColumnContainer } from "./components";
import { IArrivalTimes } from "./services";

interface IProps {
  arrivals: IArrivalTimes[];
  platformNumber: string;
}

export const PlatformColumn = ({ platformNumber, arrivals }: IProps) => {
  return (
    <ColumnContainer>
      <h3>Platform {platformNumber}</h3>
      <ArrivalsContainer>
        {arrivals.map((arrival) => (
          <ArrivalCard key={arrival.id} {...arrival} />
        ))}
      </ArrivalsContainer>
    </ColumnContainer>
  );
};
