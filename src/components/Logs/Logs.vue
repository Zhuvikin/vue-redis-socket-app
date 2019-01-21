<template>
    <div id="#Logs">
        <h1>Logs</h1>
        <div class="page-content">
            <table>
                <tbody>
                <tr v-for="item in events" v-bind:key="item.time">
                    <td>{{ item.time }}</td>
                    <td>
                        <pre>{{ item.args }}</pre>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Logs',
        computed: {
            events () {
                return this.$store.state.events
            }
        }
    }
</script>
