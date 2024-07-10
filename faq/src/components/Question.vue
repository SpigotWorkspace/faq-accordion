<script setup lang="ts">
import {computed, ref} from "vue";
import iconPlus from "@/assets/images/icon-plus.svg"
import iconMinus from "@/assets/images/icon-minus.svg";

defineProps<{question: string, answer: string}>();

const show = ref(false);
const imageSrc = computed(() => show.value ? iconMinus : iconPlus);

function toggle() {
  show.value = !show.value
}
</script>

<template>
  <div id="question-box">
    <p class="question">{{question}}</p>
    <img :src="imageSrc" alt="icon" @keydown.enter="toggle" @click="toggle" style="width: 1.6vmax" tabindex="0">
  </div>
  <div v-show="show" id="answer-box">
    <p class="answer">{{answer}}</p>
  </div>
</template>

<style scoped>
#question-box {
  display: flex;
  flex-basis: 100%;
  align-items: flex-start;
  justify-content: space-between;
}
.question {
  color: hsl(292, 42%, 14%);
  font-weight: 700;
  font-size: 0.938vmax
}
.question:hover {
  color: #e18de7;
}
#answer-box {
  color: hsl(292, 16%, 49%);
  font-weight: 400;
  font-size: 0.833vmax;
  margin-top: 2vh;
}
</style>