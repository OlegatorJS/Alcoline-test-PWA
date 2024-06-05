import {
    Route,
    Routes,
    Navigate,
    useNavigate,
    useLocation,
} from "react-router-dom";
import routes from "..";
import { useAppSelector } from "@/hooks/redux";
import Footer from "@/components/Footer";

const PrivateWrapper = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAppSelector((state) => state.auth);
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function Pages() {
    const location = useLocation();
    const wrappingLength = location.pathname.split("/");
    return (
        <Routes>
            {Object.values(routes).map(
                ({ path, component: Component, isPrivate }) => {
                    return isPrivate ? (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <PrivateWrapper>
                                    <>
                                        <Component />
                                        {wrappingLength?.length < 3 ? (
                                            <Footer />
                                        ) : null}
                                    </>
                                </PrivateWrapper>
                            }
                        />
                    ) : (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <>
                                    <Component />
                                </>
                            }
                        />
                    );
                },
            )}
        </Routes>
    );
}

export default Pages;
