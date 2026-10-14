import { Navigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function AdminRoute({ children }) {
    const { user, isAuthenticated } = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/connexion" replace />;
    }

    if (user?.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return children;
}

export default AdminRoute;