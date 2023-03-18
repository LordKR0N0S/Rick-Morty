import '../../styles/mainPage.scss';
import logo from '../../assets/PngItem_4380511.png';

import { useMemo } from 'react';
import { Form, Link, useLoaderData, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const MainPage = () => {
  const characters = useLoaderData();
  const location = useLocation();
  const defaultInputValue = location.search.slice(6);

  const filteredCharacters = useMemo(() => {
    return characters.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }, [characters]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='main-page'>
      <div className='main-page__image'>
        <img src={logo} alt='main-pic' />
      </div>
      <Form className='main-page__form'>
        <input
          type='text'
          name='name'
          placeholder='Filter by name...'
          defaultValue={defaultInputValue}
        />
      </Form>
      <div>
        <ul className='main-page__list-box'>
          {filteredCharacters.map((el) => (
            <li key={el.id} className='main-page__list-card card-list'>
              <Link to={`characters/${el.id}`}>
                <div className='card-list__image'>
                  <img src={el.image} alt='avatar' />
                </div>
                <div className='card-list__content'>
                  <p className='card-list__title'>{el.name}</p>
                  <p className='card-list__text'>{el.species}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MainPage;
