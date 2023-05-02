import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useGetAccountQuery } from "../services/auth";

const ProtectedRoute = () => {
  const { data: account, isLoading } = useGetAccountQuery();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isLoading && !account) {
      navigate("account/login");
    }
  }, [account, navigate, isLoading]);

  return isLoading ? null : <Outlet />;
};

export default ProtectedRoute;
