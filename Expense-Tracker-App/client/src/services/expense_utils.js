import axios from "axios";

const getDataFromServer = () => {
	return axios
		.get("http://localhost:4000/expenses")
		.then((response) => response.data);
};

const postDataToServer = (newExpense) => {
	return axios.post("http://localhost:4000/expenses", newExpense, {
		headers: { "Content-Type": "application/json" },
	});
};

export { getDataFromServer, postDataToServer };