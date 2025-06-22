const basketReducer = (state = [], { type, payload }) => {
  console.log(state);

  switch (type) {
    case "DELETE":
      return { yapilacaklar: state.yapilacaklar.filter((a) => a !== payload) };

    case "ADD":
      return {
        yapilacaklar: [...state.yapilacaklar, { id: 3, task: payload, completed: false }],
      };

    case "":
      return;
    // dizide dolaş, müşterinin gönderdiği id ile eşleşen elemanın, diğer özellikleri kalsın, completed i değiştir

    default:
      return state;
  }
};

export default basketReducer;
