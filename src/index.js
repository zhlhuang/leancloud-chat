import Leancloud from './leancloud'

const components = [
    Leancloud,
];


const install = function (Vue) {
    components.map(component => {
        Vue.component(component.name, component);
    });
}
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
