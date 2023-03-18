import '../../styles/errorPage.scss';
import { useRouteError, Link, useLocation } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const location = useLocation();
  console.error(error);

  const noCharacter = () => {
    const checkParameter = location.search.slice(0, 6);
    if (checkParameter === '?name=') {
      const query = location.search.slice(6);
      return query;
    }
    return null;
  };

  return (
    <div className='error-page'>
      <div>
        <h2>Oops!</h2>
        <p>{noCharacter() ? '' :  error.statusText || error.message}</p>
        <p>{error.data}</p>
      </div>
      <div>
        {noCharacter() && (
          <p>
            no character found for request <strong>{`${noCharacter()}`}</strong>
          </p>
        )}
      </div>
      <div style={{marginTop: '30px'}}>
        <Link to='/'>
          <button>GO BACK</button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
