/** @format */

import React from "react";
import SvgSelector from "../Pokemon/SvgSelector";

const MoveItem = ({ move }) => {
	return (
		<div className={`type-${move.type.name} moves__grid__cell`}>
			<div className='moves__grid__cell-header'>
				<p>{move.name.replace("-", " ")}</p>
				<SvgSelector type={move.type.name} />
			</div>
			<div className='moves__grid__cell-stats'>
				<div>
					<p>Power</p>
					<p>{move.power ? move.power : "N/A"}</p>
				</div>
				<div>
					<p>PP</p>
					<p>{move.pp ? move.pp : "N/A"}</p>
				</div>
				<div>
					<p>Priority</p>
					<p>{move.priority !== null ? move.priority : "N/A"}</p>
				</div>
			</div>
			<div className='moves__grid__cell-gen'>
				<p>{move.generation.name}</p>
			</div>
		</div>
	);
};

export default MoveItem;
