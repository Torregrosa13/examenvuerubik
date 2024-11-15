<template>
    <div>
        <h1>Mi Perfil</h1>
        <hr />
        <div v-if="usuario">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ usuario.nombre }}</td>
                        <td>{{ usuario.email }}</td>
                    </tr>
                </tbody>
            </table>
            <button class="btn btn-info"><router-link to="/compras">Ver Compras</router-link></button>
        </div>
        <div v-else>
            <p>no se han encontrado datos del usuario</p>
        </div>
    </div>
</template>

<script>
import ServiceCubos from '@/services/ServiceCubos';

let service = new ServiceCubos()

export default {
    name: "PerfilComponent",
    data() {
        return {
            usuario: null
        }
    },
    mounted() {
        service.getPerfilUsuario().then((response) => {
            this.usuario = response
            console.log(response)
        })
    }
}
</script>

<style></style>