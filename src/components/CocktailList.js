import React from "react";
import Cocktail from "./Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context";

const CocktailList = () => {
	const { loading, link } = useGlobalContext();

	if (loading) {
		return <Loading />;
	}

	if (link.length < 1) {
		return (
			<h2 className="section-title">
				no cocktails matched your search criteria
			</h2>
		);
	}
	return (
		<section className="section">
			<h2 className="section-title">cocktails</h2>
			<div className="cocktails-center">
				{link.map((cocktail) => {
					return <Cocktail key={cocktail.id} {...cocktail} />;
				})}
			</div>
		</section>
	);
};

export default CocktailList;
