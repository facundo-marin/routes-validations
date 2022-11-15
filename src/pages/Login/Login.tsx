import { getMorty } from './../../services';
import { useDispatch } from 'react-redux';
import { createUser, resetUser, UserKey } from '../../redux/state/user';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from '../../models';
import { useEffect } from 'react';
import { clearLocalStorage } from '../../utilities';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async () => {
    try {
      const result = await getMorty();
      dispatch(createUser({ ...result, rol: Roles.ADMIN }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {}
  };

  return (
    <div>
      <h1>Hola este es el Login</h1>
      <button onClick={login}>LOGIN</button>
    </div>
  );
};

export default Login;
