import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { getLiked } from '../../actions/liked';
import { connect } from 'react-redux';
import Loader from '../layout/Loader';
import PokemonItem from '../pokemons/PokemonItem';
// Test
const Favorite = ({ history, getLiked, liked: { liked, loading } }) => {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    localStorage.getItem('liked') &&
    JSON.parse(localStorage.getItem('liked')).length !== 0
      ? setExists(true)
      : setExists(false);
    getLiked();
  }, [getLiked]);

  return (
    <div className='container'>
      <div className='favorite-container'>
        {loading ? (
          <Loader />
        ) : exists && liked.length !== 0 ? (
          <div className='favorite-container__liked'>
            {' '}
            <h2>Your Liked Pokemons</h2>{' '}
            <div className='pokemon__grid'>
              {liked.map((like, index) => (
                <PokemonItem key={index} pokemon={like.data} />
              ))}
            </div>
          </div>
        ) : (
          <div className='favorite-container__error'>
            {' '}
            <h2>You don't have any liked pokemons</h2>
            <button onClick={() => history.push('/pokemons')}>
              Go Like Some
            </button>{' '}
          </div>
        )}
      </div>
    </div>
  );
};

Favorite.propTypes = {
  liked: PropTypes.object.isRequired,
  getLiked: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  liked: state.liked,
});

export default connect(mapStateToProps, { getLiked })(withRouter(Favorite));
