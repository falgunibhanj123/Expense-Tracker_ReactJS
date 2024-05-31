import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowList from "./components/ShowList";
import AddExpense from "./components/AddExpense";
import { getDataFromServer } from "./services/expense_utils";

function App() {
	// console.log(getDataFromServer());
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ShowList></ShowList>} />
					<Route path="/add" element={<AddExpense></AddExpense>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;