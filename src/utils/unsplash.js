import { createApi } from "unsplash-js";
import config from "./../config";

const browserApi = createApi({
    apiUrl: `${window.location.origin}${config.unsplashProxy}`,
});

export default browserApi;
