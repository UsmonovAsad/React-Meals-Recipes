import {Link} from "react-router-dom";

export default function NotFound() {
	return (
		<div className="content not-found-page">
			<h1>404 <br /> Page Not Found</h1>
			<Link to="/" children="Go Back" className="btn" />
		</div>
	);
}