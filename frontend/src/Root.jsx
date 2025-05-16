import { Outlet } from "react-router";

function Root() {
    return (
        <div className="fixed inset-0 bg-gradient-to-br from-red-600 via-black to-orange-500 opacity-90 z-0">
         

            <Outlet /> {/* Renders child routes here */}
        </div>
    );
}

export default Root