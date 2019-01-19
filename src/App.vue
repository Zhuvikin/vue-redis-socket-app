<template>
    <div id="app">
        <Sidebar/>
        <Content/>
    </div>
</template>

<script>
    import Content from './components/Content'
    import Sidebar from './components/Sidebar'

    export default {
        name: 'app',
        components: {
            Content,
            Sidebar,
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
</style>
