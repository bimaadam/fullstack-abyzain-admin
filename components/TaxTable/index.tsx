export default function TaxTable() {
    const data = [
      { id: 1, jenis: "PPh 21", tanggal: "2024-12-01", status: "Lunas" },
      { id: 2, jenis: "PPN", tanggal: "2024-12-05", status: "Pending" },
    ];
  
    return (
      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Histori Pajak</h3>
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left p-2">Jenis Pajak</th>
              <th className="text-left p-2">Tanggal</th>
              <th className="text-left p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td className="p-2">{item.jenis}</td>
                <td className="p-2">{item.tanggal}</td>
                <td className="p-2">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  