"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Loader2, Lock, Mail } from "lucide-react";
import Link from "next/link";

export const LoginForm = () => {
    const { login, loading, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(email, password);
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
                <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                <p className="text-gray-200">Enter your credentials to access the portal</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Email Address
                    </label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                            type="email"
                            placeholder="admin@school.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-10 bg-white/10 border-white/10 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 transition-all"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-2">
                        Password
                    </label>
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

                {error && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-red-300 text-sm bg-red-500/20 p-3 rounded-lg text-center"
                    >
                        {error}
                    </motion.div>
                )}

                <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                    disabled={loading}
                >
                    {loading ? (
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    ) : (
                        "Sign In"
                    )}
                </Button>
            </form>

            <div className="mt-6 text-center">
                <p className="text-gray-300 text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/register" className="text-blue-400 hover:text-blue-300 font-semibold hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </motion.div >
    );
};
