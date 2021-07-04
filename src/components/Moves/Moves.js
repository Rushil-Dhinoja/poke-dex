/** @format */

import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getMoves } from "../../actions/moves";
import Loader from "../layout/Loader";
import Buttons from "../pokemons/Buttons";
import MovesGrid from "./MovesGrid";
const Moves = ({
	getMoves,
	moves: { prev, next, moves, loading, count },
	current,
	setCurrent
}) => {
	useEffect(() => {
		console.log("outMoves");
		if (moves === null) {
			console.log("in moves");
			getMoves();
		}
	}, [getMoves, moves]);

	return (
		<div className='container'>
			{loading || moves === null ? (
				<Loader />
			) : (
				<Fragment>
					<MovesGrid moves={moves} />
					<Buttons
						prev={prev}
						next={next}
						func={getMoves}
						current={current}
						setCurrent={setCurrent}
						count={count}
						divider={54}
					/>
				</Fragment>
			)}
		</div>
	);
};

const mapStateToProps = state => ({
	moves: state.moves
});

export default connect(mapStateToProps, { getMoves })(Moves);
