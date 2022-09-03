import { useState } from "react";
import { useQuery } from "react-query";
import { stopPointApi } from "./api";

export interface IArrivalTimes {
  id: string;
  lineName: string;
  timeToStation: number;
  expectedArrival: string;
  platformName: string;
}

export const useArrivalTimes = (stationId?: string) => {
  // Need to type the response of the api
  const [arrivalTimes, setArrivalTimes] = useState<IArrivalTimes[]>([]);

  // Fetch the arrival times based on stations id
  useQuery(stationId || "stationId", async () => {
    if (!stationId) return;
    const res = await fetch(`${stopPointApi}/${stationId}/Arrivals?mode=tube`);
    const data = await res.json();

    // Can't always be sure what the api will return, lets at least check it will be an array
    if (Array.isArray(data)) {
      const formattedData = data.map((arrival) => ({
        id: arrival?.id || "",
        lineName: arrival?.lineName || "",
        timeToStation: arrival?.timeToStation || 0,
        expectedArrival: arrival?.expectedArrival || "",
        platformName: arrival?.platformName || "",
      }));

      setArrivalTimes(formattedData);
    }
  });

  return { arrivalTimes };
};
