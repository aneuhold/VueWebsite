new Vue({
  el: '#vue-app',
  data: {
    result: 'Result'
  },
  methods: {
    outputMultiTable: function() {
      console.log(this.$refs.input.value);
      let num = this.$refs.input.value;
      let resultString = '';
      
      function outputMultiplication(multiplyBy, multiplier) {
        let result = multiplyBy * multiplier;
        return multiplyBy + ' x ' + multiplier + ' = ' + result;
      }

      for (let i = 0; i <= 12; i++) {
        resultString += outputMultiplication(num, i) + '<br>';
      }

      this.result = resultString;
    }
  }
});
