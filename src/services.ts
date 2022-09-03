export interface IArrivalTimes {
  id: string;
  lineName: string;
  timeToStation: number;
  expectedArrival: string;
  direction: string;
  platformNumber: string;
}

export const formatArrivalData = (arrivals: any): IArrivalTimes[] => {
  if (Array.isArray(arrivals)) {
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
  }

  return [];
};
