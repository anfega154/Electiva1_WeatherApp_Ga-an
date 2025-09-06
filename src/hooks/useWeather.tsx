import { useState } from "react";
import { fetchWeatherByCity } from "../service/WeatherService";
import type { WeatherResponse } from "../types/WeatherResponse";

export function useWeather() {
    const [data, setData] = useState<WeatherResponse | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [history, setHistory] = useState<WeatherResponse[]>(() => {
        try {
            const raw = localStorage.getItem("weather_history");
            return raw ? JSON.parse(raw) : [];
        } catch {
            return [];
        }
    });

    async function search(city: string) {
        setLoading(true);
        setError(null);
        try {
            const res = await fetchWeatherByCity(city);
            setData(res);
            const newHistory = [res, ...history].slice(0, 10);
            setHistory(newHistory);
            localStorage.setItem("weather_history", JSON.stringify(newHistory));
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Error desconocido");
            }
            setData(null);
        }
    }

    function clearHistory() {
        setHistory([]);
        localStorage.removeItem("weather_history");
    }

    return { data, loading, error, search, history, clearHistory };
}
