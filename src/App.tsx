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
    <div className="min-vh-100 d-flex justify-content-center align-items-start py-4 bg-light">
      <div className="container" style={{ maxWidth: 920 }}>
        <h1 className="text-center mb-3">🌤 Weather App</h1>
        <p className="text-muted text-center mb-4">
          Consulta condiciones climáticas en tiempo real.
          PD: No aprobé diseño grafico 🫠🫠🫠
        </p>

        <SearchBar onSearch={search} />

        {loading && <div className="alert alert-info">Cargando…</div>}
        {error && <div className="alert alert-danger">Error: {error}</div>}

        {data && (
          <div className="d-flex justify-content-center mt-3">
            <WeatherCard weather={data} />
          </div>
        )}

        <HistoryList
          history={history}
          onSelect={handleSelectHistory}
          onClear={clearHistory}
        />
      </div>
    </div>
  );
}
