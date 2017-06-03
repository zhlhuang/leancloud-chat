import Leancloud from './components/Index.vue'
Leancloud.install = function(Vue) {
    Vue.component(Leancloud.name, Leancloud);
};

export default Leancloud;