<template>
    <div class="marca-container">
      <h2 class="marca-title">Cubos de la marca {{ marca.marca }}</h2>
      <div class="cubos-list">
        <div class="cub-card" v-for="cub in cubos" :key="cub.nombre">
          <img :src="cub.imagen" alt="Imagen del cubo" class="cub-image" />
          <div class="cub-info">
            <h3 class="cub-name">{{ cub.nombre }}</h3>
            <p class="cub-price">{{ cub.precio }}€</p>
            <router-link :to="'/detail/' + cub.idCubo">
              <button class="btn btn-info">Detalle</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import ServiceCubos from '@/services/ServiceCubos';
  let service = new ServiceCubos();
  
  export default {
    name: "MarcaComponent",
    data() {
      return {
        cubos: [],
        marca: ""
      };
    },
    mounted() {
      let marca = this.$route.params;
      this.marca = marca;
      console.log(marca.marca);
      service.getCubosMarca(marca.marca).then(result => {
        console.log(result);
        this.cubos = result;
      });
    }
  };
  </script>
  
  <style scoped>
  .marca-container {
    text-align: center;
    padding: 20px;
  }
  
  .marca-title {
    font-size: 2em;
    color: #333;
    margin-bottom: 20px;
  }
  
  .cubos-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 10px;
  }
  
  .cub-card {
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
  }
  
  .cub-card:hover {
    transform: translateY(-10px);
  }
  
  .cub-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .cub-info {
    margin-top: 10px;
  }
  
  .cub-name {
    font-size: 1.2em;
    color: #333;
    margin: 10px 0;
  }
  
  .cub-price {
    font-size: 1em;
    color: #888;
    margin-bottom: 20px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  