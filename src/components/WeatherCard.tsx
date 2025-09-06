import type { WeatherResponse } from "../types/WeatherResponse";

interface Props {
  weather: WeatherResponse;
}

export default function WeatherCard({ weather }: Props) {
  return (
    <div className="card shadow mb-3" style={{ maxWidth: 420 }}>
      <div className="card-body">
        <h5 className="card-title">{weather.city}</h5>
        <p className="card-text text-capitalize text-muted">
          {weather.description}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          🌡 <strong>{Math.round(weather.temperature)}°C</strong> — Temperatura
        </li>
        <li className="list-group-item">
          💧 <strong>{weather.humidity}%</strong> — Humedad
        </li>
        <li className="list-group-item">
          🪴 <strong>{weather.description}</strong> — Descripción
        </li>
      </ul>
    </div>
  );
}
