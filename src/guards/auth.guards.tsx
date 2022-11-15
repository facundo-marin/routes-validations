import { AppStore } from '../redux/store';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './../models/routes';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = (
  <Navigate replace to={PrivateRoutes.PRIVATE} />
);

//el authGuard es algo que se va a ejecutar cada vez que se trate de entrar a una ruta privada
//
export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.name ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};
export default AuthGuard;
