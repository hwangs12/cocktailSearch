import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
	const { text, handleText } = useGlobalContext();
	const searchValue = React.useRef("");

	//focuses on the input form on load
	React.useEffect(() => {
		searchValue.current.focus();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className="section search">
			<form action="" className="search-form" onSubmit={handleSubmit}>
				<div className="form-control">
					<label htmlFor="name">search your favorite cocktail</label>
					<input
						type="text"
						name="name"
						id="name"
						value={text}
						ref={searchValue}
						onChange={(e) => handleText(e)}
					/>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
