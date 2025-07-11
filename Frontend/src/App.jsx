import MainRoutes from './routes/MainRoutes';
import Nav from './components/Nav';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { asyncCurrentUser } from './store/actions/UserAction';
import { asyncLoadProduct } from './store/actions/ProductAction';
;

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncLoadProduct())
    dispatch(asyncCurrentUser())
  }, [])

  return (
    <div
      className="min-h-screen px-10">
      <Nav></Nav>
      <MainRoutes />
    </div>
  );
};

export default App;
