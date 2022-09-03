import { DateTime, Duration } from "luxon";
import React from "react";
import { Card } from "./components";
import { IArrivalTimes } from "./services";

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
      <div className="arrivalInfo">
        <span>{expectedArrivalAs24hr}</span>
        <span className="trainLine">
          {lineName} ({direction})
        </span>
      </div>
      <span>
        {timeToStationAsMinutes === "0"
          ? "Now"
          : `${timeToStationAsMinutes} mins`}
      </span>
    </Card>
  );
};
