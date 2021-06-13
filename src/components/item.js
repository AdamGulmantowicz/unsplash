import config from "../config";

const { breakpoints, unsplashSuffix } = config;

const Item = ({ alt_description, urls, created_at, user, description }) => {
    const { small, regular, full } = urls;
    const { name, links } = user;
    const { html } = links;
    const dateObj = new Date(created_at);

    let finalDescription = description? description : alt_description;

    if (!Boolean(finalDescription)) {
        finalDescription = 'description'
    }

    return /* html */ `
        <li class="rounded-card filter drop-shadow-card overflow-hidden bg-white
            flex flex-col pt-3 mx-auto pb-2 px-4 max-w-card
            lg:max-w-card-big lg:w-full lg:justify-end lg:relative lg:h-card-lg
            lg:px-7 lg:pb-6
        ">
            <h3 class="text-2xl font-bold capitalize pb-3 lg:z-10 lg:relative lg:text-5xl lg:pb-0">${description? description : finalDescription}</h3>
            <picture class="-mx-4 h-card-image flex-grow lg:absolute lg:inset-0 lg:z-0 lg:h-full lg:mx-0">
                <source srcset="${full}" media="(min-width: ${breakpoints.lg})">
                <source srcset="${regular}" media="(min-width: ${breakpoints.sm})">
                <img class="w-full h-full object-cover" src="${small}" alt="${alt_description? alt_description : finalDescription}">
            </picture>
            <div class="flex flex-grow-0 pt-2 space-x-7 h-14 lg:z-10 lg:relative lg:pt-3 lg:h-auto">
                <span class="text-sm font-bold
                    lg:text-2xl lg:leading-8
                ">by</span>
                <a href="${html}?${unsplashSuffix}" class="self-center text-lg text-violet-link underline leading-6 lg:text-4xl">${name}</a>
                <span class="text-sm font-bold lg:text-2xl lg:leading-8 ">on</span>
                <time class="self-center text-lg leading-6 lg:text-4xl">${dateObj.getDate()}/${dateObj.getMonth()}/${dateObj.getFullYear()}</time>
            </div>
            <div class="hidden absolute bottom-0 left-0 w-full h-60 bg-card-bg lg:block" ></div>
        </li>
    `
};

export default Item;
