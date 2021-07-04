/** @format */

import React, { useEffect, Fragment } from "react";
import Loader from "../layout/Loader";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getPokemons } from "../../actions/pokemon";
import PokemonGrid from "./PokemonGrid";
import Buttons from "./Buttons";

const Pokemons = ({
	getPokemons,
	pokemon: { prev, next, pokemons, loading, count },
	current,
	setCurrent
}) => {
	useEffect(() => {
		console.log("out pokemons");
		if (pokemons === null) {
			console.log("in pokemons");

			getPokemons();
		}
	}, [getPokemons, pokemons]);

	return (
		<div className='container'>
			{loading || pokemons === null ? (
				<Loader />
			) : (
				<Fragment>
					<PokemonGrid pokemons={pokemons} />
					<Buttons
						prev={prev}
						next={next}
						func={getPokemons}
						current={current}
						setCurrent={setCurrent}
						divider={24}
						count={count}
					/>
				</Fragment>
			)}
		</div>
	);
};

Pokemons.propTypes = {
	getPokemons: PropTypes.func.isRequired,
	pokemon: PropTypes.object.isRequired,
	current: PropTypes.number.isRequired,
	setCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	pokemon: state.pokemon
});

export default connect(mapStateToProps, { getPokemons })(Pokemons);
