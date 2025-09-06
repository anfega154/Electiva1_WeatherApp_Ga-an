import React from "react";

import type { WeatherResponse } from "../types/WeatherResponse";

interface Props {
    weatherProps: WeatherResponse;
}

export default function WeatherCard({ weatherProps }: Props) {
    const weather = weatherProps.weather[0];
    const temp = Math.round(weatherProps.main.temp);

    const iconUrl = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    return (
        <div style={{
            borderRadius: 12, padding: 16, boxShadow: "0 6px 18px rgba(0,0,0,0.08)", maxWidth: 420
        }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <img src={iconUrl} alt={weather.description} width={64} height={64} />
                <div>
                    <h2 style={{ margin: 0 }}>{weatherProps.name}{weatherProps.sys?.country ? `, ${weatherProps.sys.country}` : ""}</h2>
                    <p style={{ margin: 0, textTransform: "capitalize" }}>{weather.description}</p>
                </div>
            </div>

            <div style={{ display: "flex", gap: 24, marginTop: 12 }}>
                <div>
                    <strong>{temp}°C</strong>
                    <div>Temperatura</div>
                </div>
                <div>
                    <strong>{weatherProps.main.humidity}%</strong>
                    <div>Humedad</div>
                </div>
            </div>
        </div>
    );
}
