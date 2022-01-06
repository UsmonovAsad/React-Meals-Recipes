import {useState,useEffect} from "react";
import {useLocation,useNavigate} from "react-router-dom";
import {getAllCategories} from "../api";
import CategoryList from "../components//CategoryList";
import Loader from "../components/Loader";
import Search from "../components/Search";

export default function Home() {


	const [catalog,setCatalog] = useState([]);
	const [filteredCatalog,setFilteredCatalog] = useState([]);

	const {pathname,search} = useLocation();
	const navigate = useNavigate();

	function searchPanel(value) {
		setFilteredCatalog(catalog.filter(item => item.strCategory.toLowerCase().includes(value.toLowerCase().trim())))
		navigate({
			pathname,
			search: `?search=${value}`
		});
	}

	useEffect(() => {
		getAllCategories().then(data => {
			setCatalog(data.categories);
			setFilteredCatalog(search ? 
				data.categories.filter(item => item.strCategory.toLowerCase().includes(search.split("=")[1] ? search
					.split("=")[1].toLowerCase().trim() : null))
				: data.categories
			);
		});
	},[search]);

	return (
		<>
			<Search cb={searchPanel} />
			{catalog.length ? <CategoryList catalog={filteredCatalog} /> : <Loader />}
		</>
	);
}