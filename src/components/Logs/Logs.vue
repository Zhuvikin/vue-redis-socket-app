<template>
    <div id="#Logs">
        <h1>Logs</h1>
        <div class="page-content">
            <table>
                <tbody>
                <tr v-for="item in events" v-bind:key="item.time">
                    <td class="uppercase">{{ item.type }}</td>
                    <td>{{ item.info }}</td>
                    <td class="wide-cell">{{ item.time }}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import format from 'date-fns/format'
    import parse from 'date-fns/parse'

    export default {
        name: 'Logs',
        computed: {
            events() {
                return this.$store.state.events.map(({args, time}) => {
                    const type = args[0]
                    return ({
                        type,
                        info: args.slice(1),
                        time: format(parse(time * 1000, 'x'), 'DD/MM/YYYY HH:mm:ss'),
                    })
                })
            },
        },
    }
</script>

<style>
    .uppercase {
        text-transform: uppercase;
    }
</style>
