export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-slate-100 dark:bg-slate-950">
            {/* Sidebar is client-side, handled by wrapping logic if needed, but for now strict import works */}
            {/* We need to import Sidebar from a Client Component wrapper if this was Server Component, 
          but simpler is to allow Layout to render client/server parts. 
          Actually Next.js layouts can import Client Components. */}
            {/* Since Sidebar needs state, it is "use client" */}
            <div className="flex w-full">
                <ClientSidebarWrapper />
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-slate-50 relative">
                    {children}
                </main>
            </div>
        </div>
    );
}

import { Sidebar } from "@/components/layout/Sidebar";

// Small wrapper to keep layout clean if we wanted separate server/client parts, 
// but direct usage is fine since Sidebar has "use client"
const ClientSidebarWrapper = () => {
    return <Sidebar />;
}
