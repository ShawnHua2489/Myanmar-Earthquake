import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-slate-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Myanmar Earthquake Relief – Food For All
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto text-center">
            In the wake of the devastating earthquake in Myanmar, our team is working tirelessly to provide essential food supplies to affected communities. Every meal delivered brings hope and sustenance to those in need.
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-48 bg-slate-200 flex items-center justify-center">
                  <span className="text-slate-400">Image {item}</span>
                </div>
                <div className="p-4">
                  <p className="text-sm text-slate-600">Volunteers distributing food in affected area {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Meals Distributed Today */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Meals Today</h3>
              <p className="text-3xl font-bold text-blue-600">2,000</p>
            </div>

            {/* Total Meals Served */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Total Meals</h3>
              <p className="text-3xl font-bold text-blue-600">45,000</p>
            </div>

            {/* Cost per Meal */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Cost per Meal</h3>
              <p className="text-3xl font-bold text-blue-600">$0.67</p>
            </div>

            {/* Volunteers */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Volunteers</h3>
              <p className="text-3xl font-bold text-blue-600">125</p>
            </div>

            {/* Weather */}
            <div className="bg-slate-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Weather</h3>
              <p className="text-xl font-bold text-blue-600">Stormy</p>
              <p className="text-slate-600">28°C</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Support our volunteers
          </h2>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300">
            Donate Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;
