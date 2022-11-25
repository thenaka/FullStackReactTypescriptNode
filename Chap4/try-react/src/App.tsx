import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./Home";
import AnotherScren from './AnotherScreen';
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/another" element={<AnotherScren />}></Route>
				</Routes>
			</header>
		</div>
	);
}

export default App;
