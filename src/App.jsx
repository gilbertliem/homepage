import "./App.css";
import Navbar from "../src/Components/Navbar/Navbar";
import Cover from "../src/Components/Cover/Cover";
import Product from "../src/Components/Product/Product";
import DataNumber from "../src/Components/DataNumber/DataNumber";
import Footer from "../src/Components/Footer/Footer";
import Review from "../src/Components/Review/Review";
import Joining from "../src/Components/Joining/Joining";

function App() {
  return (
    <>
      <Navbar />
      <Cover />
      <Product />
      <Review />
      <DataNumber />
      <Joining />
      <Footer />
    </>
  );
}

export default App;
