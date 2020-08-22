import axios from 'axios';

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyDuxz2MfxjJE9tWPtWa3pD2uj3FsUd742M";

export default {
    search: function(query) {
        return axios.get(BASEURL + query + APIKEY);
    }
}