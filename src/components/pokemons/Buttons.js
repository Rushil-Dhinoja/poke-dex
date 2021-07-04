/** @format */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Buttons = ({ prev, next, func, current, setCurrent, count, divider }) => {
	return (
		<div className='buttons'>
			<button
				className={
					prev
						? "buttons__button buttons__button--prev"
						: "buttons__button buttons__button--prev-notvisible"
				}
				onClick={() => {
					func(prev);
					setCurrent(current - 1);
				}}
			>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M15.84 5.92V9.92H6.84L10.34 13.42L7.92 15.84L0 7.92L7.92 0L10.34 2.42L6.84 5.92H15.84Z' />
				</svg>
			</button>
			<div className='buttons__page-container'>
				<p className='buttons__page-container__divider'>
					<span className='buttons__page-container__divider__current'>
						{current}
					</span>{" "}
					/{" "}
					<span className='buttons__page-container__divider__total'>
						{Math.ceil(count / +divider)}
					</span>{" "}
				</p>
			</div>
			<button
				className={
					next
						? "buttons__button buttons__button--next"
						: "buttons__button buttons__button--next-notvisible"
				}
				onClick={() => {
					func(next);
					setCurrent(current + 1);
				}}
			>
				<svg
					width='16'
					height='16'
					viewBox='0 0 16 16'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M0 5.92V9.92H9L5.5 13.42L7.92 15.84L15.84 7.92L7.92 0L5.5 2.42L9 5.92H0Z' />
				</svg>
			</button>
		</div>
	);
};

Buttons.propTypes = {
	func: PropTypes.func.isRequired,
	prev: PropTypes.string,
	next: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	setCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
	// count: state.pokemon.count,
});

export default connect(mapStateToProps, {})(Buttons);
