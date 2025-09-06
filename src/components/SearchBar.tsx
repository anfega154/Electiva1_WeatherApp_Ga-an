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
        <form onSubmit={submit} style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            <input
                aria-label="Ciudad"
                placeholder="Escribe una ciudad (ej: Bogotá)"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ flex: 1, padding: 8, borderRadius: 6, border: "1px solid #ccc" }}
            />
            <button type="submit" style={{ padding: "8px 12px", borderRadius: 6 }}>
                Buscar
            </button>
        </form>
    );
}
