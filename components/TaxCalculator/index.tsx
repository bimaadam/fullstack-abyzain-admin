"use client"; // Tambahin ini!

import { useState } from "react";

export default function TaxCalculator() {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", inputValue);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Masukkan nilai pajak"
        className="border p-2 rounded mr-2"
      />
      <button type="submit" className="bg-blue-600 text-white p-2 rounded">
        Hitung Pajak
      </button>
    </form>
  );
}
