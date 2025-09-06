import type { WeatherResponse } from "../types/WeatherResponse"


async function geocodeCity(city: string): Promise<{ lat: number; lon: number }> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("No se pudo obtener coordenadas de la ciudad");
  const data = await res.json();
  if (!data || data.length === 0) throw new Error("Ciudad no encontrada");
  return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
}

function mapWeatherCodeToDescription(code: number): string {
  const codes: Record<number, string> = {
    0: "Despejado",
    1: "Principalmente despejado",
    2: "Parcialmente nublado",
    3: "Nublado",
    45: "Niebla",
    48: "Niebla con escarcha",
    51: "Llovizna ligera",
    53: "Llovizna moderada",
    55: "Llovizna densa",
    61: "Lluvia ligera",
    63: "Lluvia moderada",
    65: "Lluvia fuerte",
    71: "Nieve ligera",
    73: "Nieve moderada",
    75: "Nieve fuerte",
    95: "Tormenta eléctrica",
    96: "Tormenta eléctrica con granizo ligero",
    99: "Tormenta eléctrica con granizo fuerte",
  };
  return codes[code] ?? "Clima desconocido";
}

export async function fetchWeatherByCity(city: string): Promise<WeatherResponse> {

  const { lat, lon } = await geocodeCity(city);

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relativehumidity_2m`;
  const res = await fetch(url);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Error API: ${res.status} ${text}`);
  }
  const data = await res.json();

  const current = data.current_weather;
  const humidity = data.hourly?.relativehumidity_2m?.[0] ?? 0;
  return {
    city,
    temperature: current.temperature,
    humidity,
    description: mapWeatherCodeToDescription(current.weathercode),
  };
}
