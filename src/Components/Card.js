import React from "react";

const Card = ({ plan, price, features }) => {
	return (
		<div className={`card ${plan === "Professional" ? "pro" : ""}`}>
			<p className="plan">{plan}</p>
			<p className="price">{price}</p>
			<ul className="feature">
				{features.map((item, index) => {
					return <li key={index}>{item}</li>;
				})}
			</ul>
			<button className="btn card-btn">Learn More</button>
		</div>
	);
};

export default Card;
