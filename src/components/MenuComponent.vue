<template>
  <div>
    <nav
      class="navbar navbar-expand-sm navbar-dark bg-dark"
      aria-label="Third navbar example"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">CUBOS RUBIK</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarsExample03">
          <ul class="navbar-nav me-auto mb-2 mb-sm-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Marcas</a
              >
              <ul class="dropdown-menu" >
                <li v-for="mar in marcas" :key="mar" :value="mar">
                  <router-link :to="'/selected/' + mar">{{ mar }}</router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                >Seguridad</a
              >
              <ul class="dropdown-menu">
                <li><router-link to="/login">Iniciar Sesión</router-link></li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/perfil"
                >Perfil</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
  
  <script>
import ServiceCubos from '@/services/ServiceCubos';
let service = new ServiceCubos()
export default {
  name: "MenuComponent",
  data(){
    return{
      marcas : []
    }
  },
  mounted(){
    service.getMarcas().then(result=>{
      this.marcas = result
    })
  }
};
</script>
  
  <style scoped>
/* Estilo para el contenedor del navbar */
.navbar {
  background-color: #343a40;
  padding: 10px 0;
}

/* Estilo para los elementos del menú */
.nav-item {
  margin-left: 20px;
}

.nav-link {
  color: #fff !important;
  font-size: 1.1em;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #ff6347 !important;
}

/* Estilo para el dropdown de marcas */
.nav-item.dropdown .dropdown-menu {
  background-color: #444;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
}

.nav-item.dropdown .dropdown-toggle {
  color: #fff !important;
  font-weight: bold;
}

.dropdown-menu li {
  padding: 8px 16px;
}

.dropdown-menu li a {
  color: #fff;
  font-size: 1.1em;
  text-transform: none;
}

.dropdown-menu li a:hover {
  background-color: #ff6347;
  color: #fff;
}

/* Estilo para el dropdown de seguridad */
.nav-item.dropdown:last-child .dropdown-menu {
  background-color: #444;
  border-radius: 8px;
}

.nav-item.dropdown:last-child .dropdown-toggle {
  color: #fff !important;
}

.dropdown-menu li a {
  color: #fff;
  font-size: 1.1em;
  text-transform: none;
}

.dropdown-menu li a:hover {
  background-color: #ff6347;
  color: #fff;
}

.form-control {
  width: 250px;
  margin-top: 10px;
  border-radius: 5px;
  padding: 8px 15px;
}
</style>
