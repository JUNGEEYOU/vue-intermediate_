<template>
  <div>
      <h4 class="space">오늘은 어떤 하루였나요?</h4>
      <div class="row">
        <div class="col-md-1 col-xs-1"></div>
        <span v-for="(sentiment) in sentiments" v-bind:key="sentiment">
            <div class="col-md-2 col-xs-2"><i v-bind:class="checkSentiment(sentiment)" v-on:click="toggleSentiment(sentiment)" class="material-icons icon">{{ sentiment }}</i></div>
        </span>
        <div class="col-md-1 col-xs-1"></div>
    </div>
      
  </div>
</template>

<script>
export default {
data: function() {
    return {
      sentiments: ["sentiment_very_satisfied", "sentiment_satisfied", "sentiment_neutral", "sentiment_dissatisfied", "sentiment_very_dissatisfied" ],
      nowSentiment: ""
    }
  },
  methods: {
      toggleSentiment: function(sentiment) {
          localStorage.setItem("sentiment", sentiment);
          this.nowSentiment = sentiment;
      },
      checkSentiment: function(sentiment) {
          var result = '';
          if (this.nowSentiment == sentiment){
              result = 'checkBtn'
          }
          return result
      }
  },
  created: function() {
    if(typeof localStorage.getItem('sentiment') !== 'undefined'){
        localStorage.setItem("sentiment", "sentiment_very_satisfied");
        this.nowSentiment = "sentiment_very_satisfied";
    }
  }
}
</script>

<style scoped>
.checkBtn {
    color: #62acde;
    font-size: 40px;
}
.icon {
    font-size: 40px;
}

.space {
    margin-top: 15%;
}

</style>