import React from "react";

import type { WeatherResponse } from "../types/WeatherResponse";

interface Props {
  history: WeatherResponse[];
  onSelect: (item: WeatherResponse) => void;
  onClear: () => void;
}

export default function HistoryList({ history, onSelect, onClear }: Props) {
  if (history.length === 0) return null;
  return (
    <div style={{ marginTop: 18 }}>
      <h3>Historial</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {history.map((history, index) => (
          <button key={index} onClick={() => onSelect(history)} style={{ textAlign: "left", padding: 8 }}>
            {history.city} — {history.description} — {Math.round(history.temperature)}°C
          </button>
        ))}
      </div>
      <button onClick={onClear} style={{ marginTop: 8 }}>Limpiar historial</button>
    </div>
  );
}
