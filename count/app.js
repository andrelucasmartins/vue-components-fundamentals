Vue.component('click-counter', {
    template: '#click-count-template',
    data(){
        return{
            count: 0
        }
    }
})

new Vue({
    el: '#app'
})