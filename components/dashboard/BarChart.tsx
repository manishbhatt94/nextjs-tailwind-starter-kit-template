import React from "react";
import { Bar } from "react-chartjs-2";

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

export default function BarChart() {
  return (
    <>
      <div className="w-full xl:w-4/12 px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full max-w-full flex-grow flex-1">
                <h6 className="uppercase text-gray-500 mb-1 text-xs font-semibold">
                  Performance
                </h6>
                <h2 className="text-gray-800 text-xl font-semibold">
                  Total orders
                </h2>
              </div>
            </div>
          </div>
          <div className="p-4 flex-auto">
            <div>
              <h2>Bar Example (custom size)</h2>
              {/* Chart */}
              <Bar
                data={data}
                width={100}
                height={50}
                options={{
                  maintainAspectRatio: true,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
