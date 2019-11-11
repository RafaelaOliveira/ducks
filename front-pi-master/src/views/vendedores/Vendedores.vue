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
              title="Vendedores"
            >
              <v-spacer/>
              <v-btn
                color="grey darken-2"
                to="/cadastrarVendedor"
              >
                <v-icon
                  left
                  color="light-green accent-4"
                >mdi-plus-circle</v-icon>
                Cadastrar
              </v-btn>
              <v-spacer/>
              <v-data-table
                :headers="headers"
                :items="vendedores"
                :footer-props="{
                  showFirstLastPage: true,
                  itemsPerPageText: 'Quantidade por página'
                }"
                sort-by="ra"
                class="elevation-1"
              >
                <template v-slot:item.imagemVendedor="{ item }">
                  <div v-if="item.imagemVendedor === ''">
                    <v-avatar
                      size="50"
                      class="cardAvatarVendedor"
                    >
                      <img
                        :src="iconImage"
                        width="auto"
                      >
                    </v-avatar>
                  </div>
                  <div v-else>
                    <v-avatar
                      size="50"
                      class="cardAvatarVendedor"
                    >
                      <img
                        :src="item.imagemVendedor"
                        width="auto"
                      >
                    </v-avatar>
                  </div>
                </template>
                <template v-slot:item.edit="{ item }">
                  <v-btn
                    color="grey darken-2"
                    @click="getVendedorEdit(item)"
                  >
                    <v-icon
                      left
                      color="cyan accent-4"
                    >mdi-pencil-circle</v-icon>
                    Editar
                  </v-btn>
                </template>
                <template v-slot:item.delete="{ item }">
                  <v-btn
                    color="grey darken-2"
                    @click="openModalDelete(item.nomeVendedor, item.idVendedor)"
                  >
                    <v-icon
                      left
                      color="red accent-2"
                    >mdi-delete-circle</v-icon>
                    Excluir
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
            <v-dialog
              v-model="modalDelete"
              max-width="350"
            >
              <v-card>
                <v-card-title class="headline">Deseja realmente excluir o vendedor?</v-card-title>
                <v-card-text>
                  O vendedor {{ nomeVendedor }} será excluido permanentemente do sistema!
                </v-card-text>
                <v-card-actions>
                  <div class="flex-grow-1"/>
                  <v-btn
                    color="green darken-1"
                    text
                    @click="deletarVendedor(idVendedor)"
                  >
                    Confirmar
                  </v-btn>
                  <v-btn
                    color="red darken-1"
                    text
                    @click="modalDelete = false"
                  >
                    Cancelar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      nomeVendedor: '',
      codigoVendedor: '',
      imagemVendedor: '',
      iconImage: './img/icon.png',
      modalDelete: false,
      textoPaginacao: 'Quantidade por página',
      headers: [
        { text: 'Nome', align: 'left', value: 'nomeVendedor' },
        { text: 'Código', align: 'left', value: 'codigoVendedor' },
        { text: 'Imagem', align: 'center', value: 'imagemVendedor', sortable: false },
        { text: 'Editar', align: 'center', value: 'edit', sortable: false },
        { text: 'Excluir', align: 'center', value: 'delete', sortable: false }
      ]
    }
  },
  computed: {
    ...mapState({
      vendedores: state => state.vendedores.all.items,
      mensagem: state => state.vendedores.status
    }),
    pages () {
      try {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.pagination.totalItems = this.vendedores.length
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
  },
  methods: {
    ...mapActions('vendedores', {
      getAll: 'getAll',
      delete: 'delete',
      register: 'register',
      update: 'update'
    }),
    ...mapActions('editVendedor', {
      getVendedorEdit: 'getVendedorEdit'
    }),
    openModalDelete (nome, id) {
      console.log('Vendedor => ' + nome)
      this.nomeVendedor = nome
      this.idVendedor = id
      this.modalDelete = true
    },
    deletarVendedor (id) {
      this.delete(id)
      this.modalDelete = false
    }
  }
}
</script>
