"use client";

import { RegisterForm } from "@/features/auth/components/RegisterForm";

export default function RegisterPage() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-950 via-sky-900 to-indigo-950 relative overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            <div className="relative z-10 w-full flex justify-center px-4">
                <RegisterForm />
            </div>
        </div>
    );
}
