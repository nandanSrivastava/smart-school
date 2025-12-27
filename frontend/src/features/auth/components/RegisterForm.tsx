"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Loader2, Lock, Mail, User, Shield } from "lucide-react";
import Link from "next/link";

export const RegisterForm = () => {
    const { register, loading, error } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("student");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(email, password, name, role); // Assuming name is passed but auth service needs update if it takes name
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20"
        >
            <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                    <div className="relative h-16 w-16 bg-white/10 rounded-2xl p-3 backdrop-blur-sm border border-white/20 shadow-xl">
                        <img src="/smart-logo.png" alt="Smart School Logo" className="w-full h-full object-contain" />
                    </div>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                <p className="text-gray-200">Join Smart School Portal</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Full Name</label>
                    <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Email Address</label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                            type="email"
                            placeholder="user@school.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Password</label>
                    <div className="relative">
                        <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                            type="password"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Role</label>
                    <div className="relative">
                        <Shield className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="pl-10 flex h-10 w-full rounded-md border border-white/10 bg-white/10 px-3 py-2 text-sm text-white focus-visible:outline-none focus:ring-2 focus:ring-blue-500 transition-all [&>option]:text-black"
                        >
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="admin">Admin</option>
                            <option value="parent">Parent</option>
                        </select>
                    </div>
                </div>

                {error && (
                    <div className="text-red-300 text-sm bg-red-500/20 p-3 rounded-lg text-center">
                        {error}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                        "Sign Up"
                    )}
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                    Already have an account?{" "}
                    <Link href="/login" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                        Sign In
                    </Link>
                </p>
            </div>
        </motion.div>
    );
};
