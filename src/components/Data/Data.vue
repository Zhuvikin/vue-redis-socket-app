<template>
    <div id="#DataPage">
        <h1>Data</h1>
        <div class="page-content">
            <table>
                <tbody>
                <tr v-for="item in dataItems" v-bind:key="item.id">
                    <td>{{ item.title }}</td>
                    <td class="wide-cell">
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
