<template>
  <div>
    <h1>TUS COMPRAS</h1>
    <hr style="color: red;">
    <table>
        <thead>
            <tr>
                <td>
                    Núm. Pedido
                </td>
                <td>
                    ID Cubo
                </td>
                <td>
                    Fecha
                </td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="com in compras" :key="com">
                <td>{{ com.idPedido }}</td>
                <td>{{ com.idCubo }}</td>
                <td>{{ com.fechaPedido }}</td>
            </tr>
        </tbody>
    </table>
    <button><router-link to="/pedidos">Realizar Pedido</router-link></button>
  </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';

let service = new ServiceCubos()

export default {
    name: "ComprasComponent",
    data(){
        return{
            compras:[]
        }
    },
    mounted(){
        service.getCompras().then(result=>{
            this.compras = result
            console.log(result) 
            console.log(this.compras)
        })
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table th, table td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
}

table th {
    background-color: #f8f9fa;
    font-weight: bold;
}

table tr:nth-child(even) {
    background-color: #f2f2f2;
}

hr {
    margin-top: 20px;
}
</style>
