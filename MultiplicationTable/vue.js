new Vue({
  el: '#vue-app',
  data: {
    result: 'Result',
    multiples: []
  },
  methods: {
    outputMultiTable: function() {
      console.log(this.$refs.input.value);
      let num = this.$refs.input.value;
      
      function outputMultiplication(multiplyBy, multiplier) {
        let result = multiplyBy * multiplier;
        return multiplyBy + ' x ' + multiplier + ' = ' + result;
      }

      this.$data.multiples = [];

      for (let i = 0; i <= 12; i++) {
        this.$data.multiples.push(outputMultiplication(num, i));
      }
    }
  }
});
