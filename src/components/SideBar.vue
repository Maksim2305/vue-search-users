<template>
  <div class="sidebar">
    <div class="sidebar-header">Поиск сотрудников</div>
    <input
      class="sidebar-input"
      type="text"
      id="search-input"
      placeholder="Введите id или имя"
      @input="debounceInput"
      v-model="searchText"
    />
    <div class="sidebar-result">Результаты</div>
    <AppLoader v-if="isLoading" />
    <UsersList v-else-if="!isLoading && usersList.length" :users="usersList" />
    <div v-else class="sidebar-empty-text">ничего не найдено</div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import UsersList from "./UsersList.vue";
import AppLoader from "./AppLoader.vue";
export default {
  name: "SideBar",
  components: {
    UsersList,
    AppLoader,
  },
  data() {
    return {
      searchText: "",
    };
  },
  methods: {
    ...mapActions(["fetchUsers"]),
    ...mapMutations(["setLoading"]),
    ...mapMutations(["setCurrentUser"]),
    async handlerInput() {
      try {
        await this.fetchUsers(this.searchText);
      } catch (err) {
        alert(err.message);
      }
      this.setLoading(false);
    },
    debounceInput() {
      this.setLoading(true);
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => {
        this.handlerInput();
      }, 250);
    },
  },
  computed: {
    ...mapGetters(["usersList", "isLoading"]),
  },
  watch: {
    searchText() {
      if (!this.searchText) {
        this.setCurrentUser({
          id: null,
        });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.sidebar {
  position: relative;
  background: #fdfdfd;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 27px 30px 27px 21px;

  .sidebar-header {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #333;
    margin-bottom: 22px;
  }
  .sidebar-input {
    border: 1.5px solid #e9ecef;
    border-radius: 8px;
    width: 240px;
    height: 46px;
    margin-bottom: 22px;
    font-weight: 400;
    font-size: 14px;
    color: #76787d;
    padding: 0px 16px;
    box-sizing: border-box;

    &:focus {
      outline: 1.75px solid #e9ecef;
    }
  }

  .sidebar-result {
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #333;
    margin-bottom: 10px;
  }
  .sidebar-empty-text {
    font-weight: 400;
    font-size: 14px;
    color: #76787d;
  }
}
</style>
