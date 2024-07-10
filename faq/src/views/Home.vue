<script setup lang="ts">
import questions from "@/assets/questions.json";
import Question from "@/components/Question.vue";
</script>

<template>
  <div style="position: absolute">
    <div id="top-background"></div>
    <div id="bottom-background"></div>
  </div>
  <div id="flex-container">
    <div id="dialog-box">
      <div style="margin: 8%">
        <div id="headline-box">
          <img src="@/assets/images/icon-star.svg" alt="icon-star" style="width: 1em">
          <p style="margin-left: 1vw">FAQs</p>
        </div>
        <div  v-for="(question, index) in questions">
          <Question :question="question.question" :answer="question.answer"/>
          <hr v-if="index != questions.length - 1">
        </div>

      </div>
    </div>
  </div>
</template>

<style scoped>
#top-background {
  background-image: url("@/assets/images/background-pattern-desktop.svg");
  width: 100vw;
  height: 40vh;
}
hr {
  margin-top: 2vh;
  margin-bottom: 2vh;
  border-top: 1px solid white;
}
#bottom-background {
  width: 100vw;
  height: 60vh;
  background-color: #ccc6c7;
}
#flex-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
#dialog-box {
  background-color: white;
  border-radius: 20px;
  width: 40vmax;
  min-height: 40vh;
}
#headline-box {
  margin-bottom: 4vh;
  display: flex;
  flex-direction: row;
  font-size: 2.604vmax;
  font-weight: 900;
  flex-basis: 100%;
  color: hsl(292, 42%, 14%);
}
</style>