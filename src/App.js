import {Route,Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import MealList from "./components/MealList";
import Recipe from "./components/Recipe";


export default function App() {
  return (
    <>
      <Header />
      <div className="container content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categoryy/:name" element={<MealList />} />
          <Route path="/meal/:id" element={<Recipe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}