import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  return (
    <div className='flex flex-col md:flex-row'>
      {/* Sidebar dengan lebar tetap */}
      <div className='w-full md:w-auto min-w-64'>
        <Sidebar />
      </div>

      {/* Konten utama */}
      <div className='flex-1 bg-slate-500 min-h-screen p-4'>
        <div className="flex items-center mb-4 h-8 me-3">
        </div>
        <h1 className='text-white text-xl mb-4 '>Dashboard</h1>
        <div className='p-4 bg-white rounded shadow'>
          <p>Coming Soon Masih Dalam Pengembangan Oleh Bima Adam</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;