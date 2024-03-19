const {createApp} = Vue
createApp({
    data(){
        return{
          mail: []
        }
    },
    methods: {

        callApi(){

            for (let i = 0; i < 10; i++) {
                const element = this.mail[i];

                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((response) =>{
                this.mail.push(response.data.response)
            })
                
            }
            console.log(this.mail);
            
        }
    },
    mounted(){
        this.callApi()
    }
}).mount("#app")