import React from "react";
import styled from "styled-components";
import { IArrivalTimes } from "./services";

const Card = styled.article`
  display: flex;
  justify-content: space-between;
`;

type Props = IArrivalTimes;

export const ArrivalCard = ({
  lineName,
  timeToStation,
  expectedArrival,
  platformNumber,
  direction,
}: Props) => {
  return (
    <Card>
      <span>Expected Arrival: {expectedArrival}</span>
      <span>{timeToStation} seconds</span>
      <span>{lineName}</span>
      <span>Platform {platformNumber}</span>
      <span>Direction: {direction}</span>
    </Card>
  );
};
