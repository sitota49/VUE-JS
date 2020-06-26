new Vue({
    el: '#app',
    data:{
        inputText: ""
    },
    computed:{
        identicon: function(){
            return jdenticon.toSvg(this.inputText,200);
        }
    },
    methods:{
        onInput: function(){
            this.inputText= event.target.value;
        }
    }
});