import { useState } from "react";
import { useQuery } from "react-query";
import { stopPointApi } from "./api";

export const useCurrentStation = () => {
  // This could be hardcoded but want the ability to have this change to any station based on user input
  const [stationName, _setStationName] = useState<string>(
    "Great Portland Street"
  );
  const [stationId, setStationId] = useState<string>("");

  // Fetch the id for Great Portland Street - once again this can be hardcoded but want to be flexible for future use
  useQuery(stationName, async () => {
    const res = await fetch(`${stopPointApi}/Search/${stationName}`);
    const data = await res.json();
    if (data.total === 1) {
      return setStationId(data.matches[0].id);
    }
  });

  return { stationName, stationId };
};
