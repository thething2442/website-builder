import { Outlet } from "react-router";

function Root() {
    return (
        <div className="flex min-h-screen flex-col bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-red-900/20 via-purple-900/10 to-black/30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent pointer-events-none"></div>

            <Outlet /> {/* Renders child routes here */}
        </div>
    );
}

export default Root