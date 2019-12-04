<template>
    <div>
        <h1>Hello world.</h1>
        <label>is show fields?: <input type="checkbox" v-model="flag"></label>
        <template v-if="flag">
            <input type="text" v-model="value">
            <p v-custom-if>this is a element with v-custom-if directive ({{value}})</p>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'App',
        data() {
            return {
                flag: true,
                value: '',
            }
        },
    }
</script>
