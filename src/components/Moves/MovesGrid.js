/** @format */

import React from "react";
import MoveItem from "./MoveItem";

const MovesGrid = ({ moves }) => {
	return (
		<div className='moves__grid'>
			{moves.map(move => {
				return <MoveItem move={move.data} key={move.data.id} />;
			})}
		</div>
	);
};

export default MovesGrid;
