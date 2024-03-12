<template>
    <div>
        <img src="{{urlImg}}">
        <h3>{{nombre}}</h3>
        <p>{{precio}}</p>
    </div>
</template>
<script>
export default {
    name: 'Producto',// nombre del componente, tiene que coincidir con el nombre del archivo
    components: {},//
    methods: {},
    props:{ // estos son las variables que van a ingresar desde el componente padre.
        nombre: String,
        precio: Number,
        urlImg: String,
    }
}
</script>
<style scoped></style>