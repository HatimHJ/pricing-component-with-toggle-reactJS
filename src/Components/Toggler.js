import React from "react";

const Toggler = ({ setIsChecked, isChecked, setIsAnnually, isAnnually }) => {
	const togglerHandler = () => {
		setIsAnnually(!isAnnually);
		setIsChecked(!isChecked);
	};
	return (
		<div className="toggler-wrapper">
			<input type="checkbox" id="toggler" />
			<label
				onClick={togglerHandler}
				htmlFor="toggler"
				checked={isChecked}
				className="toggler-label"
			></label>
		</div>
	);
};

export default Toggler;
