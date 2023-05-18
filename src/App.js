import Header from "./pages/Header"
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateLot from "./pages/CreateLot"

export default function App() {
	return (
		<BrowserRouter>
			<div className="flex-col ">
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-lot" element={<CreateLot />} />
					<Route path="*" element={<h1> Not Found</h1>} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	)
}
