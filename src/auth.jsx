import './styles/auth.scss';
import { useEffect, useState } from 'react';
import { getAuth, signInWithPopup } from 'firebase/auth';
import { app, googleAuthProvider } from './helpers/firebase';

const reloadPage = () => {
  window.location.reload();
};

export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(auth.currentUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((maybeUser) => {
      if (maybeUser != null) {
        setLoading(false);
        return setUser(maybeUser);
      }
      console.log(3333);

      signInWithPopup(auth, googleAuthProvider)
        .then((credentials) => {
          setUser(credentials.user);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          console.error(err);
        });
    });

    return unsubscribe;
  }, [auth]);

  if (loading) {
    return (
      <div className='auth'>
        <p>loading</p>
      </div>
    );
  }

  return user != null ? (
    <>{children}</>
  ) : (
    <div className='auth'>
      <p>Please turn off Adblock, allow pop-ups and click to reload</p>
      <div style={{ marginTop: '30px' }}>
        <button onClick={reloadPage}>RELOAD PAGE</button>
      </div>
    </div>
  );
};
