<template>
  <div class="cubos-container">
    <h1>Bienvenido</h1>
    <hr />
    <br />
    <div class="cub-card" v-for="cub in cubos" :key="cub.nombre">
      <img :src="cub.imagen" alt="Imagen del cubo" />
      <h3>{{ cub.nombre }}</h3>
      <p>{{ cub.precio }}</p>
      <router-link :to="'/detail/' + cub.idCubo"
        ><button class="btn btn-info">Detalle</button></router-link
      >
    </div>
  </div>
</template>
  
  <script>
import ServiceCubos from "@/services/ServiceCubos";
let service = new ServiceCubos();

export default {
  name: "HomeComponent",
  data() {
    return {
      cubos: [],
    };
  },
  mounted() {
    service.getCubos().then((result) => {
      this.cubos = result;
    });
  },
};
</script>
  
  <style scoped>
.cubos-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* Tarjetas en filas automáticas */
  gap: 20px; /* Espacio entre las tarjetas */
  padding: 20px;
}

.cub-card {
  background-color: #f8f9fa; /* Color de fondo */
  border: 1px solid #ddd; /* Borde */
  border-radius: 8px; /* Bordes redondeados */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Sombra */
  padding: 10px;
  text-align: center;
  transition: transform 0.3s; /* Animación */
}

.cub-card:hover {
  transform: scale(1.05); /* Aumenta el tamaño en hover */
}

.cub-card img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
}

.cub-card h3 {
  font-size: 1.2em;
  margin: 10px 0 5px;
}

.cub-card p {
  font-size: 1em;
  color: #333;
  margin: 5px 0;
}

hr {
  width: 80%; /* Ajusta el ancho del separador */
  height: 2px;
  background-color: red; /* Color del separador */
  margin: 20px auto; /* Centra el separador y añade espacio alrededor */
  border: none; /* Elimina el borde predeterminado */
}
</style>
  