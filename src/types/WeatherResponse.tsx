
export interface WeatherResponse {
  name: string;
  weather: { id: number; main: string; description: string; icon: string }[];
  main: { temp: number; humidity: number; temp_min?: number; temp_max?: number };
  sys?: { country?: string };
}
