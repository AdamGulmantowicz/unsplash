import {
    createApi
} from "unsplash-js";

const browserApi = createApi({
    apiUrl: 'http://localhost:3000/unsplash',
});

console.log(browserApi);

(async function () {
    const rest = await browserApi.photos.list();

    console.log(rest);
})()