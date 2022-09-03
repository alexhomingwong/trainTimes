import { DateTime, Duration } from "luxon";
import React from "react";
import styled from "styled-components";
import { IArrivalTimes } from "./services";

const Card = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

type Props = IArrivalTimes;

export const ArrivalCard = ({
  lineName,
  timeToStation,
  expectedArrival,
  direction,
}: Props) => {
  const expectedArrivalAs24hr = DateTime.fromISO(
    expectedArrival
  ).toLocaleString(DateTime.TIME_24_SIMPLE);

  const timeToStationAsMinutes = Duration.fromObject({
    seconds: timeToStation,
  }).toFormat("m");

  return (
    <Card>
      <span>{expectedArrivalAs24hr}</span>
      <span>
        {timeToStationAsMinutes === "0"
          ? "Soon"
          : `${timeToStationAsMinutes} mins`}
      </span>
      <span>{lineName}</span>
      <span>{direction}</span>
    </Card>
  );
};
