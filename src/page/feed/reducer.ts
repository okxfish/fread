export const initState = {
  isSidePaneOpen: false,
  currenActivedFeedId: "",
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "feed/ById/changeCurrentActivedFeedId":
      return {
        ...state,
        currenActivedFeedId: action.payload,
      };
    case "sidePane/open":
      return { ...state, isSidePaneOpen: true };
    default:
      throw new Error();
  }
};
