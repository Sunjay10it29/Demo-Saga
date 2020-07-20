import { apiCall } from './apiCall';

export function getArticlesApi(){
    return apiCall('GET', '/');
}
//calling API from server