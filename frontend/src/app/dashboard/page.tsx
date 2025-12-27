"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/features/auth/hooks/useAuth";
import { motion } from "framer-motion";
import { Users, GraduationCap, Calendar, TrendingUp } from "lucide-react";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<{ email: string; name: string } | null>(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            router.push("/login");
        } else {
            const userData = localStorage.getItem("user");
            if (userData) setUser(JSON.parse(userData));
        }
    }, [router]);

    if (!user) return <div className="p-8 text-slate-800">Loading...</div>;

    const stats = [
        { title: "Total Students", value: "1,234", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
        { title: "Total Teachers", value: "89", icon: GraduationCap, color: "text-purple-600", bg: "bg-purple-50" },
        { title: "Attendance", value: "95%", icon: Calendar, color: "text-green-600", bg: "bg-green-50" },
        { title: "Growth", value: "+12%", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <div className="p-8 space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Dashboard Overview</h1>
                <p className="text-slate-500 mt-1">Welcome back, <span className="font-semibold text-slate-900">{user.name || user.email}</span></p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        key={stat.title}
                        className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500">{stat.title}</p>
                                <h3 className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-xl ${stat.bg}`}>
                                <stat.icon className={`h-6 w-6 ${stat.color}`} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recent Activity Section (Example) */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Activity</h2>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-3 hover:bg-slate-50 rounded-lg transition-colors">
                            <div className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 font-bold">
                                {i}
                            </div>
                            <div>
                                <p className="text-sm font-medium text-slate-900">New student registration</p>
                                <p className="text-xs text-slate-500">2 hours ago</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
