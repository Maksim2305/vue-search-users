<template>
  <div class="profile-container">
    <div v-if="currentUser.id" class="profile-content">
      <div class="profile-content-avatar">
        <img src="../assets/big-image-icon.svg" alt="user-avatar" />
      </div>
      <div class="profile-content-info">
        <div class="profile-content-info-name">{{ currentUser.name }}</div>
        <div class="profile-content-info-email">
          <div>
            email: <span>{{ currentUser.email }}</span>
          </div>
        </div>
        <div class="profile-content-info-phone">
          <div>
            phone: <span>{{ currentUser.phone }}</span>
          </div>
        </div>
        <div class="profile-content-info-description">
          <div>О себе:</div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </span>
        </div>
      </div>
    </div>
    <div v-else class="empty-text">
      выберите сотрудника, чтобы посмотреть его профиль
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      user: null,
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  width: 100%;
  display: flex;
  justify-content: center;
  border-left: 1px solid #e0e0e0;
  background: #fdfdfd;
  border-radius: 0 10px 10px 0;
  padding: 30px 30px 30px 20px;
}
.empty-text {
  margin: auto;
  font-weight: 400;
  font-size: 14px;
  color: #76787d;
}
.profile-content {
  display: flex;
  gap: 60px;

  .profile-content-info {
    display: flex;
    flex-direction: column;

    .profile-content-info-name {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #000;
    }
    .profile-content-info-email,
    .profile-content-info-phone,
    .profile-content-info-description {
      margin-bottom: 10px;
      font-weight: 600;
      font-size: 14px;
      line-height: 140%;
      color: #333;
      & span {
        font-weight: 400;
        color: #76787d;
      }
    }
    .profile-content-info-phone {
      margin-bottom: 20px;
    }
    .profile-content-info-description {
      & div {
        margin-bottom: 25px;
      }
    }
  }
}
</style>
