import '../../styles/character.scss';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const CharacterPage = () => {
  const character = useLoaderData();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='character-page'>
      <div className='character-page__go-back-btn'>
        <button onClick={() => navigate(-1)}>GO BACK</button>
      </div>
      <div className='character-page__card'>
        <div className='character-page__card-top-side'>
          <div className='character-page__image'>
            <img src={character.image} alt='avatar' />
          </div>
          <h1 className='character-page__title'>{character.name}</h1>
          <p className='character-page__description'>informations</p>
        </div>
        <div className='character-page__card-bot-side'>
          <p className='character-page__subtitle'>Gender</p>
          <p className='character-page__text'>{character.gender}</p>
          <hr />
          <p className='character-page__subtitle'>Status</p>
          <p className='character-page__text'>{character.status}</p>
          <hr />
          <p className='character-page__subtitle'>Specie</p>
          <p className='character-page__text'>{character.species}</p>
          <hr />
          <p className='character-page__subtitle'>Origin</p>
          <p className='character-page__text'>{character.origin.name}</p>
          <hr />
          <p className='character-page__subtitle'>type</p>
          <p className='character-page__text'>{character.type || 'unknown'}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
