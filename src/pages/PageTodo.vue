<template>
  <q-page class="q-pa-md">
    <q-list 
    bordered 
    separator>
      <q-item v-for="task in tasks" :key="task.id" 
      @click="task.completed = ! task.completed"
      clickable
      v-ripple
      :class="!task.completed ? 'bg-orange-1' : 'bg-green-1'"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
          :class=" { 'text-strikethrough' : task.completed }"
          >{{ task.name }}</q-item-label>
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
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Go to shop",
          completed: true,
          duedate: "22/05/2018",
          duetime: "14:45"
        },
        {
          id: 2,
          name: "Go to banana",
          completed: false,
          duedate: "22/05/2018",
          duetime: "14:45"
        },
        {
          id: 3,
          name: "Go to apples",
          completed: false,
          duedate: "22/05/2018",
          duetime: "14:45"
        }
      ]
    };
  }
};
</script>
<style>
</style>
