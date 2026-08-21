export type DestinationMedia = {
  type: "image" | "video";
  src: string;
  fallback?: string;
  alt: string;
  position?: string;
  opacity?: number;
};

export type Destination = {
  id: "departure" | "shanghai" | "mountains" | "coast" | "destination";
  name: string;
  country?: string;
  coordinates?: string;
  environment: "airport" | "city" | "mountain" | "coast" | "night";
  section: string;
  media?: DestinationMedia;
};

export const destinations: Destination[] = [
  { id: "departure", name: "Departure", country: "Canada", coordinates: "43.6777° N, 79.6248° W", environment: "airport", section: "Introduction" },
  { id: "shanghai", name: "Shanghai", country: "China", coordinates: "31.2304° N, 121.4737° E", environment: "city", section: "Experience" },
  { id: "mountains", name: "Mountains", country: "Field route", coordinates: "49.2827° N, 123.1207° W", environment: "mountain", section: "Selected work" },
  { id: "coast", name: "Coast", country: "Pacific", coordinates: "48.4284° N, 123.3656° W", environment: "coast", section: "About" },
  { id: "destination", name: "Destination", coordinates: "Where to next?", environment: "night", section: "Contact" },
];
