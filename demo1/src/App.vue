<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <router-view></router-view>
  <el-button icon="el-icon-search" @click="addCount"
    >count is: {{ count }}</el-button
  >
</template>

<script lang="ts">
import {defineComponent, computed} from 'vue'
import {useStore} from './store/index'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  setup() {
    const store = useStore()
    const count: any = computed({
      get() {
        return store.state.count
      },
      set(value) {
        store.commit('increment', value)
      },
    })
    function addCount() {
      count.value += 1
    }
    return {
      count,
      addCount,
    }
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
