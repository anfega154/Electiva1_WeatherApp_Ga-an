import React from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import HistoryList from "./components/HistoryList";
import { useWeather } from "./hooks/useWeather";

export default function App() {
  const { data, loading, error, search, history, clearHistory } = useWeather();

  function handleSelectHistory(item: any) {
    search(item.name);
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "center",
      padding: 24,
      background: "linear-gradient(180deg,#f0f7ff,#ffffff)"
    }}>
      <div style={{ width: "100%", maxWidth: 920 }}>
        <h1>Weather App</h1>
        <p>Consulta condiciones climáticas en tiempo real. Interfaz en español.</p>

        <SearchBar onSearch={search} />

        {loading && <div>Cargando…</div>}
        {error && <div style={{ color: "red" }}>Error: {error}</div>}

        {data && <div style={{ marginTop: 12 }}><WeatherCard weather={data} /></div>}

        <HistoryList history={history} onSelect={handleSelectHistory} onClear={clearHistory} />
      </div>
    </div>
  );
}
