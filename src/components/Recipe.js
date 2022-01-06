import {useState,useEffect,useMemo} from "react";
import {useParams} from "react-router-dom";
import {getMealByID} from "../api";

export default function Recipe() {
	const [meal,setMeal] = useState({});
	const [showRecipe,setShowRecipe] = useState(false);
	const [short,setShort] = useState(true);
	const {id} = useParams();

	useEffect(() => {
		getMealByID(id).then(data => setMeal(data.meals[0]));
	},[]);

	const {strYoutube,strInstructions,strArea,strCategory,strMealThumb,strMeal} = useMemo(() => meal, [meal]);
	
	return (
		<div className="recipe-card">
			<div className="recipe-item">
				<div className="recipe-img">
					<img src={strMealThumb} alt={strMeal} />
				</div>
				<div className="recipe-content">
					<h1>{strMeal}</h1>
					<h3><b>Category: </b>{strCategory}</h3>
					{strArea && <h3><b>Area: </b>{strArea}</h3>}
					<p>{strInstructions && short ? `${strInstructions.slice(0,300)}... ` : strInstructions}
					 <span onClick={() => setShort(prev => !prev)}>{short ? "Read More" : "Read Less"}</span></p>
					<button
						className="btn-category"
						onClick={() => setShowRecipe(prev => !prev)}
					>
						{showRecipe ? "Hide Recipe" : "Show Recipe"}
					</button>
				</div>
			</div>
			{
				showRecipe && (
					<table>
						<thead>
							<tr>
								<th>Ingredient</th>
								<th>Measure</th>
							</tr>
						</thead>
						<tbody>
							{
								Object.keys(meal).map(mealKey => {
									if (mealKey.includes("Ingredient") && meal[mealKey]) {
										return (
											<tr key={meal[mealKey]}>
												<td>{meal[mealKey]}</td>
												<td>{meal[`strMeasure${mealKey.slice(13)}`]}</td>
											</tr>
										)
									}
								})
							}
						</tbody>
					</table>
				)
			}
			{
				strYoutube ? (
					<iframe src={`https://www.youtube.com/embed/${strYoutube.split("=")[1]}`}
						title="YouTube video player"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen />
				) : null
			}
		</div>
	);
}