/* eslint-disable no-unused-vars */
import { createStore } from 'vuex';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

export default createStore({
  namespaced: true,
  state: {
    tasksList: [],
  },
  getters: {
    tasksList(state) {
      return state.tasksList;
    },
  },
  mutations: {
    initTasksList(state, tasks) {
      state.tasksList = tasks;
    },
    updateTasksList(state, task) {
      state.tasksList.push(task);
    },
    deleteTaskFromStore(state, task) {
      state.tasksList.splice(state.tasksList.indexOf(task), 1);
    },
  },
  actions: {
    async addTask({ state, commit, getters }, task) {
      const url = 'https://64cad73f700d50e3c7054fc8.mockapi.io/tasks';
      const res = await axios.post(url, {
        title: task.title,
        description: task.description,
      });
      commit('updateTasksList', await res.data);
      console.log(res.data.id);
      console.log(res.data.title);
      console.log(res.data.description);
      console.log(res.data.json);
    },
    async editTask({ state, commit, getters }, task) {
      const selectedTask = state.tasksList.find((t) => t.id === task.id);
      selectedTask.title = task.title;
      selectedTask.description = task.description;
      const url = `https://64cad73f700d50e3c7054fc8.mockapi.io/tasks/${task.id}`;
      const res = await axios.put(url, {
        title: task.title,
        description: task.description,
      });
      // console.log(res.data.json);
    },
    getTaskList({ commit, getters }, url) {
      axios.get(url).then((result) => {
        // console.log(result.data);
        commit('initTasksList', result.data || []);
      });
    },
    deleteTask({ state, commit, getters }, id) {
      const task = state.tasksList.find((t) => t.id === id);
      const url = `https://64cad73f700d50e3c7054fc8.mockapi.io/tasks/${id}`;
      commit('deleteTaskFromStore', task);
      axios.delete(url);
    },
  },
  modules: {
  },
});
