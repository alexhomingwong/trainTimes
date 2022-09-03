import { useState } from "react";
import { useQuery } from "react-query";
import { stopPointApi } from "./api";

export const useArrivalTimes = (stationId?: string) => {
  // Need to type the response of the api
  const [arrivalTimes, setArrivalTimes] = useState<any[]>([]);

  // Fetch the arrival times based on stations id
  useQuery(stationId || "stationId", async () => {
    if (!stationId) return;
    const res = await fetch(`${stopPointApi}/${stationId}/Arrivals?mode=tube`);
    const data = await res.json();
    setArrivalTimes(data);
  });

  return { arrivalTimes };
};
