import * as actions from "../actions/articleActions";

const initialState = {
  articles: null,
  loading: false,
  currentPage: 1,
  numberOfPages: null,
  loadingNextPage: false,
  lastURL: null,
  sections: null
};

export const getArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.articles,
        loading: false,
        numberOfPages: action.numberOfPages,
        currentPage: 1
      };

    case actions.GET_ARTICLES_START: {
      return { ...state, loading: true };
    }
    case actions.GET_ARTICLES_FAIL: {
      return { ...state, loading: false };
    }
    case actions.CLEAR_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: null,
        loading: false,
        currentPage: 1,
        numberOfPages: null
      };

    case actions.CLEAR_ARTICLES_START: {
      return { ...state, loading: true };
    }

    default:
      return state;
  }
};
