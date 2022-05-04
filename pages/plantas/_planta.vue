<template>
    <div>
        <h1>Planta {{plantaName}}</h1>
    </div>
</template>

<script>


export default {
   data(){
       return{
           param: null,
           plantaName: null,
       }
   },
   created(){
       //veremos que tenemos aquí nuestros params:
       this.plantaName= this.$route.params.planta;
       //console.log(this.$route.query)
   }
}
</script>
