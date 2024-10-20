import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

function CheckAuth({ isAuthenticated, user, children }) {
    const location = useLocation();

    if (!isAuthenticated &&
        !(
            location.pathname.includes("/login") ||
            location.pathname.includes("/register")
        )
    ) {
        return <Navigate to="/auth/login" />;
    }

    if (isAuthenticated &&
        (location.pathname.includes("/login") || location.pathname.includes("/register"))
    ) {
        if (user?.role === 'admin') {
            return <Navigate to="/admin/dashboard" />;
        } else {
            return <Navigate to="/shop/dashboard" />;
        }
    }

    if (isAuthenticated && user?.role !== 'admin' && location.pathname.includes('admin')) {
        return <Navigate to="/unauth-page" />;
    }

    if (isAuthenticated && user?.role === 'admin' && location.pathname.includes('shop')) {
        return <Navigate to="/admin/dashboard" />;
    }

    return <>{children}</>;
}

CheckAuth.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    user: PropTypes.shape({
        role: PropTypes.string.isRequired,
    }).isRequired,
    children: PropTypes.node.isRequired,
};

export default CheckAuth;
