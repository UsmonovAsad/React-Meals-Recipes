import {Link} from "react-router-dom";

export default function CategoryItem({idCategory,strCategory,strCategoryDescription,strCategoryThumb}) {
	return (
		<div className="card">
			<div className="card-item">
				<div className="card-image">
		            <img src={strCategoryThumb} alt={strCategory} />
		        </div>
		        <div className="card-content">
		        	<span className="card-title">{strCategory.length > 20 ? `${strCategory.slice(0,20)}...` :
		        	 strCategory}
		        	</span>
		            <p>{strCategoryDescription.slice(0,60)}...</p>
		        </div>
		        <div className="card-action">
		        	<Link to={`/categoryy/${strCategory}`} className="btn-category" children="Watch Category" />
		        </div>
			</div>
		</div>
	);
}