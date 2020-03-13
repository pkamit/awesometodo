<template>
  <q-page class="q-pa-md">
    <q-list bordered separator
    v-if="Object.keys(tasks).length"
    >
      <task v-for="(task , key ) in tasks" :key="key" :task="task" :id="key"></task>
    </q-list>
    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn 
      @click="showAddTask = true"
      color="primary" round size="24px" icon="add" />
    </div>
    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false"
      ></add-task>
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showAddTask: true
    }
  },

  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  components: {
    'task': require("components/Tasks/Task.vue").default,
    'add-task': require("components/Tasks/Modals/AddTask.vue").default
  }
};
</script>
<style>
</style>
