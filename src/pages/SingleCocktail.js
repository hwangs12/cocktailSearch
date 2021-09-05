import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
	const { id } = useParams();
	const [loading, setLoading] = React.useState(false);
	const [singleCocktail, setSingleCocktail] = React.useState({});

	React.useEffect(() => {
		setLoading(true);
		async function getSingleCocktail() {
			try {
				const response = await fetch(`${url}${id}`);
				const data = await response.json();
				const { drinks } = data;
				if (drinks[0]) {
					const {
						strDrink,
						strCategory,
						strAlcoholic,
						strGlass,
						strInstructions,
						strIngredient1,
						strIngredient2,
						strIngredient3,
						strIngredient4,
						strIngredient5,
						strIngredient6,
						strIngredient7,
						strIngredient8,
						strIngredient9,
						strIngredient10,
						strIngredient11,
						strIngredient12,
						strIngredient13,
						strIngredient14,
						strIngredient15,
						strDrinkThumb,
					} = drinks[0];
					const newDrink = {
						name: strDrink,
						category: strCategory,
						info: strAlcoholic,
						glass: strGlass,
						instruction: strInstructions,
						ingredients: [
							strIngredient1,
							strIngredient2,
							strIngredient3,
							strIngredient4,
							strIngredient5,
							strIngredient6,
							strIngredient7,
							strIngredient8,
							strIngredient9,
							strIngredient10,
							strIngredient11,
							strIngredient12,
							strIngredient13,
							strIngredient14,
							strIngredient15,
						],
						image: strDrinkThumb,
					};
					setSingleCocktail(newDrink);
				} else {
					setSingleCocktail({});
				}
			} catch (error) {
				console.log(error);
			}
			setLoading(false);
		}
		getSingleCocktail();
	}, [id]);

	if (loading) {
		return <Loading />;
	}

	if (singleCocktail) {
		const { name, category, info, glass, instruction, ingredients, image } =
			singleCocktail;
		return (
			<section className="section cocktail-section">
				<Link className="btn btn-primary" to="/">
					back home
				</Link>
				<h2 className="section-title">{name}</h2>
				<div className="drink">
					<img src={image} alt={name} />
					<div className="drink-info">
						<p>
							<span className="drink-data">name :</span>
							{name}
						</p>
						<p>
							<span className="drink-data">category :</span>
							{category}
						</p>
						<p>
							<span className="drink-data">info :</span>
							{info}
						</p>
						<p>
							<span className="drink-data">glass :</span>
							{glass}
						</p>
						<p>
							<span className="drink-data">instructions :</span>
							{instruction}
						</p>
						<p>
							<span className="drink-data">ingredients :</span>
							{ingredients &&
								ingredients.map((ingredient, index) => {
									return (
										ingredient !== null && (
											<span key={index}>
												{ingredient}
											</span>
										)
									);
								})}
						</p>
					</div>
				</div>
			</section>
		);
	}
};

export default SingleCocktail;
