import {useState} from "react";

export default function Search({cb = Function.prototype}) {
	const [value,setValue] = useState("");

	return (
			<div className="form">
				<input
					type="search"
					placeholder="Search..."
					className="search-input"
					value={value}
					onChange={e => setValue(e.target.value)}
					onKeyDown={e => e.key === "Enter" && cb(value)}
				/>
				<button
					className="btn-search"
					onClick={() => cb(value)}
				>
					<i className="fas fa-search"></i>
				</button>
			</div>
	);
}