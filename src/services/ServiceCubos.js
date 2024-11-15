import Global from "@/Global"
import axios from "axios"

export default class ServiceCubos {

    constructor() {
        this.token = localStorage.getItem('token') || null
    }

    getCubos() {
        return new Promise(function (resolve) {
            let cubos = []
            let request = "api/cubos"
            let url = Global.urlApi + request
            axios.get(url).then((response) => {
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getCubo(id) {
        return new Promise(function (resolve) {
            let cubo = {}
            let request = "api/cubos/" + id
            let url = Global.urlApi + request
            axios.get(url).then((response) => {
                cubo = response.data
                resolve(cubo)
            })

        })
    }

    getMarcas() {
        return new Promise(function (resolve) {
            let marcas = []
            let request = "api/cubos/marcas"
            let url = Global.urlApi + request
            axios.get(url).then((response) => {
                marcas = response.data
                resolve(marcas)
            })
        })
    }

    getCubosMarca(marca) {
        return new Promise(function (resolve) {
            let cubos = []
            let request = "api/cubos/cubosmarca/" + marca
            console.log(request)
            let url = Global.urlApi + request
            axios.get(url).then((response) => {
                cubos = response.data
                resolve(cubos)
            })
        })
    }

    getToken(user) {
        return new Promise((resolve) => {
            let request = "api/manage/login"
            let url = Global.urlApi + request
            axios.post(url, user).then(response => {
                this.token = response.data.response
                localStorage.setItem('token', this.token)
                resolve()
            })
        })
    }

    getPerfilUsuario() {
        return new Promise((resolve) => {
            if (!this.token) {
                return Promise.reject("No se ha podido autenticar")
            }
            let usuario = {}
            let request = "api/manage/perfilusuario"
            let url = Global.urlApi + request
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(response => {
                usuario = response.data
                resolve(usuario)
                console.log(usuario)
            })
        })
    }

    getComentarios(id) {
        return new Promise((resolve) => {
            let comentarios = []
            let request = "/api/ComentariosCubo/GetComentariosCubo/" + id
            let url = Global.urlApi + request
            axios.get(url).then(response => {
                comentarios = response.data
                console.log(comentarios)
                resolve(comentarios)
            })
        })
    }

    getCompras() {
        return new Promise((resolve) => {
            let compras = []
            let request = "api/compra/comprasusuario"
            let url = Global.urlApi + request
            axios.get(url, {
                headers: {
                    'Authorization': 'Bearer ' + this.token
                }
            }).then(response => {
                compras = response.data
                console.log(compras)
                resolve(compras)
            })
        })
    }
}
