<template>
  <div>
    <div v-if="showVideo" class="video">
      <vimeo-player
        :options="{
          title: false,
        }"
        :autoplay="true"
        :player-height="500"
        :player-width="800"
        :video-id="479384904"
      ></vimeo-player>
    </div>
    <div v-if="!showVideo" class="countdown">
      <div>
        <div class="timeblock">
          <div class="value">{{ timeRemaining.days }}</div>
          <div class="unit">Days</div>
        </div>
        <div class="timeblock">
          <div class="value">{{ timeRemaining.hours }}</div>
          <div class="unit">Hours</div>
        </div>
        <div class="timeblock">
          <div class="value">{{ timeRemaining.minutes }}</div>
          <div class="unit">Minutes</div>
        </div>
        <div class="timeblock">
          <div class="value">{{ timeRemaining.seconds }}</div>
          <div class="unit">Seconds</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as R from "ramda";
import moment from "moment";

const allAtZero = R.all(R.lte(R.__, 0));

export default {
  data() {
    return {
      showVideo: false,
      timerInterval: null,
      timeRemaining: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },

  watch: {
    timeRemaining(newValue) {
      const timeValues = Object.values(newValue);
      console.log(allAtZero(timeValues));
      if (allAtZero(timeValues)) {
        this.showVideo = true;
        this.onTimesUp();
      }
    },
  },

  mounted() {
    this.calculateTimeDiff();
    this.startTimer();
  },

  methods: {
    onTimesUp() {
      clearInterval(this.timerInterval);
    },

    calculateTimeDiff() {
      const a = moment("2020-11-16 12:00");
      const b = moment();
      const diff = moment.duration(a.diff(b));

      this.timeRemaining = {
        days: diff.get("days"),
        hours: diff.get("hours"),
        minutes: diff.get("minutes"),
        seconds: diff.get("seconds"),
      };
    },

    startTimer() {
      this.timerInterval = setInterval(() => {
        this.calculateTimeDiff();
      }, 1000);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.video {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.countdown {
  display: flex;
  justify-content: center;
  margin-top: 2vh;
  height: 100vh;

  @media (min-width: 600px) {
    margin-top: 0;
    align-items: center;
  }
}

.timeblock {
  text-transform: uppercase;
  color: #1f1f1f;
  width: 50vw;
  margin-bottom: 2vh;
}

.unit,
.value {
  text-align: center;
}

.value {
  font-size: 5rem;

  @media (min-width: 600px) {
    font-size: 7rem;
  }
}

.unit {
  font-size: 2rem;
}
</style>
