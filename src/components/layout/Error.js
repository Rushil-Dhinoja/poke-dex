import React from 'react';
import { withRouter } from 'react-router-dom';
import errorimg from '../../img/Error.png';
import { connect } from 'react-redux';

const Error = ({ history, error: { msg } }) => {
    console.log(msg);

    return (
        <div>
            <div className='error'>
                <div className='error-container'>
                    <img src={errorimg} alt='' className='error-container__img' />
                    {msg.search('404') ? (
                        <div className='error-container__msg'>
                            <h1>404: Not Found !</h1>
                            <p>Sorry, the pokemon you searched for is yet to be discovered</p>
                            <button onClick={() => history.push('/pokemons')}>
                                Discover Others
                            </button>
                        </div>
                    ) : (
                        <div className='error-container__msg'>
                            <h1>404</h1>
                            <p>Something went Wrong, Please try again later</p>
                            <button onClick={() => history.push('/pokemons')}>
                                Discover Others
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    error: state.pokemon.error,
});

export default connect(mapStateToProps, {})(withRouter(Error));
