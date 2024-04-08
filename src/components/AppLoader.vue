<template>
  <div class="loader"></div>
</template>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 50%;
  left: 120px;
  width: 48px;
  height: 48px;
  border: 5px solid #fff;
  border-bottom-color: #f50c04;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
