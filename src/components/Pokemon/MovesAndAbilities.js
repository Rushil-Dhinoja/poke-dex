/** @format */

import React, { useState } from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

const MovesAndAbilities = ({ pokemon: { data } }) => {
	const [defaultMovesCount, setDefaultMovesCount] = useState(11);

	const setMoves = type => {
		type === 0
			? setDefaultMovesCount(data.moves.length)
			: setDefaultMovesCount(11);
	};

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
					{data.moves.map((move, index) => {
						if (index <= defaultMovesCount) {
							return <p key={index}>{move.move.name}</p>;
						}
					})}
				</div>
				{data.moves.length > 11 && (
					<p>
						{defaultMovesCount === 11 ? (
							<span onClick={() => setMoves(0)}>See More</span>
						) : (
							<span onClick={() => setMoves(1)}>See Less</span>
						)}
					</p>
				)}
			</div>
		</div>
	);
};

MovesAndAbilities.propTypes = {
	pokemon: PropTypes.object.isRequired
};

export default MovesAndAbilities;
