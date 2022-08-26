const RedirectRoute = ({ user, children }) => {
    if (user) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default RedirectRoute;