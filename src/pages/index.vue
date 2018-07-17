<template>
  <q-page padding class="card-examples row items-start">
    <q-card inline class="bigger q-ma-sm">
      <q-card-media>
        <img src="~assets/Li.jpg">
      </q-card-media>
      <q-card-title class="relative-position">
        <!-- <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 8px; transform: translateY(-50%);" /> -->

        <div class="ellipsis">Dr.Xupeing Li</div>
        <q-rating slot="subtitle" v-model="stars" :max="5" />
        <!-- <div slot="right" class="row items-center">
        </div> -->
      </q-card-title>
    </q-card>
</q-page>
</template>

<script>
export default {
  data () {
    return {
      stars: 3,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>

<style lang="stylus">
.card-examples
  .q-card
    width 300px
  .bigger
    width 450px
    max-width 90vw
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
</style>
