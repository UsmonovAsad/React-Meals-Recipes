import CategoryItem from "./CategoryItem";

export default function CategoryList({catalog}) {
	return (
		<>
			<div className="list">
				{
					catalog.length ?
					catalog.map(item => <CategoryItem key={item.idCategory} {...item} />) :
					<div className="not-found">
						<h2>Not Results</h2>
					</div>
					
				}
			</div>
		</>
	);
}