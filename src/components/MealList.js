import {useState,useEffect} from "react";
import {useParams,useLocation,useNavigate} from "react-router-dom";
import {getFilterCategory} from "../api";
import Loader from "./Loader";
import MealItem from "./MealItem";
import Search from "./Search";

export default function MealList() {
	const [meals,setMeals] = useState([]);
	const [filteredMeals,setFilteredMeals] = useState([]);

	const {name} = useParams();
	const {pathname,search} = useLocation();
	const navigate = useNavigate();

	function searchPanel(value) {
		setFilteredMeals(meals.filter(item => item.strMeal.toLowerCase().includes(value.toLowerCase().trim())));
		navigate({
			pathname,
			search: `?search=${value}`
		});
	}

	useEffect(() => {
		getFilterCategory(name).then(data => {
			setMeals(data.meals);
			setFilteredMeals(search ? 
				data.meals.filter(item => item.strMeal.toLowerCase().includes(search.split("=")[1] ? search
					.split("=")[1].toLowerCase().trim() : null))
				: data.meals
			);
		});
	},[search]);

	return (
		<>
			<Search cb={searchPanel} />
				{
					meals.length ? (
						<div className="list"> 
							{
								filteredMeals.length ? filteredMeals.map(meal => <MealItem key={meal.idMeal} {...meal} />) : (
									<div className="not-found">
										<h2>Not Results</h2>
									</div>)
							}
						</div>
					)
					 : <Loader />
				}
		</>	
	);
}