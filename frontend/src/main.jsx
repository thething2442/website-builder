import {createRoot} from 'react-dom/client'
import {HelmetProvider} from 'react-helmet-async' // ✅ Add this
import './index.css'
import App from './App.jsx'
import WebsiteCreator from './dashboard/website-creator.jsx'
import About from "./public-pages/about.jsx"
import Root from "./Root.jsx"
import SignUp from "./authentications/Sign-Up.jsx"
import SignIn from "./authentications/Sign-In.jsx"
import Documentation from "./public-pages/documentation.jsx"
import {createBrowserRouter, RouterProvider} from "react-router-dom" // ✅ Correct to 'react-router-dom'
import AuthLayout from "./authentications/AuthLayout.jsx"
import ProtectedRoutes from "./functions/Protected-Routes.jsx";
import UserDashboard from "./dashboard/User.jsx";
import Settings from "./dashboard/Settings.jsx";
import DasboardLayout from "./dashboard/Root.jsx";
import { Webcam } from 'lucide-react'

const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {index: true, Component: App},
            {path: 'about', Component: About},
            {path: 'docs', Component: Documentation}
        ]
    },
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {path: 'sign-up', Component: SignUp},
            {path: 'sign-in', Component: SignIn}
        ]
    },
    {
        path: 'dashboard',
        Component: DasboardLayout,
        element: (
            <ProtectedRoutes component={UserDashboard}/>
        ),
        children: [
            {index: true, Component: UserDashboard},
            {path: 'settings', Component: Settings},
            {path:'webengines',Component:WebsiteCreator}
        ]

    }
])

createRoot(document.getElementById('root')).render(
    <HelmetProvider> {/* ✅ Wrap the app here */}
        <RouterProvider router={router}/>
    </HelmetProvider>
)
