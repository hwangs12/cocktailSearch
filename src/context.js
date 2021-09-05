import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [link, setLink] = useState([]);
	const [loading, setLoading] = useState(true);
	const [text, setText] = useState("");

	const handleText = (e) => {
		setText(e.target.value);
	};

	//useCallback memorizes url dependency to trigger re-render only when url changes,
	// nothing else, preventing useEffect to not run for every state changes
	const getLink = useCallback(async () => {
		setLoading(true);
		try {
			const response = await fetch(`${url}${text}`);
			const products = await response.json();
			const { drinks } = products;
			if (drinks) {
				const newCocktails = drinks.map((item) => {
					const {
						idDrink,
						strDrink,
						strDrinkThumb,
						strAlcoholic,
						strGlass,
					} = item;
					return {
						id: idDrink,
						name: strDrink,
						image: strDrinkThumb,
						info: strAlcoholic,
						glass: strGlass,
					};
				});
				setLink(newCocktails);
			} else {
				setLink([]);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [text]);

	useEffect(() => {
		getLink();
	}, [text, getLink]);

	return (
		<AppContext.Provider value={{ loading, link, text, handleText }}>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
