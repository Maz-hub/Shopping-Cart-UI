import ProductList from "./components/ProductList";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-blue-50 p-6">
        <h1 className="text-3xl font-bold mb-6">Products Catalog</h1>

        <ProductList />
      </div>
    </>
  );
};

export default App;
