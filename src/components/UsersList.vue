<template>
  <div class="user-list">
    <div
      v-for="user in users"
      :key="user.id"
      class="user-list-item"
      @click="setUser(user)"
    >
      <div class="user-list-item-img">
        <img src="../assets/small-image-icon.svg" alt="user-img" />
      </div>
      <div class="user-list-item-info">
        <div class="user-list-item-name">{{ user.username }}</div>
        <div class="user-list-item-email">{{ user.email }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      //
    };
  },
  methods: {
    ...mapMutations(["setCurrentUser"]),
    setUser(user) {
      this.setCurrentUser(user);
    },
  },
};
</script>

<style lang="scss" scoped>
.user-list {
  width: 100%;
  max-height: 500px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: hidden;
}
.user-list-item {
  display: flex;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  //   width: 240px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;

  .user-list-item-info {
    transition: background 0.4s ease;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 15px;
    border-left: 1px solid #e0e0e0;
    border-radius: 0 10px 10px 0;

    &:hover {
      background: #e0e0e0;
    }
  }

  .user-list-item-name {
    font-weight: 600;
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  .user-list-item-email {
    font-weight: 400;
    font-size: 14px;
    color: #76787d;
    word-break: break-all;
  }
}
</style>
