type TaxOverviewProps = {
    title: string;
    amount: string;
  };
  
  export default function TaxOverview({ title, amount }: TaxOverviewProps) {
    return (
      <div className="p-4 bg-white shadow rounded">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-xl text-blue-600">{amount}</p>
      </div>
    );
  }
  