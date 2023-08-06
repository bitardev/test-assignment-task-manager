<!-- eslint-disable max-len -->
<template>
  <div class="relative flex min-h-screen flex-col justify-center bg-gray-50 py-6 sm:py-12">
    <div class="task-manager-wrapper px-6">
      <div class="flex justify-between pb-6">
        <h3 class="self-center">Task Manager</h3>
        <button @click="triggerAddTask()" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          <PlusIcon class="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
          New task
        </button>
      </div>
      <div class="grid gap-4 xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="task in tasksList" :key="task.id" class="flex bg-white justify-start px-3 pt-6 pb-5 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-xl w-full rounded-lg sm:px-5">
          <div class="flex-col w-full">
            <div class="task-manager--header pb-4 flex justify-between content-center">
              <h4 class="text-left font-bold self-center">{{ task.title }}</h4>
              <div class="grid gap-2 grid-cols-2">
                <button @click="setSelectedTask(task)" type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <PencilIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
                <button @click="store.dispatch('deleteTask', task.id)" type="button" class="inline-flex items-center rounded-md bg-white px-2 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  <TrashIcon class=" h-5 w-5 text-gray-400" aria-hidden="true" />
                </button>
              </div>
            </div>
            <p class="text-left">{{ task.description }}</p>
          </div>
        </div>
      </div>
      <AddTask v-model:isDialogOpen="isNewTaskDialogVisible" :open="isNewTaskDialogVisible" :task="selectedTask" />
      <!-- I used the same component for optimization purpose -->
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line import/no-extraneous-dependencies
import { PencilIcon, TrashIcon, PlusIcon } from '@heroicons/vue/20/solid';

import {
  ref, onMounted, computed,
} from 'vue';
import { useStore } from 'vuex';

import AddTask from './AddTask.vue';

const store = useStore();
const tasksList = computed(() => store.state.tasksList);

onMounted(() => {
  if (tasksList.value.length === 0) {
    store.dispatch('getTaskList', 'https://64cad73f700d50e3c7054fc8.mockapi.io/tasks');
    // console.log(tasksList);
  }
});

const isNewTaskDialogVisible = ref(false);
const selectedTask = ref({});

const setSelectedTask = (task) => {
  selectedTask.value = task;
  isNewTaskDialogVisible.value = true;
};

const triggerAddTask = () => {
  selectedTask.value = {};
  isNewTaskDialogVisible.value = true;
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
