<template>
    <div class="wrapper sidebar-wrapper">
        <div id="sidebar">
            <h1>Sidebar</h1>
            <router-link to="/logs" class="btn">Logs</router-link>
            <router-link to="/data" class="btn">Data</router-link>
            <router-link to="/addData" class="btn">Add Data</router-link>
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

    .btn {
        display: block;
        text-decoration: none;
        text-align: center;
        vertical-align: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        color: #212529;
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        margin-bottom: 1rem;
    }

    .btn:hover {
        color: #212529;
        background-color: #e2e6ea;
        border-color: #dae0e5;
    }
</style>
