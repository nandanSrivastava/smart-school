"use client";

import { cn } from "@/lib/utils";
import {
    BookOpen,
    Users,
    GraduationCap,
    Settings,
    LogOut,
    LayoutDashboard,
    Menu
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/features/auth/hooks/useAuth";

const sidebarItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: Users, label: "Students", href: "/dashboard/students" },
    { icon: GraduationCap, label: "Teachers", href: "/dashboard/teachers" },
    { icon: BookOpen, label: "Classes", href: "/dashboard/classes" },
    { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export const Sidebar = () => {
    const pathname = usePathname();
    const { logout } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className={cn(
            "h-screen bg-slate-900 text-white transition-all duration-300 flex flex-col relative z-20",
            collapsed ? "w-20" : "w-64"
        )}>
            {/* Header */}
            <div className="p-4 flex items-center justify-between border-b border-slate-800">
                <div className={cn("flex items-center gap-3", collapsed && "justify-center w-full")}>
                    <div className="relative h-8 w-8 shrink-0">
                        <img src="/smart-logo.png" alt="Logo" className="object-contain w-full h-full" />
                    </div>
                    {!collapsed && <span className="font-bold text-xl tracking-tight">SmartSchool</span>}
                </div>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className={cn("p-1 hover:bg-slate-800 rounded transition-colors", collapsed && "absolute -right-12 top-4 bg-slate-900 p-2 shadow-lg rounded-r-lg border border-l-0 border-slate-800")}
                >
                    <Menu className="h-5 w-5 text-slate-400" />
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-3 rounded-xl transition-all group",
                                isActive
                                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-white"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5 shrink-0 transition-colors", isActive ? "text-white" : "text-slate-400 group-hover:text-white")} />
                            {!collapsed && (
                                <span className="font-medium whitespace-nowrap origin-left duration-200">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Logout */}
            <div className="p-4 border-t border-slate-800">
                <button
                    onClick={logout}
                    className={cn(
                        "flex items-center gap-3 px-3 py-3 w-full rounded-xl transition-all group text-red-400 hover:bg-red-500/10 hover:text-red-300",
                        collapsed && "justify-center"
                    )}
                >
                    <LogOut className="h-5 w-5 shrink-0" />
                    {!collapsed && <span className="font-medium">Logout</span>}
                </button>
            </div>
        </div>
    );
};
