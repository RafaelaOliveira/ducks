<template>
  <div
    id="app"
    class="fundoFila">
    <v-app id="inspire">
      <v-container
        fill-height
        fluid
        grid-list-xl
      >
        <v-flex xs3>
          <template>
            <v-container
              id="scroll-target"
              style="max-height: 400px; max-width: 200px"
              class="overflow-y-auto"
            >
              <v-row
                v-scroll:#scroll-target="onScroll"
                align="center"
                justify="center"
                style="height: 100%"
              >
                <div
                  v-for="(ausencia) in filaAusencia"
                  :key="ausencia.idVendedorEmAusencia"
                >
                  <material-card
                    v-bind="$attrs"
                    class="v-card--material-stats"
                    style="background-color: #FFFFFF; width: 130px; top: 0 !important;"
                    v-on="$listeners"
                  >
                    <v-card
                      color="orange"
                      class="cardFila"
                    >
                      <div v-if="ausencia.vendedor.imagemVendedor === ''">
                        <v-avatar
                          size="70"
                          class="cardAvatar"
                        >
                          <img
                            :src="iconImage"
                            width="auto"
                          >
                        </v-avatar>
                      </div>
                      <div v-else>
                        <v-avatar
                          size="70"
                          class="cardAvatar"
                        >
                          <img
                            :src="ausencia.vendedor.imagemVendedor"
                            width="auto"
                          >
                        </v-avatar>
                      </div>
                    </v-card>
                    <p class="cardText">{{ ausencia.vendedor.nomeVendedor }}</p>
                    <v-btn
                      small
                      color="orange"
                      style="margin: auto; display: block;"
                      @click="fimAusencia(ausencia.vendedor.idVendedor)"
                    >
                      Voltar
                    </v-btn>
                  </material-card>
                  <br>
                </div>
              </v-row>
            </v-container>
          </template>
        </v-flex>
        <v-flex xs9>
          <v-layout wrap>
            <v-flex xs12>
              <v-sheet
                class="mx-auto"
                max-width="100%"
                color="grey darken-2"
              >
                <v-slide-group
                  multiple
                  show-arrows>
                  <v-slide-item
                    v-for="(espera, i) in filaEspera"
                    :key="espera.idVendedorEmEspera"
                  >
                    <v-flex
                      sm6
                      xs12
                      md6
                      lg3
                    >
                      <div v-if="i === 0">
                        <material-card
                          v-bind="$attrs"
                          class="v-card--material-stats"
                          style="background-color: #BBDEFB; width: 130px"
                          v-on="$listeners"
                        >
                          <v-card
                            color="primary"
                            class="cardFila"
                          >
                            <div v-if="espera.vendedor.imagemVendedor === ''">
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="iconImage"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                            <div v-else>
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="espera.vendedor.imagemVendedor"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                          </v-card>
                          <p class="cardText">{{ espera.vendedor.nomeVendedor }}</p>
                          <v-btn
                            small
                            color="grey darken-2"
                            style="margin: auto; display: block;"
                            @click="openModalAcoes(espera.vendedor.nomeVendedor, espera.vendedor.idVendedor, i)"
                          >
                            Ações
                          </v-btn>
                        </material-card>
                      </div>
                      <div v-else>
                        <material-card
                          v-bind="$attrs"
                          class="v-card--material-stats"
                          style="background-color: #FFFFFF; width: 130px"
                          v-on="$listeners"
                        >
                          <v-card
                            color="primary"
                            class="cardFila"
                          >
                            <div v-if="espera.vendedor.imagemVendedor === ''">
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="iconImage"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                            <div v-else>
                              <v-avatar
                                size="70"
                                class="cardAvatar"
                              >
                                <img
                                  :src="espera.vendedor.imagemVendedor"
                                  width="auto"
                                >
                              </v-avatar>
                            </div>
                          </v-card>
                          <p class="cardText">{{ espera.vendedor.nomeVendedor }}</p>
                          <v-btn
                            small
                            color="grey darken-2"
                            style="margin: auto; display: block;"
                            @click="openModalAcoes(espera.vendedor.nomeVendedor, espera.vendedor.idVendedor)"
                          >
                            Ações
                          </v-btn>
                        </material-card>
                      </div>
                    </v-flex>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-flex>
            <v-flex xs12>
              <v-sheet
                class="mx-auto"
                max-width="100%"
                color="grey darken-2"
              >
                <v-slide-group
                  multiple
                  show-arrows>
                  <v-slide-item
                    v-for="atendimento in filaAtendimento"
                    :key="atendimento.idVendedorEmAtendimento"
                  >
                    <v-flex
                      sm6
                      xs12
                      md6
                      lg3
                    >
                      <material-card
                        v-bind="$attrs"
                        class="v-card--material-stats"
                        style="width: 130px"
                        v-on="$listeners"
                      >
                        <v-card
                          color="success"
                          class="cardFila"
                        >
                          <div v-if="atendimento.vendedor.imagemVendedor === ''">
                            <v-avatar
                              size="70"
                              class="cardAvatar"
                            >
                              <img
                                :src="iconImage"
                                width="auto"
                              >
                            </v-avatar>
                          </div>
                          <div v-else>
                            <v-avatar
                              size="70"
                              class="cardAvatar"
                            >
                              <img
                                :src="atendimento.vendedor.imagemVendedor"
                                width="auto"
                              >
                            </v-avatar>
                          </div>
                        </v-card>
                        <p class="cardText">{{ atendimento.vendedor.nomeVendedor }}</p>
                        <v-btn
                          small
                          color="success"
                          style="margin: auto; display: block;"
                          @click="openmodalAtendimento(atendimento.vendedor.nomeVendedor, atendimento.vendedor.idVendedor)"
                        >
                          Finalizar
                        </v-btn>
                      </material-card>
                    </v-flex>
                  </v-slide-item>
                </v-slide-group>
              </v-sheet>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-dialog
          v-model="modalAcoes"
          max-width="400"
        >
          <v-card>
            <v-card-title class="headline">Escolher ação:</v-card-title>
            <v-card-actions>
              <div v-if="contador === 0">
                <v-btn
                  color="success"
                  @click="inicioAtendimento(idVendedor)"
                >
                  Iniciar atendimento
                </v-btn>
                <v-btn
                  color="warning"
                  @click="inicioAusencia(idVendedor)"
                >
                  Sair
                </v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="success"
                  @click="inicioAtendimento(idVendedor)"
                >
                  Priorizar atendimento
                </v-btn>
                <v-btn
                  color="warning"
                  @click="inicioAusencia(idVendedor)"
                >
                  Sair
                </v-btn>
              </div>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="modalAtendimento"
          max-width="400"
        >
          <v-card>
            <v-card-title class="headline">Venda realizada com sucesso?</v-card-title>
            <v-card-actions>
              <v-btn
                color="success"
                @click="fimAtentimendoVendaRealizada(idVendedor)"
              >
                Sim
              </v-btn>
              <v-btn
                color="warning"
                @click="fimAtendimentoVendaNaoRealizada(idVendedor)"
              >
                Não
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog
          v-model="modalVendaNaoRealizada"
          max-width="600"
          persistent
        >
          <v-card>
            <v-card-title class="headline">Registrar venda não sucedida</v-card-title>
            <v-card-actions>
              <v-form
                ref="formVendaNaoSucedida"
                v-model="valid"
                lazy-validation
              >
                <v-layout wrap>
                  <v-flex
                    xl12
                    lg12
                    md12
                    sm12
                    xs12
                  >
                    <v-select
                      v-model="vendaNaoSucedida.tipoProduto"
                      :items="tipoProduto"
                      :rules="tipoProdutoRules"
                      outlined
                      label="Tipo de produto"
                    />
                  </v-flex>
                  <v-flex
                    xl12
                    lg12
                    md12
                    sm12
                    xs12
                  >
                    <v-select
                      v-model="vendaNaoSucedida.marcaProduto"
                      :items="marcaProduto"
                      :rules="marcaProdutoRules"
                      outlined
                      label="Marca"
                    />
                  </v-flex>
                  <v-flex
                    xl6
                    lg6
                    md6
                    sm6
                    xs6
                  >
                    <v-select
                      v-model="vendaNaoSucedida.corProduto"
                      :items="corProduto"
                      :rules="corProdutoRules"
                      style="padding-right:4px;"
                      outlined
                      label="Cor"
                    />
                  </v-flex>
                  <v-flex
                    xl6
                    lg6
                    md6
                    sm6
                    xs6
                  >
                    <div v-if="vendaNaoSucedida.tipoProduto === 'Baixo' || vendaNaoSucedida.tipoProduto === 'Calçado'">
                      <v-select
                        v-model="vendaNaoSucedida.numeroProduto"
                        :items="tamanhoNumProduto"
                        :rules="numeroProdutoRules"
                        style="padding-left:4px;"
                        outlined
                        label="Numero"
                      />
                    </div>
                    <div v-else>
                      <v-select
                        v-model="vendaNaoSucedida.numeroProduto"
                        :items="tamanhoAlfProduto"
                        :rules="numeroProdutoRules"
                        style="padding-left:4px;"
                        outlined
                        label="Numero"
                      />
                    </div>
                  </v-flex>
                  <v-flex
                    xl12
                    lg12
                    md12
                    sm12
                    xs12
                  >
                    <v-text-field
                      v-model="vendaNaoSucedida.descricaoProduto"
                      label="Descrição produto"
                      outlined
                    />
                  </v-flex>
                  <v-flex
                    xl12
                    lg12
                    md12
                    sm12
                    xs12
                  >
                    <v-text-field
                      v-model="vendaNaoSucedida.nomeCliente"
                      label="Nome cliente"
                      outlined
                    />
                  </v-flex>
                  <v-flex
                    xl12
                    lg12
                    md12
                    sm12
                    xs12
                  >
                    <v-text-field
                      v-model="vendaNaoSucedida.telefoneCliente"
                      label="Número cliente"
                      outlined
                    />
                    <v-btn
                      color="success"
                      @click="registrarVendaNaoRealizada()"
                    >
                      Registrar
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-form>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      idVendedor: '',
      nomeVendedor: '',
      codigoVendedor: '',
      imagemVendedor: '',
      iconImage: './img/icon.png',
      contador: '',
      movimento: {
        idVendedor: '',
        tipoMovimento: '',
        statusVenda: false,
        justificativaVenda: '',
        horarioMovimento: {
          horaInicioMovimento: Date,
          horaFinalMovimento: Date,
          dataInicioMovimento: Date,
          dataFinalMovimento: Date
        }
      },
      vendaNaoSucedida: {
        idVendedor: '',
        idMovimento: '',
        tipoProduto: '',
        marcaProduto: '',
        corProduto: '',
        numeroProduto: '',
        descricaoProduto: '',
        nomeCliente: '',
        telefoneCliente: ''
      },
      logo: './img/icon.jpg',
      modalAcoes: false,
      modalAtendimento: false,
      modalVendaNaoRealizada: false,
      valid: true,
      idVendedorVendaNaoSucedida: '',
      marcaProduto: ['Marca 1', 'Marca 2', 'Marca 3', 'Marca 4'],
      corProduto: ['Cor 1', 'Cor 2', 'Cor 3', 'Cor 4'],
      tipoProduto: ['Cima', 'Baixo', 'Banho', 'Calçado'],
      tamanhoAlfProduto: ['PP', 'P', 'M', 'G', 'GG'],
      tamanhoNumProduto: ['33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44'],
      tipoProdutoRules: [ v => !!v || 'O campo tipo é obrigatório' ],
      marcaProdutoRules: [ v => !!v || 'O campo marca é obrigatório' ],
      corProdutoRules: [ v => !!v || 'O campo cor é obrigatório' ],
      numeroProdutoRules: [ v => !!v || 'O campo número é obrigatório' ],
      inheritAttrs: false,
      offsetTop: 0
    }
  },
  computed: {
    ...mapState({
      filaAtendimento: state => state.filaAtendimento.all.items
      // mensagem: state => state.filaAtendimento.status
    }),
    ...mapState({
      filaEspera: state => state.filaEspera.all.items
      // mensagem: state => state.filaEspera.status
    }),
    ...mapState({
      filaAusencia: state => state.filaAusencia.all.items
      // mensagem: state => state.filaAusencia.status
    }),
    ...mapState({
      movimentos: state => state.movimentos.all.items,
      movimentosVendedor: state => state.movimentos.allVendedor.items
      // mensagem: state => state.movimentos.status
    })
  },
  created () {
    this.getAllAtendimento()
    this.getAllEspera()
    this.getAllAusencia()
  },
  methods: {
    ...mapActions('filaEspera', {
      getAllEspera: 'getAll',
      iniciarAtendimento: 'iniciarAtendimento',
      iniciarAusencia: 'iniciarAusencia'
    }),
    ...mapActions('filaAtendimento', {
      getAllAtendimento: 'getAll',
      finalizarAtendimento: 'finalizarAtendimento'
    }),
    ...mapActions('filaAusencia', {
      getAllAusencia: 'getAll',
      finalizarAusencia: 'finalizarAusencia'
    }),
    ...mapActions('movimentos', {
      registerMovimento: 'register',
      end: 'end'
    }),
    ...mapActions('vendasNaoSucedidas', {
      registerVendaNaoSucedida: 'register'
    }),
    openModalAcoes (nome, id, i) {
      this.nomeVendedor = nome
      this.idVendedor = id
      this.contador = i
      this.modalAcoes = true
    },
    openmodalAtendimento (nome, id) {
      this.nomeVendedor = nome
      this.idVendedor = id
      this.modalAtendimento = true
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
    },
    inicioAtendimento (idVendedor) {
      if (idVendedor !== null) {
        this.iniciarAtendimento(idVendedor)
        this.modalAcoes = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2)
        }
        const now = new Date()

        let hora = new Intl.DateTimeFormat([], options)
        let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T' + hora.format(new Date()) + ':00.00Z'

        this.movimento.horarioMovimento.horaInicioMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataInicioMovimento = data
        this.movimento.tipoMovimento = 'Venda'
        this.registerMovimento(this.movimento)
      }
    },
    fimAtentimendoVendaRealizada (idVendedor) {
      if (idVendedor !== null) {
        this.finalizarAtendimento(idVendedor)
        this.modalAtendimento = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2)
        }
        const now = new Date()

        let hora = new Intl.DateTimeFormat([], options)
        let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T' + hora.format(new Date()) + ':00.00Z'

        this.movimento.horarioMovimento.horaFinalMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataFinalMovimento = data
        this.movimento.statusVenda = true

        this.end(this.movimento)
      }
    },
    fimAtendimentoVendaNaoRealizada (idVendedor) {
      if (idVendedor !== null) {
        this.finalizarAtendimento(idVendedor)
        this.modalAtendimento = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2)
        }
        const now = new Date()

        let hora = new Intl.DateTimeFormat([], options)
        let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T' + hora.format(new Date()) + ':00.00Z'

        this.movimento.horarioMovimento.horaFinalMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataFinalMovimento = data
        this.movimento.statusVenda = false

        this.end(this.movimento)
        this.vendaNaoSucedida.idVendedor = idVendedor
        this.modalVendaNaoRealizada = true
      }
    },
    registrarVendaNaoRealizada () {
      if (this.$refs.formVendaNaoSucedida.validate()) {
        if (this.vendedorVendaNaoRealizada !== null || this.vendedorVendaNaoRealizada !== '') {
          this.registerVendaNaoSucedida(this.vendaNaoSucedida)
          this.modalVendaNaoRealizada = false
          this.$refs.formVendaNaoSucedida.reset()
        }
      }
    },
    inicioAusencia (idVendedor) {
      if (idVendedor !== null) {
        this.iniciarAusencia(idVendedor)
        this.modalAcoes = false
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2)
        }
        const now = new Date()

        let hora = new Intl.DateTimeFormat([], options)
        let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T' + hora.format(new Date()) + ':00.00Z'

        this.movimento.horarioMovimento.horaInicioMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataInicioMovimento = data
        this.movimento.tipoMovimento = 'Ausencia'

        this.registerMovimento(this.movimento)
      }
    },
    fimAusencia (idVendedor) {
      if (idVendedor !== null) {
        this.finalizarAusencia(idVendedor)
        this.movimento.idVendedor = idVendedor

        const options = {
          timeZone: 'America/Sao_Paulo',
          hour: 'numeric',
          minute: 'numeric'
        }
        const zeroFill = n => {
          return ('0' + n).slice(-2)
        }
        const now = new Date()

        let hora = new Intl.DateTimeFormat([], options)
        let data = now.getFullYear() + '-' + zeroFill((now.getMonth() + 1)) + '-' + zeroFill(now.getUTCDate()) + 'T' + hora.format(new Date()) + ':00.00Z'

        this.movimento.horarioMovimento.horaFinalMovimento = hora.format(new Date())
        this.movimento.horarioMovimento.dataFinalMovimento = data
        this.movimento.statusVenda = false

        this.end(this.movimento)
      }
    }
  }
}
</script>
