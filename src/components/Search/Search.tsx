import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import searchAlbumsAPI from '../../services/searchAlbumsAPI';
import Footer from '../footer/Footer';
import playImagem from '/images/botao-play.png';
import './search.css';
import Loading from '../Loading/Loading';
import LittleLoading from './LittleLoad';



interface Album {
  collectionId: number;
  collectionName: string;
}

function Search() {
  const [entrance, setEntrance] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  function validEntrance() {
    return entrance.length >= 2;
  }

  async function handleLogin() {
    if (validEntrance()) {
      setIsLoading(true);

      const response: Album[] = await searchAlbumsAPI(entrance);

      setIsLoading(false);
      setAlbums(response);
      setSearchTerm(entrance);
      setEntrance('');
    }
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEntrance(event.target.value);
  }

  return (
    <div className='general-background'>
      <div className='main-search-div'>
        <div className='search-container'>
          <input
            placeholder='Enter a artist'
            data-testid="search-artist-input"
            type="text"
            value={ entrance }
            onChange={ handleInputChange }
          />

          <button
            data-testid="search-artist-button"
            disabled={ !validEntrance() }
            onClick={ handleLogin }
          >
             <img className ="icon" src={playImagem} alt="search" />
          </button>
        </div>

        {isLoading && <LittleLoading />}

        {albums.length > 0 ? (
          <div className='general-div-results'>
            <h3>{`Results for albums by: ${searchTerm}`}</h3>
            <div className='div-grid'> 
              <ul>
                {albums.map((album) => (
                  <li key={ album.collectionId }>
                    <Link
                      to={ `/album/${album.collectionId}` }
                      data-testid={ `link-to-album-${album.collectionId}` }
                    >
                      {album.collectionName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="enter-phrase">
            {searchTerm ? `No albums were found for: ${searchTerm}`
              : 'Enter an artist name to search...'}
          </p>
        )}
      </div>
      <Footer />
  
    </div>
  );
}

export default Search;
