import React from "react";

const Dashboard = () => {
  const stats = [
    {
      id: 1,
      title: "Total Materi",
      value: 45,
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16h8M8 12h8m-8-4h8M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Pengguna Aktif",
      value: 120,
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5.121 18.364A4 4 0 015 15h14a4 4 0 01-.121 3.364m-1.616 1.616A3.992 3.992 0 0117 15H7a3.992 3.992 0 01-2.264 5.091M8.121 6.364A4 4 0 018 3h8a4 4 0 01-.121 3.364M6.505 8.091A4 4 0 015 9h14a4 4 0 01-1.505-1.909"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Langganan Aktif",
      value: 80,
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3-1.343-3-3m6 0c0 1.657-1.343 3-3 3m-6 8v-1a2 2 0 012-2h8a2 2 0 012 2v1m-6-4h.01"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Pendapatan",
      value: "Rp 12.000.000",
      icon: (
        <svg
          className="w-8 h-8 text-yellow-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3-1.343-3-3m6 0c0 1.657-1.343 3-3 3m-6 8v-1a2 2 0 012-2h8a2 2 0 012 2v1m-6-4h.01"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen p-8 bg-yellow-50">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-yellow-600">Dashboard</h1>
        <p className="text-gray-600">Ringkasan data dan aktivitas terkini</p>
      </header>

      {/* Statistik */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="p-4 bg-white rounded-lg shadow-lg flex items-center space-x-4"
          >
            <div className="flex-shrink-0">{stat.icon}</div>
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                {stat.title}
              </h2>
              <p className="text-2xl font-bold text-yellow-600">{stat.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Aktivitas Terkini */}
      <section>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">
          Aktivitas Terkini
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-gray-600">Belum ada aktivitas terbaru.</p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
