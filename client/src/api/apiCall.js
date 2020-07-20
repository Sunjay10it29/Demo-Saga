import { API_ENDPOINT } from '../config';
import _ from 'lodash';
import axios from "axios";


export const ERROR_SOMETHING_WENT_WRONG = 'Something went wrong';


function handleStatus(json) {
    if(json.success){
        return json
    }
    switch(json.status){
        case 99 : throw new Error(ERROR_SOMETHING_WENT_WRONG);
        default : return json;
    }
}

export function apiCall(type, uri, req, body) {
    if (body) {
        body = JSON.stringify(body)
    }
    let params = [];
    _.forEach(req || {}, (val, key) => (
        params.push(`${key}=${encodeURIComponent(val)}`)
    ))
    let url = `${API_ENDPOINT}${uri}`
    if (params.length > 0) {
        url = `${url}?${params.join('&')}`
    }
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
    return axios.get(url, {
        method: type,
        credentials: 'include',
        headers: headers,
        body: body,
    }).then(data => {
        if (data.status === 200) {
            let results = [];
            results = [...data.data]
           return results[0]; //  Added 0 index as I just allow one document for now...
        }
        console.log(url, '>', data)
        console.log('body >>> ', body)
        throw new Error('API ERROR (Server)')
    }).then((json) => {
        console.log('||||||| API ', url, '\n', json)
        return handleStatus(json);
    })
}
