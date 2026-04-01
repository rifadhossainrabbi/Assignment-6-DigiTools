import Card from "./Card";

const AllProducts = ({ data, selectedProducts, setSelectedProducts, cart, setCart }) => {
  // const useData = use(data);
  // console.log(useData);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {data.map((data, index) => {
        return (
          <Card
            data={data}
            cart={cart}
            setCart={setCart}
            key={index}
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
