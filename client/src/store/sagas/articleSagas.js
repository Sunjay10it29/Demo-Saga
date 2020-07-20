import { getArticlesApi } from '../../api/articleApi'
import * as actions from "../actions/articleActions";
import { put, takeEvery,call } from "@redux-saga/core/effects";

export function* workerArticlesSaga(action) {
  yield put(actions.getArticlesInitialize());
  try {
    const articles = yield call(getArticlesApi)
    if(articles !== null || articles !== undefined){
        yield put( actions.getSuccessResult(articles.response.results, articles.response));
    }
  } catch (err) {
    yield put(actions.getResultFail(err));
  }
}

export function* watchArticlesSaga() {
  yield takeEvery(actions.GET_ARTICLES_INIT, workerArticlesSaga);
  yield takeEvery(actions.CLEAR_ARTICLES, clearArticlesSaga);
}

export function* clearArticlesSaga(action) {
  yield put(actions.clearArticlesStart());
  yield put(actions.clearResults());
}
