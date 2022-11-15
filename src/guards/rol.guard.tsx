import { useSelector } from 'react-redux';
import { PrivateRoutes, Roles } from '../models';
import { AppStore } from '../redux/store';
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

interface Props {
  rol: Roles;
}

const RolGuard = ({ rol }: Props) => {
  const useState = useSelector((store: AppStore) => store.user);
  return useState.rol === rol ? (
    <Outlet />
  ) : (
    <Navigate to={PrivateRoutes.PRIVATE} />
  );
};

export default RolGuard;
