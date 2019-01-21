<template>
    <div id="#DataPage">
        <h1>Data</h1>
        <div class="page-content">
            <table>
                <tbody>
                <tr v-for="item in dataItems" v-bind:key="item.id">
                    <td>{{ item.title }}</td>
                    <td>
                        <pre>{{ item.text }}</pre>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DataPage',
        computed: {
            dataItems () {
                return this.$store.state.dataItems
            }
        }
    }
</script>

<style>
    table {
        width: 100%;
        border-collapse: collapse;
    }

    td:first-child {
        width: 30%;
    }

    td {
        padding: 1rem;
        background-color: #f8f9fa;
        border-bottom: 1rem solid white;
    }

    pre {
        font-size: 16px;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
    }
</style>
