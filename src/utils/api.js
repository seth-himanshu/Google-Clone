import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";

const params={
    key: 'AIzaSyAbV07mnLxMEg7yqN1HT0GxBkJTE6qlwnM',
    cx: '2489cf41a5c3d4910'
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
