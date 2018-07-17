<template>
  <q-page padding class="card-examples row justify-center">
      <q-card inline class="q-sm-xl">
        <q-card-title>
          Title
        </q-card-title>
        <q-list separator>
          <q-collapsible icon="explore" label="First">
            <div>
              Lorem ipsum dolor sit amet...
            </div>
          </q-collapsible>

          <q-collapsible icon="perm_identity" label="Second">
            <div>
              Lorem ipsum dolor sit amet...
            </div>
          </q-collapsible>

          <q-collapsible icon="shopping_cart" label="Third">
            <div>
              Lorem ipsum dolor sit amet...
            </div>
          </q-collapsible>
        </q-list>
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
      width 1000px
    .bigger
      width 1000px
      max-width 9000vw
    @media (max-width $breakpoint-xs-max)
      .q-card
        width 100%
</style>
