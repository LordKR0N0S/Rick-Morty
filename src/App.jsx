import { RouterProvider } from 'react-router-dom';
import { router } from './router/Router.jsx';
import { AuthProvider } from './auth.jsx';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;