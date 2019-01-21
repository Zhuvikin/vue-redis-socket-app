<template>
    <div id="app">
        <Sidebar/>
        <Content/>
    </div>
</template>

<script>
    import Content from './components/Content'
    import Sidebar from './components/Sidebar'
    import { ADD_DATA, ADD_EVENT } from './mutation-types'

    export default {
        name: 'app',
        components: {
            Content,
            Sidebar,
        },
        sockets: {
            initialData: function (data) {
                this.$store.commit({
                    type: ADD_DATA,
                    items: data,
                })
            },
            addedData: function (item) {
                this.$store.commit({
                    type: ADD_DATA,
                    items: [item],
                })
            },
            newEvent: function (event) {
                this.$store.commit({
                    type: ADD_EVENT,
                    event,
                })
            },
        },
    }
</script>

<style>
    html, body {
        margin: 0;
        height: calc(100% - 1rem);
        min-width: 800px;
    }

    h1 {
        margin-top: 0;
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: table;
        width: calc(100% - 2rem);
        height: 100%;
        border-collapse: collapse;
    }

    .wrapper {
        display: table-cell;
        vertical-align: top;
        height: 100%;
        padding: 2rem;
        background-color: white;
        border: 2rem solid #e2e6ea;
    }

    .page-content {
        padding: 2rem 10%;
    }

    .btn {
        display: inline-block;
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
        transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
        color: #212529;
        background-color: #f8f9fa;
        border: 1px solid #f8f9fa;
        margin-bottom: 1rem;
        min-width: 200px;
        cursor: pointer;
    }

    .btn-fill-width {
        display: block;
    }

    .btn:hover {
        color: #212529;
        background-color: #e2e6ea;
        border-color: #dae0e5;
    }

    .btn-primary {
        color: #fff;
        background-color: #17a2b8;
        border-color: #17a2b8;
    }

    .btn-primary:hover {
        color: #fff;
        background-color: #138496;
        border-color: #117a8b;
    }

    .btn[disabled="disabled"] {
        background-color: gray;
    }

    .error {
        color: red;
    }
</style>
