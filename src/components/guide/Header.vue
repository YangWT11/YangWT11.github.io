<template>
    <div>
        <input v-model="text" placeholder="search" class="search-input" />
    </div>
</template>
<script>
export default {
    data(){
        return{
            text:null
        }
    }
}
</script>
<style lang="scss" scoped>
.search-input{
    background: transparent;
    border-radius:0.4rem;
    height: 1.5rem;
    width: 80%;
    outline: none;
    padding: 0 0.5rem;
    border:white solid 0.05rem;
    margin-top: 1rem;
}
</style>
