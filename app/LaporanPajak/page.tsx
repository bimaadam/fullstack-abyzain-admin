'use client'
import React, { useEffect, useState } from 'react';
import TaxReport from '@/components/TaxReport';

interface TaxData {
  company: {
    name: string;
    npwp: string;
    address: string;
    phone: string;
    email: string;
  };
  tax_reports: Array<{
    year: number;
    monthly_reports: Array<{
      month: string;
      income: number;
      expenses: number;
      taxable_income: number;
      tax_paid: number;
      status: string;
    }>;
  }>;
  tax_officer: {
    name: string;
    position: string;
    contact: string;
  };
  last_updated: string;
}

const LaporanPajak = () => {
  // Define loading as a boolean
  const [loading, setLoading] = useState<boolean>(true);
  const [dataPajak, setDataPajak] = useState<TaxData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/laporanPajak');
      const data = await response.json();
      setDataPajak(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  const handlePrint = () => {
    window.print();
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