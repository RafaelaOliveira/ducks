<template>
  <div
    id="app"
    class="fundo">
    <v-app id="pacific">
      <v-container
        fill-height
        fluid
        grid-list-xl
      >
        <v-layout wrap>
          <v-flex
            xl12
            lg12
            md12
            sm12
            xs12
          >
            <material-card
              color="grey darken-2"
              title="Vendas"
            >
              <v-data-table
                :headers="headers"
                :items="movimentos"
                :footer-props="{
                  showFirstLastPage: true,
                  itemsPerPageText: 'Quantidade por página'
                }"
                sort-by="ra"
                class="elevation-1"
              >
                <template v-slot:item.nomeVendedor="{ item }">
                  <div v-if="item.vendedor !== null">
                    {{ item.vendedor.nomeVendedor }}
                  </div>
                  <div v-else>
                    REMOVIDO DO SISTEMA
                  </div>
                </template>
                <template v-slot:item.statusVenda="{ item }">
                  <div v-if="item.tipoMovimento === 'Venda'">
                    <div v-if="item.statusVenda === true">
                      <v-icon
                        left
                        color="light-green accent-4"
                      >mdi-thumb-up</v-icon>
                    </div>
                    <div v-if="item.statusVenda === false">
                      <v-icon
                        left
                        color="red accent-2"
                      >mdi-thumb-down</v-icon>
                    </div>
                  </div>
                </template>
                <template v-slot:item.dataInicioMovimento="{ item }">
                  {{ moment(item.horarioMovimento.dataInicioMovimento).parseZone().format('DD/MM/YYYY') }}
                </template>
                <template v-slot:item.horaInicioMovimento="{ item }">
                  {{ mostrarHora(item.horarioMovimento.horaInicioMovimento) }}
                </template>
                <template v-slot:item.horaFinalMovimento="{ item }">
                  {{ mostrarHora(item.horarioMovimento.horaFinalMovimento) }}
                </template>
                <template v-slot:item.view="{ item }">
                  <v-btn
                    color="grey darken-2"
                    @click="getMovimentoEdit(item)"
                  >
                    <v-icon
                      color="blue lighten-5"
                    >mdi-magnify-plus</v-icon>
                  </v-btn>
                </template>
                <template v-slot:no-data>
                  <v-alert
                    :value="true"
                    color="error"
                    icon="mdi-alert"
                  >Não existem vendedores cadastrados!</v-alert>
                </template>
              </v-data-table>
            </material-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import moment from 'moment'

export default {
  data () {
    return {
      textoPaginacao: 'Quantidade por página',
      headers: [
        { text: 'Vendedor', align: 'left', value: 'nomeVendedor' },
        { text: 'Status venda', align: 'center', value: 'statusVenda', sortable: false },
        { text: 'Data', align: 'left', value: 'dataInicioMovimento', sortable: false },
        { text: 'Inicio', align: 'left', value: 'horaInicioMovimento', sortable: false },
        { text: 'Fim', align: 'left', value: 'horaFinalMovimento', sortable: false },
        { text: 'Detalhar', align: 'center', value: 'view', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      movimentos: state => state.movimentos.all.items
      // mensagem: state => state.movimentos.status
    }),
    pages () {
      try {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.pagination.totalItems = this.movimentos.length
        if (this.pagination.totalItems !== undefined) {
          if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) {
            return 0
          }
          return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
        }
      } catch (e) {
        // console.log("Erro aqui!")
      }
    }
  },
  created () {
    this.getAll()
    moment.locale('pt')
  },
  methods: {
    moment,
    ...mapActions('movimentos', {
      getAll: 'getAllTipoVenda'
    }),
    ...mapActions('editMovimento', {
      getMovimentoEdit: 'getVendedorEdit'
    }),
    mostrarHora (hora) {
      let novaHora = hora.slice(11, hora.length - 4)
      return novaHora
    }
  }
}
</script>
