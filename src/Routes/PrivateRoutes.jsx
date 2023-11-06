import PropTypes from 'prop-types';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import Loader from './../components/shared/Loader/Loader';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    if (loading) {
        return <Loader></Loader>
    }
    if (user?.email) {
        return children
    }
    return (
        <Navigate state={location.pathname} to={'/signin'}></Navigate>
    );
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default PrivateRoutes;