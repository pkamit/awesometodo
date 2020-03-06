<template>
  <q-item
    @click="updateTask({id:id , updates: {completed : ! task.completed}})"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class=" { 'text-strikethrough' : task.completed }">{{ task.name }} {{ id}}</q-item-label>
    </q-item-section>
    <q-item-section side>
      <div class="row">
        <div class="column justify-center q-mr-xs">
          <q-icon name="event" size="16px" />
        </div>

        <div class="column">
          <q-item-label caption>{{ task.duedate }}</q-item-label>
          <q-item-label>
            <small>{{ task.duetime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side>
      <q-btn 
      @click.stop="prompttoDelete(id)"
      dense flat round color="red" icon="delete" />
    </q-item-section>
  </q-item>
</template>
<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask" , "deleteTask"]),
    prompttoDelete(id) {
            this.$q.dialog({
        title: 'Confirm',
        message: 'Really Delete!',
        cancel: true,
        persistent: true
      }).onOk(() => {
         this.deleteTask(id)
      })

    }
  }
};
</script>
<style>
</style>