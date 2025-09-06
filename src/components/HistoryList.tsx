import type { WeatherResponse } from "../types/WeatherResponse";

interface Props {
  history: WeatherResponse[];
  onSelect: (item: WeatherResponse) => void;
  onClear: () => void;
}

export default function HistoryList({ history, onSelect, onClear }: Props) {
  if (history.length === 0) return null;
  return (
    <div className="mt-4">
      <h3 className="mb-3">Historial</h3>
      <div className="list-group">
        {history.map((item, index) => (
          <button
            key={index}
            onClick={() => onSelect(item)}
            className="list-group-item list-group-item-action"
          >
            {item.city} — {item.description} —{" "}
            {Math.round(item.temperature)}°C
          </button>
        ))}
      </div>
      <button
        onClick={onClear}
        className="btn btn-outline-danger btn-sm mt-3"
      >
        Limpiar historial
      </button>
    </div>
  );
}
