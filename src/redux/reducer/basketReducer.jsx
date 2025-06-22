const basketReducer = (state="", { type, payload }) => {
  switch (type) {
    case "DELETE":
      return;

    case "ADD":
      return;

    case "":
      return;

    default:
      return state;
  }
};

export default basketReducer;
