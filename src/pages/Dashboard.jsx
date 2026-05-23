import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";

import {
  FaUsers,
  FaHandshake,
  FaFire,
  FaChartLine,
} from "react-icons/fa";

import { useEffect, useState } from "react";
import { getStats } from "../api/dashboardApi";
import toast from "react-hot-toast";

function Dashboard() {
  const [stats, setStats] =
    useState({
      totalLeads: 0,
      wonDeals: 0,
      negotiations: 0,
      highPriority: 0,
    });

  const revenueData = [
    { month: "Jan", revenue: 4000 },
    { month: "Feb", revenue: 6500 },
    { month: "Mar", revenue: 5000 },
    { month: "Apr", revenue: 9000 },
    { month: "May", revenue: 12000 },
    { month: "Jun", revenue: 15000 },
  ];

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await getStats();

      setStats(res.data);
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to load dashboard"
      );
    }
  };

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-bold tracking-tight">
            Welcome Back 👋
          </h1>

          <p className="text-slate-400 mt-2 text-lg">
            Manage your manufacturing
            sales pipeline smarter.
          </p>
        </div>

        <div className="bg-[#111827] border border-slate-800 rounded-2xl px-5 py-4">
          <p className="text-slate-400 text-sm">
            Today's Overview
          </p>

          <h3 className="font-semibold text-lg mt-1">
            Performance Insights
          </h3>
        </div>
      </div>

      {/* Stats */}
      <section className="grid grid-cols-4 gap-6 mt-10">

        {/* Total Leads */}
        <div className="bg-[#111827] rounded-[30px] p-6 border border-slate-800 hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <p className="text-slate-400 text-sm">
              Total Leads
            </p>

            <FaUsers className="text-cyan-400 text-2xl" />
          </div>

          <h2 className="text-4xl font-bold mt-4">
            {stats.totalLeads}
          </h2>
        </div>

        {/* Won Deals */}
        <div className="bg-[#111827] rounded-[30px] p-6 border border-slate-800 hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <p className="text-slate-400 text-sm">
              Won Deals
            </p>

            <FaHandshake className="text-green-400 text-2xl" />
          </div>

          <h2 className="text-4xl font-bold mt-4">
            {stats.wonDeals}
          </h2>
        </div>

        {/* Negotiations */}
        <div className="bg-[#111827] rounded-[30px] p-6 border border-slate-800 hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <p className="text-slate-400 text-sm">
              Negotiations
            </p>

            <FaChartLine className="text-yellow-400 text-2xl" />
          </div>

          <h2 className="text-4xl font-bold mt-4">
            {stats.negotiations}
          </h2>
        </div>

        {/* High Priority */}
        <div className="bg-[#111827] rounded-[30px] p-6 border border-slate-800 hover:-translate-y-1 transition-all">
          <div className="flex justify-between items-center">
            <p className="text-slate-400 text-sm">
              High Priority
            </p>

            <FaFire className="text-red-400 text-2xl" />
          </div>

          <h2 className="text-4xl font-bold mt-4">
            {stats.highPriority}
          </h2>
        </div>

      </section>

      {/* Bottom Grid */}
      <section className="grid grid-cols-3 gap-6 mt-8">

        {/* Revenue Chart */}
        <div className="col-span-2 bg-[#111827] border border-slate-800 rounded-[35px] p-8 h-[420px]">

          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-semibold">
                Revenue Analytics
              </h2>

              <p className="text-slate-400 mt-1">
                Monthly manufacturing
                sales growth
              </p>
            </div>

            <div className="bg-cyan-500/20 text-cyan-400 px-4 py-2 rounded-xl">
              +24%
            </div>
          </div>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >
            <AreaChart
              data={revenueData}
            >
              <defs>
                <linearGradient
                  id="colorRevenue"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#06B6D4"
                    stopOpacity={0.8}
                  />

                  <stop
                    offset="95%"
                    stopColor="#06B6D4"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <XAxis
                dataKey="month"
                stroke="#94A3B8"
              />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#06B6D4"
                strokeWidth={4}
                fillOpacity={1}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Hot Leads */}
        <div className="bg-[#111827] border border-slate-800 rounded-[35px] p-8">

          <h2 className="text-2xl font-semibold mb-6">
            CRM Insights 🔥
          </h2>

          <div className="space-y-4">

            <div className="bg-slate-900 rounded-2xl p-4">
              <h3 className="font-semibold">
                Total Leads
              </h3>

              <p className="text-cyan-400 text-sm mt-1">
                {stats.totalLeads} active
                leads
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-4">
              <h3 className="font-semibold">
                Won Deals
              </h3>

              <p className="text-green-400 text-sm mt-1">
                {stats.wonDeals}
                successful deals
              </p>
            </div>

            <div className="bg-slate-900 rounded-2xl p-4">
              <h3 className="font-semibold">
                High Priority
              </h3>

              <p className="text-red-400 text-sm mt-1">
                {
                  stats.highPriority
                } urgent leads
              </p>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}

export default Dashboard;