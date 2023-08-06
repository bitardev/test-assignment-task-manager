<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <TransitionRoot as="template" :show="props.open">
    <Dialog as="div" class="relative z-10" @close="closeDialogModal">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                    <button type="button" class="relative rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="closeDialogModal">
                      <span class="absolute -inset-2.5" />
                      <span class="sr-only">Close panel</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-base font-semibold leading-6 text-gray-900">Add new task</DialogTitle>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <div class="pb-4">
                      <label for="title" class="block text-sm font-medium leading-6 text-gray-900">Title</label>
                      <div class="mt-2">
                        <input id="title" v-model="title" name="title" type="text" required="" class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                    <div>
                      <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                      <div class="mt-2">
                        <textarea rows="4" v-model="description" id="description" name="description" required="" class="block w-full px-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                      </div>
                    </div>
                  </div>
                  <div class="flex justify-end px-4 sm:px-6">
                    <button @click="closeDialogModal" type="button" class="inline-flex items-center rounded-md bg-gray-200 border-spacing-1 px-6 py-2 mr-2 text-sm font-semibold text-gray-500 shadow-sm hover:bg-gray-100 outline-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Cancel
                    </button>
                    <button @click="submitTask" type="button" class="inline-flex items-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      Save
                    </button>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot,
} from '@headlessui/vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import { XMarkIcon } from '@heroicons/vue/24/outline';
import { useStore } from 'vuex';

const emit = defineEmits(['update:isDialogOpen']);
const store = useStore();

const props = defineProps(['open', 'task']);

const title = ref('');
const description = ref('');

const resetForm = () => {
  setTimeout(() => {
    title.value = '';
    description.value = '';
  }, 500);
};

const closeDialogModal = () => {
  resetForm();
  emit('update:isDialogOpen', false);
};

onUpdated(() => {
  title.value = props.task?.title || '';
  description.value = props.task?.description || '';
});

const submitTask = () => {
  if (title.value !== '' && description.value !== '') {
    console.log(title.value, description.value);
    if (props.task.title) {
      store.dispatch('editTask', {
        id: props.task.id,
        title: title.value,
        description: description.value,
      });
    } else {
      store.dispatch('addTask', {
        title: title.value,
        description: description.value,
      });
    }
  }
  closeDialogModal();
  resetForm();
};

</script>
