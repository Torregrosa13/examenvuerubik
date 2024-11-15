<template>
  <div>
    <h1>Realizar Pedido</h1>
    <form>
        <label>Elige un cubo</label>
        <select>
            <option :value="cub.idCubo" v-for="cub in cubos" :key="cub">{{ cub.marca }}</option>
        </select>
    </form>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
let service = new ServiceCubos()
export default {
    name: "PedidoComponent",
    data(){
        return{
            cubos: []
        }
    },
    mounted(){
        service.getCubos().then((response)=>{
            this.cubos = response 
        })
    } 
}
</script>

<style>

</style>