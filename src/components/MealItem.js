import {Link} from "react-router-dom";

export default function MealItem({idMeal,strMeal,strMealThumb}) {
	return (
		<div className="card">
			<div className="card-item">
				<div className="card-image">
		            <img src={strMealThumb} alt={strMeal} />
		        </div>
		        <div className="card-content">
		        	<span className="card-title">{strMeal.length > 19 ? strMeal.slice(0,19) + "..." : strMeal}</span>
		        </div>
		        <div className="card-action">
		        	<Link to={`/meal/${idMeal}`} className="btn-category" children="Watch Meal" />
		        </div>
			</div>
	    </div>
	);
}