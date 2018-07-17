<template>
<q-page padding class="card-examples row items-start">
  <div class="row gutter-sm-6">
    <div class="col-auto">
      <q-card inline class="q-ma-xl">
        <q-card-title class="absolute-top-left">
          <div class="ellipsis text-bold absolute-left">Welcome to my Website</div>
          <!-- <div class="ellipsis text-blue-14">Work hard! Play hard!!</div> -->
        </q-card-title>
        <q-card-media>
            <img src="~assets/Li.jpg">
        </q-card-media>
      </q-card>
    </div>
    <div class="col text-blue-10">
      <q-card class="bigger q-ma-xl bg-purple-2 ">
        <q-card-main>
          <h4>Dr. Xueping Li</h4>
          <p>&nbsp; Director, <a href="http://ilab.engr.utk.edu/">The Ideation Laboratory</a> (iLab)
            <p>&nbsp; Co-Director, <a href="http://ilab.engr.utk.edu/hits/">Health Information Technology &amp; Simulation</a> (HITS) Lab  <br />
            &nbsp; Associate Professor of Industrial and Systems Engineering<br> &nbsp; University of Tennessee, Knoxville<br> &nbsp; 522 John D. Tickle Building<br> &nbsp; 851 Neyland Drive<br> &nbsp; Knoxville, TN 37996-2315<br> &nbsp; Office Phone:
              (865) 974-7648<br> &nbsp; Fax: (865) 974-0588<br> &nbsp; Web: <a href="http://web.utk.edu/~xli27">
              http://web.utk.edu/~xli27</a>&nbsp; <br> &nbsp; Email: <a href="mailto:Xueping.Li@utk.edu">Xueping DOT Li AT utk DOT edu</a> </p>
        </q-card-main>
      </q-card>
    </div>
  </div>
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
    max-width 200vw
  @media (max-width $breakpoint-xs-max)
    .q-card
      width 100%
</style>
