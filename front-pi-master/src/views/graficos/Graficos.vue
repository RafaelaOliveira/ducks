<script>
  import { Bar } from 'vue-chartjs'
  export default {
    extends: Bar,
    data () {
      return {
        datacollection: {
          labels: ['Bruno', 'Luis', 'Jessica', 'Luna', 'Gustavo', 'Sara','Yago'],
          datasets: [
            {
              label: 'Vendas Sucedidas',
              backgroundColor: '#36a2eb',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [10, 20, 30, 40, 58, 62 ,60]
            },
            {
              label: 'Vendas Não Sucedidas',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: [5, 8, 10, 12, 8, 3, 4]
            }
          ]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>
