import { Outlet } from 'react-router-dom';
import { useGetAccountQuery } from '../services/auth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const ProtectedRoute = () => {
    const { data: account } = useGetAccountQuery();
    const navigate = useNavigate();
    useEffect(() => {
        if (!account) {
            navigate('account/login');
        }
    }, []);
    return <Outlet />
}

export default ProtectedRoute
