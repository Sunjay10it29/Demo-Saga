import { all, fork,call, } from 'redux-saga/effects'
import { watchArticlesSaga} from './articleSagas';
import {showAlert} from '../../components/alertBox';
import {ERROR_SOMETHING_WENT_WRONG } from '../../api/apiCall'


export function* handleStatusError(error) {
    if (error.message === ERROR_SOMETHING_WENT_WRONG) {
        yield call(showAlert, 'Error', error.message)
    }else {
        yield call(showAlert, 'Error', error.message)
    }
}
export default function* rootSaga() {
    yield all([
        fork(watchArticlesSaga)
    ])
}