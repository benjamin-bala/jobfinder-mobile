export let initialState = {
  search: '',
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'store_data':
      return { ...state, ...payload };
    case 'filter':
      return { ...state, search: payload };
    default:
      return state;
  }
};
