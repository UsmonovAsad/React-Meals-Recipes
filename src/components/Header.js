import {Link} from "react-router-dom";

export default function Header() {
	return (
		<nav>
	     	<Link to="/" className="brand-logo" children="Meals Recipes " />
		</nav>
	);
}