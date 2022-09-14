const initialState = {
  products: [
    { id: 1, name: "hat", price: 50, quantity: 1 },
    { id: 2, name: "t-shirt", price: 80, quantity: 2 },
  ],
  customers: [
    { id: 1, first: "Or", last: "Azaria", city: "Lod" },
    { id: 2, first: "Oshrat", last: "Tesema", city: "Mazkeret-Batya" },
  ],
  purchases: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "DELETE":
      return { ...state, products: action.payload };
    case "UPDATE":
      const id = action.payload.id;
      const arr = { ...state };
      const index = arr.products.findIndex((user) => user.id == id);
      console.log(index);
      if (index >= 0) {
        arr.products[index] = action.payload;
      }
    default:
      return state;
  }
}
export default reducer;
