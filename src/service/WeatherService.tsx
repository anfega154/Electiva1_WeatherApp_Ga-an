import type { WeatherResponse } from "../types/WeatherResponse"

const BASE = "https://api.openweathermap.org/data/2.5/weather";
const KEY = import.meta.env.VITE_OPENWEATHER_KEY;

export async function fetchWeatherByCity(city: string, lang = "es"): Promise<WeatherResponse> {
  if (!KEY) throw new Error("No se encontró la API key. Define VITE_OPENWEATHER_KEY en .env");
  const q = encodeURIComponent(city);
  const url = `${BASE}?q=${q}&appid=${KEY}&units=metric&lang=${lang}`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error API: ${res.status} ${text}`);
  }
  const data = await res.json();
  return data as WeatherResponse;
}
