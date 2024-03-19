const {createApp} = Vue
createApp({
    data(){
        return{
            
        }
    },
    methods: {

        callApi(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) =>{
                console.log(response.data.response)
            })
        }
    },
    mounted(){

        this.callApi()
    }
}).mount("#app")