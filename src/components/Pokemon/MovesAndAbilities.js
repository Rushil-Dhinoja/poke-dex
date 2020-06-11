import React from 'react';
import PropTypes from 'prop-types';

const MovesAndAbilities = ({ pokemon: { data } }) => {
    return (
        <div className='moves-and-abilities'>
            <div className='moves-and-abilities__abilities'>
                <h4>Abilities</h4>
                <div>
                    {data.abilities.map((ability, index) => {
                        return <p key={index}>{ability.ability.name}</p>;
                    })}
                </div>
            </div>
            <div className='moves-and-abilities__moves'>
                <h4>Moves</h4>
                <div>
                    {data.moves.splice(0, 12).map((move, index) => {
                        return <p key={index}>{move.move.name}</p>;
                    })}
                </div>
            </div>
        </div>
    );
};

MovesAndAbilities.propTypes = {
    pokemon: PropTypes.object.isRequired,
};

export default MovesAndAbilities;
