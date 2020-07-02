<template>
  <div class="hello">
    {{msg}}
    <div class='button' @click='clickHandler'>
      Button
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  created() {
    console.log(this.$store.state.count);
  },
  methods: {
    ...mapActions({
      getAllTours: 'tours/getAllTours'
    }),
    clickHandler(){
      this.getAllTours().then((res)=>{
        console.log(res);
      })
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.button{
  background: gray;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
