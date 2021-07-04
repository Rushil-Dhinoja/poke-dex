/** @format */

import React from "react";
import PropTypes from "prop-types";
import SvgSelector from "./SvgSelector";
import ProgressBar from "./PrgoressBar";
import pokeball from "../../img/pokeball.png";
const PokemonHeader = ({ pokemon: { data, species } }) => {
	return (
		<div className='pokemon-info__header'>
			<div className='pokemon-info__header__summary'>
				<p className='pokemon-info__header__summary__name'>{data.name}</p>
				<div className='pokemon-info__header__summary__types'>
					{data.types.map((type, index) => {
						return (
							<div
								key={index}
								className={`pokemon-info__header__summary__types__type type-${type.type.name}`}
							>
								<SvgSelector type={type.type.name} />
								<p>{type.type.name}</p>
							</div>
						);
					})}
				</div>
				<div className='pokemon-info__header__summary__base'>
					<div className='pokemon-info__header__summary__base__stat'>
						<p className='pokemon-info__header__summary__base__stat-xp'>
							{" "}
							<span>XP</span> {data.base_experience}
						</p>
						<p className='pokemon-info__header__summary__base__stat-happiness'>
							{" "}
							<span>Happiness</span>
							{species.base_happiness}
						</p>
					</div>
					<div className='pokemon-info__header__summary__base__volume'>
						<p className='pokemon-info__header__summary__base__volume-height'>
							<span>Height</span>
							{data.height * 10} cm
						</p>{" "}
						<p className='pokemon-info__header__summary__base__volume-weight'>
							{" "}
							<span>Weight</span>
							{data.weight / 10} kg
						</p>{" "}
						{/* Weight/10 = weight in kg*/}
					</div>
				</div>
			</div>
			<div className='pokemon-info__header__images'>
				<img
					src={
						data.sprites.front_default ? data.sprites.front_default : pokeball
					}
					alt=''
				/>
				{data.sprites.back_default ? (
					<img src={data.sprites.back_default} alt='' />
				) : (
					""
				)}
			</div>
			<div className='pokemon-info__header__stats'>
				{data.stats.map((stat, index) => {
					return (
						<ProgressBar
							key={index}
							name={stat.stat.name}
							value={stat.base_stat}
							color={data.types[0].type.name}
						/>
					);
				})}
			</div>
		</div>
	);
};

PokemonHeader.propTypes = {
	pokemon: PropTypes.object.isRequired
};

export default PokemonHeader;
