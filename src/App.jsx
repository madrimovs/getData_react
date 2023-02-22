import { CardList } from "./Components/CardList/CardList";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import products from "./Components/Products/Products";

function App() {
	return (
		<div className="container-fluid p-0">
			<Header />
			<CardList product={products} />
			<Footer />
		</div>
	);
}

export default App;
