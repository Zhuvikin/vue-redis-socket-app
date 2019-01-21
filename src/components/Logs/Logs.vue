<template>
    <div id="#Logs">
        <h1>Logs</h1>
        <div class="page-content">
            <table>
                <tbody>
                <tr v-for="item in events" v-bind:key="item.key">
                    <td class="uppercase nowrap">{{ item.type }}</td>
                    <td><pre>{{ item.info }}</pre></td>
                    <td class="wide-cell nowrap">{{ item.time }}</td>
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
                    let type = args[0]
                    if (args.length > 1) {
                        const operation = args[1]
                        if (operation === 'login') {
                            type = operation
                        }
                    }
                    return ({
                        type,
                        info: args.length > 1 ? args.slice(1) : '',
                        time: format(parse(time * 1000, 'x'), 'DD/MM/YYYY HH:mm:ss'),
                        key: time,
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
