//this javascript is used to manage HTTP requests for your site to use
//it will only respond as it should to these / link extensions

import axios from 'axios'


export default {
    //function to fetch all states to display in app
    getAllStates() {
        return axios.get('/api/states').then( response => {
            return response.data
        })
    },
    //function to update
    setVisited(stateName, visited){
        let requestData = { visited: visited}
        return axios.patch('/api/states/' + stateName, requestData).then( response => {
            return response.data
        })
    },
    //used to fetch a single state from the state list
    getOneState(stateName){
        return axios.get('/api/state/' + stateName).then( response => {
            return response.data
        })
    }
}