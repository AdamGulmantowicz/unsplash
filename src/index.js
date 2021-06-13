import List from "./components/list";

async function render(selector, Component) {
    const element = document.getElementById(selector);
    let content = '';
    if (Component.constructor.name === 'AsyncFunction') {
        content = await Component();
    } else {
        content = Component();
    }

    element.insertAdjacentHTML('afterbegin', content);
}

render('content', List);
