<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <!-- <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      > -->
        <!-- <q-toolbar-title>
          Welcome to My Website
          <div slot="subtitle">Play Hard! Work Hard!!</div>
        </q-toolbar-title> -->
      <!-- </q-toolbar> -->

    <q-tabs color="secondary" glossy align="justify">
      <q-route-tab slot="title" icon="home" to="/home" replace hide="icon" label="Home" />
      <q-route-tab slot="title" icon="local library" to="/publication" replace hide="icon" label="Publication" />
      <q-route-tab slot="title" icon="lightbulb outline" to="/research" replace hide="icon" label="Research" />
      <q-route-tab slot="title" icon="school" to="/teaching" replace hide="icon" label="Teaching" />
      <q-route-tab slot="title" icon="verified user" to="/services" replace hide="icon" label="Services" />
      <q-route-tab slot="title" icon="people" to="/students" replace hide="icon" label="Students" />
      <q-route-tab slot="title" icon="list" to="/resources" replace hide="icon" label="Resources" />
      </q-tabs>
  </q-layout-header>

    <!-- <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('https://discord.gg/5TDhbDg')">
          <q-item-side icon="chat" />
          <q-item-main label="Discord Chat Channel" sublabel="https://discord.gg/5TDhbDg" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      tab: 'mails'
    }
  },
  methods: {
    openURL
  }
}
</script>

<style lang="stylus">
.docs-tab-pane
  .q-tab-pane
    display flex
    align-items center
    justify-content center
    height 65px
</style>
