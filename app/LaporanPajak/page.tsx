// app/LaporanPajak/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import TaxReport from '@/components/TaxReport';

const LaporanPajak = () => {
  const [dataPajak, setDataPajak] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/laporanPajak');
      const data = await response.json();
      console.log(data); // Log the data to check its structure
      setDataPajak(data); // Set the data directly
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePrint = () => {
    window.print(); // Trigger the print dialog
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1>Laporan Pajak</h1>
      <button onClick={handlePrint} className="print-button">Print Report</button>
      {dataPajak && dataPajak.length > 0 ? (
        <TaxReport data={dataPajak[0]} /> // Access the first element of the array
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default LaporanPajak;