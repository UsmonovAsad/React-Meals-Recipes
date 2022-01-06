import API_URL from "./config";

async function getMealByID(mealId) {
	const res = await fetch(API_URL + "/lookup.php?i=" + mealId);
	return await res.json();
}

async function getAllCategories() {
	const res = await fetch(API_URL + "/categories.php");
	return await res.json();
}

async function getFilterCategory(categoryName) {
	const res = await fetch(API_URL + "/filter.php?c=" + categoryName);
	return await res.json();
}

export {getMealByID, getAllCategories, getFilterCategory};