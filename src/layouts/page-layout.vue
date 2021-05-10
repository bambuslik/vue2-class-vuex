<template>
  <div>
    <p>
      page layout
    </p>
    <div v-if="$route.meta.layout === 'profile-layout'">
      <ProfileLayout/>
    </div>
    <div v-else>
      <AuthLayout/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ProfileLayout from "@/layouts/components/profile-layout/profile-layout.vue"
import AuthLayout from "@/layouts/components/auth-layout/auth-layout.vue"


@Component({
  components: {
    ProfileLayout,
    AuthLayout
  }
})
export default class PageLayout extends Vue {

}
</script>

<style scoped>

</style>