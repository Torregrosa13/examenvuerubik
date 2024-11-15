<template>
    <div class="login-container">
      <h1>Iniciar Sesión</h1>
      <form @submit.prevent="logIn()" class="login-form">
        <div class="form-group">
          <label for="email" class="form-label">Email</label>
          <input id="email" type="email" v-model="user.email" class="form-control" placeholder="Ingresa tu email" />
        </div>
  
        <div class="form-group">
          <label for="password" class="form-label">Contraseña</label>
          <input id="password" type="text" v-model="user.password" class="form-control" placeholder="Ingresa tu contraseña" />
        </div>
  
        <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import ServiceCubos from '@/services/ServiceCubos';
  let service = new ServiceCubos();
  
  export default {
    name: "LoginComponent",
    data() {
      return {
        user: {
          email: "",
          password: ""
        }
      };
    },
    methods: {
      logIn() {
        service.getToken(this.user).then(result => {
          this.$router.push('/');
          console.log(result);
          console.log(service.token);
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 20px;
  }
  
  h1 {
    font-size: 2rem;
    color: #2c3e50;
    margin-bottom: 30px;
  }
  
  .login-form {
    width: 100%;
    max-width: 400px;
    background-color: #f8f9fa;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-label {
    font-weight: 600;
    margin-bottom: 8px;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .form-control:focus {
    border-color: #007bff;
    outline: none;
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 12px;
    font-size: 1rem;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button[type="submit"]:hover {
    background-color: #0056b3;
  }
  </style>
  