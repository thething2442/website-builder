import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const UserDashboard = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Replace with your actual API endpoint
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`/api/users/${id}`);
                setUser(response.data); // Assuming the API response contains user data
            } catch (error) {
                console.error("Error fetching user data", error);
            }
        };

        fetchUserData();
    }, [id]);

    if (!user) {
        return <div>Loading...</div>; // Show a loading state while fetching user data
    }

    return (
        <div>
            <Helmet>
                <title>{`User Dashboard - ${user.name}`}</title>
            </Helmet>
            <h1>User Dashboard</h1>
            <p>Welcome, {user.name}!</p>
        </div>
    );
};

export default UserDashboard;
