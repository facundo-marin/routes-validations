import { resetUser, UserKey } from '../../redux/state/user';
import { clearLocalStorage } from '../../utilities';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from './../../models/routes';
import { useDispatch } from 'react-redux';

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(PublicRoutes.LOGIN, { replace: true });
  };
  return <button onClick={logOut}>Logout</button>;
};

export default Logout;
