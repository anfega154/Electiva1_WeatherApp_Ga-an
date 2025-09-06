import React, { useState } from "react";

interface Props {
  onSearch: (city: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [city, setCity] = useState("");

  function submit(e?: React.FormEvent) {
    e?.preventDefault();
    if (city.trim().length === 0) return;
    onSearch(city.trim());
    setCity("");
  }

  return (
    <form onSubmit={submit} className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        aria-label="Ciudad"
        placeholder="Escribe una ciudad (ej: Bogotá)"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary">
        Buscar
      </button>
    </form>
  );
}
