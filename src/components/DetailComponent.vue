<template>
    <div class="detail-container">
        <h1>Detalle del Cubo</h1>
        <div class="cub-card">
            <img :src="cubo.imagen" alt="Imagen del cubo" />
            <table>
                <thead>
                    <tr>
                        <th>Marca y Modelo</th>
                        <th>Valoración</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ cubo.marca }} {{ cubo.modelo }}</td>
                        <td>{{ cubo.valoracion }}</td>
                        <td>{{ cubo.precio }}€</td>
                    </tr>
                </tbody>
            </table>
            <div v-if="comentarios.length == 0">
                <h3>Sin Comentarios</h3>
            </div>
            <div v-else>
                <ul>
                    <li v-for="com in comentarios" :key="com">Usuario {{com.idUsuario}} => {{ com.comentario }}</li>
                </ul>
            </div>
            <router-link to="/">
                <button class="btn btn-info">VOLVER</button>
            </router-link>
        </div>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';
let service = new ServiceCubos();

export default {
    name: "DetailComponent",
    data() {
        return {
            cubo: {},
            comentarios: []
        };
    },
    watch: {
        '$route.params.id'(newVal, oldVal) {   
               if(newVal != oldVal){
                this.generarCubo()
               }         
        }
    },
    methods: {
        generarCubo(id) {
            service.getCubo(id).then(result => {
                this.cubo = result;
            });
        },
        getComentarios(id){
            service.getComentarios(id).then(result=>{
                this.comentarios = result
            })
        }
    },
    mounted() {
        let id = this.$route.params.id
        this.generarCubo(id)
        this.getComentarios(id)
    }
};
</script>

<style scoped>
.detail-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

h1 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 20px;
}

.cub-card {
    width: 90%;
    max-width: 600px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 20px;
    text-align: center;
}

.cub-card img {
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-bottom: 20px;
    border-radius: 8px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
}

table th,
table td {
    padding: 10px;
    text-align: center;
    border: 1px solid #ddd;
}

table th {
    background-color: #007bff;
    color: white;
    font-weight: bold;
}

table td {
    font-size: 1rem;
    color: #333;
}

.btn {
    display: inline-block;
    padding: 10px 20px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.btn:hover {
    background-color: #0056b3;
}
</style>