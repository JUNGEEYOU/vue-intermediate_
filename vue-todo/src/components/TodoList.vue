<template>
  <div>
      <transition-group name="list" tag="ul">
          <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
              <i class="checkBtn fas fa-check" v-on:click="toggleComplete({todoItem, index})"></i>
              <span v-bind:class="{textCompletd: todoItem.completed}">{{ todoItem.item }}</span>
              <span class="removeBtn" v-on:click="removeItem({todoItem, index})">
                  <i class="fas fa-trash"></i>
              </span>
          </li>
      </transition-group>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapMutations({
      removeItem : 'removeOneItem',
      toggleComplete: 'toggleOneItem'
    }),

    
    // removeTodo(todoItem, index) {
    //   this.$store.commit('removeOneItem', {todoItem, index});
    //   // this.$emit('removeItem', todoItem, index);
    // },
  

    // toggleComplete(todoItem, index){
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    //   // this.$emit('toggleItem', todoItem, index);
    // }
  },
  computed: {
    // todoItems() {
    //   return this.$store.getters.storedTodoItems;
    // }
    ...mapGetters(['storedTodoItems'])
  }

}
</script>

<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0; 
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.checkBtnCmpleted {
    color: #b3adad;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.textCompletd {
    text-decoration: line-through;
    color: #b3adad;
}

/* 리스트 아이템 트랜지션 효과 */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}

</style>