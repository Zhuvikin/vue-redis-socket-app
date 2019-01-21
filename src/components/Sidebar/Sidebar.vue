<template>
    <div class="wrapper sidebar-wrapper">
        <div id="sidebar">
            <h1>Sidebar</h1>
            <router-link to="/logs" class="btn btn-fill-width">Logs</router-link>
            <router-link to="/data" class="btn btn-fill-width">Data</router-link>
            <router-link to="/addData" class="btn btn-fill-width">Add Data</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Sidebar',
        props: {},
    }
</script>

<style>
    .sidebar-wrapper {
        width: 250px;
    }
</style>
