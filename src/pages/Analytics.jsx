import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";

import { useEffect, useState } from "react";

import {
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaFire,
} from "react-icons/fa";

import { getAnalytics } from "../api/analyticsApi";

function Analytics() {
  const [analytics, setAnalytics] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  // FETCH ANALYTICS
  const fetchAnalytics =
    async () => {
      try {
        const res =
          await getAnalytics();

        setAnalytics(
          res.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

  // USE EFFECT
  useEffect(() => {
    fetchAnalytics();
  }, []);

  // COLORS
  const COLORS = [
    "#06B6D4",
    "#3B82F6",
    "#8B5CF6",
    "#EF4444",
  ];

  // LOADING
  if (loading) {
    return (
      <div className="text-white text-2xl">
        Loading Analytics...
      </div>
    );
  }

  if (!analytics) {
    return (
      <div className="text-red-400 text-2xl">
        Failed to load analytics
      </div>
    );
  }

  return (
    <div>
      {/* HEADER */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Manufacturing business insights
        </p>
      </div>

      {/* KPI CARDS */}
      <div className="grid grid-cols-4 gap-6 mb-8">

        {/* TOTAL LEADS */}
        <div className="bg-[#111827] p-6 rounded-[30px] border border-slate-800 hover:border-cyan-500 transition-all">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-slate-400 text-sm">
                Total Leads
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {analytics.totalLeads}
              </h2>
            </div>

            <div className="bg-cyan-500/20 p-4 rounded-2xl">
              <FaUsers className="text-cyan-400 text-2xl" />
            </div>

          </div>
        </div>

        {/* CONVERSION */}
        <div className="bg-[#111827] p-6 rounded-[30px] border border-slate-800 hover:border-green-500 transition-all">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-slate-400 text-sm">
                Conversion Rate
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {
                  analytics.conversionRate
                }
                %
              </h2>
            </div>

            <div className="bg-green-500/20 p-4 rounded-2xl">
              <FaBullseye className="text-green-400 text-2xl" />
            </div>

          </div>
        </div>

        {/* HIGH PRIORITY */}
        <div className="bg-[#111827] p-6 rounded-[30px] border border-slate-800 hover:border-red-500 transition-all">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-slate-400 text-sm">
                High Priority
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {
                  analytics
                    ?.priorityData?.[0]
                    ?.value || 0
                }
              </h2>
            </div>

            <div className="bg-red-500/20 p-4 rounded-2xl">
              <FaFire className="text-red-400 text-2xl" />
            </div>

          </div>
        </div>

        {/* MEDIUM PRIORITY */}
        <div className="bg-[#111827] p-6 rounded-[30px] border border-slate-800 hover:border-yellow-500 transition-all">
          <div className="flex justify-between items-center">

            <div>
              <p className="text-slate-400 text-sm">
                Medium Priority
              </p>

              <h2 className="text-4xl font-bold mt-3">
                {
                  analytics
                    ?.priorityData?.[1]
                    ?.value || 0
                }
              </h2>
            </div>

            <div className="bg-yellow-500/20 p-4 rounded-2xl">
              <FaChartLine className="text-yellow-400 text-2xl" />
            </div>

          </div>
        </div>

      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-2 gap-6">

        {/* PRIORITY CHART */}
        <div className="bg-[#111827] rounded-[35px] border border-slate-800 p-8 h-[450px]">

          <div className="flex justify-between items-center mb-6">

            <div>
              <h2 className="text-2xl font-semibold">
                Priority Analysis
              </h2>

              <p className="text-slate-400 text-sm mt-1">
                Lead priorities overview
              </p>
            </div>

          </div>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >
            <BarChart
              data={
                analytics.priorityData
              }
            >
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#1E293B"
              />

              <XAxis
                dataKey="name"
                stroke="#94A3B8"
              />

              <Tooltip />

              <Legend />

              <Bar
                dataKey="value"
                radius={[
                  10,
                  10,
                  0,
                  0,
                ]}
                fill="#06B6D4"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* PIE CHART */}
        <div className="bg-[#111827] rounded-[35px] border border-slate-800 p-8 h-[450px]">

          <div className="mb-6">
            <h2 className="text-2xl font-semibold">
              Lead Distribution
            </h2>

            <p className="text-slate-400 text-sm mt-1">
              Current lead pipeline
            </p>
          </div>

          <ResponsiveContainer
            width="100%"
            height="85%"
          >
            <PieChart>
              <Pie
                data={
                  analytics.leadStatus
                }
                dataKey="value"
                outerRadius={130}
                innerRadius={60}
                paddingAngle={5}
                label
              >
                {analytics.leadStatus.map(
                  (
                    entry,
                    index
                  ) => (
                    <Cell
                      key={index}
                      fill={
                        COLORS[
                          index %
                            COLORS.length
                        ]
                      }
                    />
                  )
                )}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* RECENT PERFORMANCE */}
      <div className="mt-8 bg-[#111827] rounded-[35px] border border-slate-800 p-8">

        <h2 className="text-3xl font-semibold mb-6">
          AI CRM Insights
        </h2>

        <div className="grid grid-cols-3 gap-6">

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <p className="text-slate-400 text-sm">
              Best Performing Stage
            </p>

            <h3 className="text-2xl font-bold mt-3 text-cyan-400">
              Negotiation
            </h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <p className="text-slate-400 text-sm">
              Estimated Revenue
            </p>

            <h3 className="text-2xl font-bold mt-3 text-green-400">
              ₹12.4L
            </h3>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
            <p className="text-slate-400 text-sm">
              AI Recommendation
            </p>

            <h3 className="text-xl font-bold mt-3 text-yellow-400">
              Focus on High Priority Leads
            </h3>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Analytics;