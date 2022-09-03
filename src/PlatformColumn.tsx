import React from "react";
import { ArrivalCard } from "./ArrivalCard";
import { IArrivalTimes } from "./services";

interface IProps {
  arrivals: IArrivalTimes[];
  platformNumber: string;
}

export const PlatformColumn = ({ platformNumber, arrivals }: IProps) => {
  return (
    <div>
      <h5>Platform {platformNumber}</h5>
      {arrivals.map((arrival) => (
        <ArrivalCard key={arrival.id} {...arrival} />
      ))}
    </div>
  );
};
