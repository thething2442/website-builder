// Protected-Routes.jsx
import { Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ProtectedRoutes({ component: Component }) {
    const [isValid, setIsValid] = useState(null);

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                setIsValid(false);
                return;
            }

            try {
                // Example token validation logic, replace with your actual API validation
                const response = await axios.post('/api/validate-token', { token });
                setIsValid(response.data.isValid);
            } catch (e) {
                setIsValid(false);
            }
        };

        checkToken();
    }, []);

    if (isValid === null) {
        return <div>Loading...</div>; // Or a loader component
    }

    if (!isValid) {
        return <Navigate to="/auth/sign-in" />;
    }

    return <Component />;
}
