<template>
    <div id="AddData">
        <h1>Add Data</h1>
        <div class="page-content">
            <form id="add-data-form" @submit.prevent="processForm">
                <div class="data-input">
                    <input type="text" value="" name="title" v-model="title" placeholder="Title" title="Title"
                           :disabled=isSubmitting
                           autocomplete="off"/>
                </div>
                <div class="data-input">
                <textarea type="text" value="" name="text" v-model="text" placeholder="Text" autocomplete="off"
                          :disabled=isSubmitting
                          title="Text"></textarea>
                </div>

                <div class="center">
                    <button :disabled=isSubmitting type="submit" class="btn btn-primary">Add</button>
                </div>

                <div class="center">
                    <span class="error" v-if="hasError">An error has occurred!</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    import { SERVER_URI } from '../../constants'

    export default {
        name: 'AddData',
        data() {
            return {
                title: '',
                text: '',
                isSubmitting: false,
                hasError: false,
            }
        },
        methods: {
            processForm: function () {
                this.isSubmitting = true
                this.hasError = false
                axios({
                    method: 'post',
                    url: `${SERVER_URI}/data`,
                    data: {title: this.title, text: this.text},
                    config: {headers: {'Content-Type': 'application/json'}},
                })
                    .then(() => {
                        this.isSubmitting = false
                        this.title = ''
                        this.text = ''
                    })
                    .catch(() => {
                        this.isSubmitting = false
                        this.hasError = true
                    })
            },
        },
    }
</script>

<style>
    .data-input {
        padding-right: 2rem;
    }

    .data-input input, textarea {
        width: 100%;
        margin-bottom: 2rem;
        font-size: 1rem;
        border: 1px solid #212529;
        padding: 1rem;
        border-radius: 3px;
    }

    textarea {
        min-width: 100%;
        resize: vertical;
        min-height: 10rem;
    }

    .data-input [disabled="disabled"] {
        background-color: #eee;
    }

    .center {
        text-align: center;
    }
</style>
