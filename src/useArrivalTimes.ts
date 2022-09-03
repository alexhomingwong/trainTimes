import { useState } from "react";
import { useQuery } from "react-query";
import { stopPointApi } from "./api";
import { formatArrivalData, IArrivalTimes } from "./services";

export const useArrivalTimes = (stationId?: string) => {
  // Need to type the response of the api
  const [arrivalTimes, setArrivalTimes] = useState<IArrivalTimes[]>([]);

  // Fetch the arrival times based on stations id
  useQuery(stationId || "stationId", async () => {
    if (!stationId) return;
    const res = await fetch(`${stopPointApi}/${stationId}/Arrivals?mode=tube`);
    const data = await res.json();

    // Can't always be sure what the api will return, lets at least check it will be an array
    const formattedData = formatArrivalData(data);
    setArrivalTimes(formattedData);
  });

  return { arrivalTimes };
};
