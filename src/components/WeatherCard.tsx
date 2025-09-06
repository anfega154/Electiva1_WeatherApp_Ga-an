import type { WeatherResponse } from "../types/WeatherResponse";

interface Props {
  weather: WeatherResponse;
}

export default function WeatherCard({ weather }: Props) {
  return (
    <div className="card shadow-sm mb-3" style={{ maxWidth: 420 }}>
      <div className="card-body">
        <h5 className="card-title mb-1">{weather.city}</h5>
        <p className="card-text text-capitalize mb-2">{weather.description}</p>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <strong>{Math.round(weather.temperature)}°C</strong> — Temperatura
          </li>
          <li className="list-group-item">
            <strong>{weather.humidity}%</strong> — Humedad
          </li>
        </ul>
      </div>
    </div>
  );
}
