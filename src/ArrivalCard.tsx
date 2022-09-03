import React from "react";
import styled from "styled-components";

const Card = styled.article`
  display: flex;
  justify-content: space-between;
`;

interface IProps {
  lineName: string;
  timeToStation: number;
  expectedArrival: string;
  platformName: string;
}

export const ArrivalCard = ({
  lineName,
  timeToStation,
  expectedArrival,
  platformName,
}: IProps) => {
  return (
    <Card>
      <span>Expected Arrival: {expectedArrival}</span>
      <span>{timeToStation} seconds</span>
      <span>{lineName}</span>
      <span>{platformName}</span>
    </Card>
  );
};
