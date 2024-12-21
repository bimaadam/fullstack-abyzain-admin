// components/TaxReport/index.tsx
import React from 'react';

interface TaxReportProps {
  data: {
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
  };
}

const TaxReport: React.FC<TaxReportProps> = ({ data }) => {
  return (
    <div className="print-container">
      <h1>{data.company.name}</h1>
      <p>NPWP: {data.company.npwp}</p>
      <p>Address: {data.company.address}</p>
      <p>Phone: {data.company.phone}</p>
      <p>Email: {data.company.email}</p>

      <h2>Tax Reports</h2>
      {data.tax_reports.map((report) => (
        <div key={report.year}>
          <h3>Year: {report.year}</h3>
          <table className="tax-report-table">
            <thead>
              <tr>
                <th>Month</th>
                <th>Income</th>
                <th>Expenses</th>
                <th>Taxable Income</th>
                <th>Tax Paid</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {report.monthly_reports.map((monthly) => (
                <tr key={monthly.month}>
                  <td>{monthly.month}</td>
                  <td>{monthly.income}</td>
                  <td>{monthly.expenses}</td>
                  <td>{monthly.taxable_income}</td>
                  <td>{monthly.tax_paid}</td>
                  <td>{monthly.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <h2>Tax Officer</h2>
      <p>Name: {data.tax_officer.name}</p>
      <p>Position: {data.tax_officer.position}</p>
      <p>Contact: {data.tax_officer.contact}</p>
      <p>Last Updated: {data.last_updated}</p>
    </div>
  );
};

export default TaxReport;