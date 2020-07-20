export const GET_ARTICLES_SUCCESS = "GET_ARTICLES_SUCCESS";
export const GET_ARTICLES_FAIL = "GET_ARTICLES_FAIL";
export const CLEAR_ARTICLES = "CLEAR_ARTICLES"
export const CLEAR_ARTICLES_START = "CLEAR_ARTICLES_START";
export const CLEAR_ARTICLES_SUCCESS = "CLEAR_ARTICLES_SUCCESS";
export const GET_ARTICLES_INIT = "GET_ARTICLES_INIT";
export const GET_ARTICLES_START = "GET_ARTICLES_START";

export const getArticles = () => {
  return {
    type: GET_ARTICLES_INIT
  };
};

export const getArticlesInitialize = () => {
  return {
    type: GET_ARTICLES_START
  };
};

export const getSuccessResult = (articles, numberOfPages, lastURL) => {
  return {
    type: GET_ARTICLES_SUCCESS,
    articles,
    numberOfPages,
    lastURL
  };
};

export const clearArticles = () => {
  return {
    type: CLEAR_ARTICLES
  };
};

export const clearArticlesStart = () => {
  return {
    type: CLEAR_ARTICLES_START
  };
};

export const clearResults = () => {
  return {
    type: CLEAR_ARTICLES_SUCCESS
  };
};

export const getResultFail = error => {
  return {
    type: GET_ARTICLES_FAIL,
    error
  };
};