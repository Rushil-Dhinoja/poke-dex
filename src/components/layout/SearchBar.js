import React, { useState, useEffect, useRef } from 'react';
import { pokemonNames } from '../../utilities/PokemonName';
import { withRouter } from 'react-router-dom';

const SearchBar = ({ history }) => {
    const [searchValue, setSearchValue] = useState('');
    const [options, setOptions] = useState([]);
    const [display, setDisplay] = useState(false);
    const searchRef = useRef();

    const onChange = (e) => {
        setSearchValue(e.target.value.toLowerCase());
    };

    const onSubmit = (e) => {
        e.preventDefault();
        history.push(`/pokemons/${searchValue.toLowerCase()}`);

        setSearchValue('');
    };

    useEffect(() => {
        setOptions([]);
        if (searchValue.length > 0) {
            setOptions(
                pokemonNames.filter((name) => {
                    if (name.startsWith(searchValue)) return name;
                    return 0;
                })
            );
        }
    }, [searchValue]);

    useEffect(() => {
        setDisplay(false);
        if (options.length !== 0) {
            setDisplay(true);
        }
    }, [options]);

    return (
        <div className='searchbar'>
            <form className='searchbar__form' autoComplete='off' onSubmit={(e) => onSubmit(e)}>
                <svg
                    className='searchbar__form__svg'
                    width='38'
                    height='38'
                    viewBox='0 0 38 38'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path d='M27.1584 23.8994H25.442L24.8336 23.3127C26.9628 20.8359 28.2447 17.6204 28.2447 14.1224C28.2447 6.32247 21.9222 0 14.1224 0C6.32247 0 0 6.32247 0 14.1224C0 21.9222 6.32247 28.2447 14.1224 28.2447C17.6204 28.2447 20.8359 26.9628 23.3127 24.8336L23.8994 25.442V27.1584L34.7627 38L38 34.7627L27.1584 23.8994ZM14.1224 23.8994C8.71241 23.8994 4.34534 19.5323 4.34534 14.1224C4.34534 8.71241 8.71241 4.34534 14.1224 4.34534C19.5323 4.34534 23.8994 8.71241 23.8994 14.1224C23.8994 19.5323 19.5323 23.8994 14.1224 23.8994Z' />
                </svg>

                <input
                    type='text'
                    name='search'
                    value={searchValue}
                    onChange={(e) => {
                        onChange(e);
                    }}
                    ref={searchRef}
                    placeholder='Search for a Pokemon...'
                    className='searchbar__form__input'
                />
            </form>
            {display ? (
                <div className='searchbar__suggestion'>
                    {options.map((option, index) => (
                        <p
                            className='searchbar__suggestion__item'
                            key={index}
                            onClick={() => {
                                setSearchValue(option);
                                searchRef.current.focus();
                            }}>
                            {option}
                        </p>
                    ))}
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default withRouter(SearchBar);
