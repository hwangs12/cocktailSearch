import React from "react";
import { Link } from "react-router-dom";

const Cocktail = (cocktail) => {
	const { id, image, info, glass, name } = cocktail;
	return (
		<article className="cocktail">
			<div className="img-container">
				<img src={image} alt={name} />
			</div>
			<div className="cocktail-footer">
				<h3>{name}</h3>
				<h4>{glass}</h4>
				<p>{info}</p>
				<Link
					to={{
						pathname: `/cocktail/${id}`,
					}}
					className="btn btn-primary btn-details"
				>
					details
				</Link>
			</div>
		</article>
	);
};

export default Cocktail;
