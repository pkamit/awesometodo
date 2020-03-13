<template>
  <q-card>
      <modal-header>Add Task Please</modal-header>
    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
          <modal-taskname :name.sync="taskToSubmit.name"></modal-taskname>
          <modal-duedate :dueDate.sync="taskToSubmit.dueDate" 
          @clear="clearDueDate"
          >  </modal-duedate>
        <div class="row q-mb-sm">
          <q-input label="Due time" outlined v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy transition-show="scale" transition-hide="scale">
                  <q-time v-model="taskToSubmit.dueTime" with-seconds format24h />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn label="Save" color="primary" type="submit" />
      </q-card-actions>
        <pre>
    {{ taskToSubmit }}
  </pre>
    </form>
  </q-card>

</template>
<style>
</style>
<script>
import { mapActions } from "vuex"
export default {
  data() {
    return {
      taskToSubmit: {
        name: "",
        dueDate: "",
        dueTime: "",
        completed: false
      }
    };
  },
  methods: {
    ...mapActions('tasks' , ['addTask']),
    submitForm() {
      this.$refs.name.validate();
      if (!this.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      //console.log("submit form");
      this.addTask(this.taskToSubmit);
      this.$emit('close')
    },
    clearDueDate() {
				this.taskToSubmit.dueDate = ''
				this.taskToSubmit.dueTime = ''
			}

  },
  components : {
     'modal-header': require("components/Tasks/Modals/Shared/ModalHeader.vue").default,
     'modal-taskname': require("components/Tasks/Modals/Shared/ModalTaskName.vue").default,
     'modal-duedate': require("components/Tasks/Modals/Shared/ModalDueDate.vue").default,
    
  }
};
</script>