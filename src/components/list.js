import browserApi from "./../utils/unsplash";
import Item from "./item";

const List = async () => {
    let photos = [];

    try {
        const { response } = await browserApi.photos.list();
        const { results } = response;

        photos = results;
    } catch (error) {
        alert('Could not get unsplash photos! Try again later!');
        console.log(error.message);
    }

    return /* html */ `
        <ul class="max-w-container py-6 mx-auto grid gap-y-10 px-4 sm:grid-cols-2 sm:gap-x-8 lg:gap-x-12 lg:gap-y-16 lg:px-10 lg:py-10">
            ${photos.map(Item).join('')}
        </ul>
    `;
};

export default List;
