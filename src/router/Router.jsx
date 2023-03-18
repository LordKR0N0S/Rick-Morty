import { createBrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage.jsx';
import Layout from './components/Layout.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import CharacterPage from './components/CharacterPage.jsx';
import { fetchAllCharacters } from '../helpers/fetchAllCharacters.js';
import { fetchCharacterById } from '../helpers/fetchCharacterbyId.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainPage />,
        index: true,
        loader: fetchAllCharacters,
      },
      {
        path: 'characters/:id',
        element: <CharacterPage />,
        loader: fetchCharacterById,
      },
    ],
  },
]);
