export interface IArrivalTimes {
  id: string;
  lineName: string;
  timeToStation: number;
  expectedArrival: string;
  direction: string;
  platformNumber: string;
}

// Map the data from the api to a consistent format the app can expect
const mapArrivalData = (arrivals: any[]): IArrivalTimes[] => {
  return arrivals.map((arrival) => {
    const platformNumberRegex = /(?<=Platform )(\d*)/gm;
    const directionRegex = /(.*bound)/gm;

    const platformNumber = arrival?.platformName.match(platformNumberRegex);
    const direction = arrival?.platformName.match(directionRegex);

    return {
      id: arrival?.id || "",
      lineName: arrival?.lineName || "",
      timeToStation: arrival?.timeToStation || 0,
      expectedArrival: arrival?.expectedArrival || "",
      platformNumber: platformNumber || "",
      direction: direction || "",
    };
  });
};

// Group the arrivals by platform number
const groupArrivalsByPlatform = (arrivals: IArrivalTimes[]) => {
  return arrivals.reduce<Record<string, IArrivalTimes[]>>((acc, arrival) => {
    const { platformNumber } = arrival;
    // If no platform number, then place it into the other group
    if (!platformNumber) return { ...acc, other: [...acc.other, arrival] };

    // If the platform has already been added, add the arrival to the platform
    if (acc[platformNumber])
      return { ...acc, [platformNumber]: [...acc[platformNumber], arrival] };

    // The platform has not been indexed yet so create a new group indexed by platform number
    return { ...acc, [platformNumber]: [arrival] };
  }, {});
};

// Format the TFL api arrivals data to be grouped by platform and also sorted by arrival time
export const formatArrivalData = (
  arrivals: any
): Record<string, IArrivalTimes[]> => {
  if (Array.isArray(arrivals)) {
    const formattedArrivals = mapArrivalData(arrivals);
    const groupByPlatform = groupArrivalsByPlatform(formattedArrivals);

    // Sort the arrivals by the timeToStation as I assumed expected arrival can be delayed/not accurate
    Object.keys(groupByPlatform).forEach((platformNumber) => {
      groupByPlatform[platformNumber].sort((a, b) => {
        return a.timeToStation - b.timeToStation;
      });
    });

    return groupByPlatform;
  }

  return {};
};
