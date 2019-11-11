export default {
  getAllRequest (state) {
    state.all = { loading: true }
  },
  getAllSuccess (state, movimentos) {
    state.all = { items: movimentos }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
  getPorVendedorRequest (state) {
    state.allVendedor = { loading: true }
  },
  getPorVendedorSuccess (state, movimentos) {
    state.allVendedor = { items: movimentos }
  },
  getPorVendedorFailure (state, error) {
    state.allVendedor = { error }
  },
  getAllTipoVendaRequest (state) {
    state.all = { loading: true }
  },
  getAllTipoVendaSuccess (state, movimentos) {
    state.all = { items: movimentos }
  },
  getAllTipoVendaFailure (state, error) {
    state.all = { error }
  },
  getAllTipoAusenciaRequest (state) {
    state.all = { loading: true }
  },
  getAllTipoAusenciaSuccess (state, movimentos) {
    state.all = { items: movimentos }
  },
  getAllTipoAusenciaFailure (state, error) {
    state.all = { error }
  },
  registerRequest (state, movimento) {
    state.status = { registering: true }
  },
  registerSuccess (state, movimento) {
    state.status = { movimento }
  },
  registerFailure (state, error) {
    state.status = { error }
  },
  endRequest (state, movimento) {
    state.status = { registering: true }
  },
  endSuccess (state, movimento) {
    state.status = { movimento }
  },
  endFailure (state, error) {
    state.status = { error }
  },
  deleteRequest (state, idMovimento) {
    state.all.items = state.all.items.map(movimento =>
      movimento.idMovimento === idMovimento
        ? { ...movimento, deleting: true }
        : movimento
    )
  },
  deleteSuccess (state, movimento) {
    state.status = { movimento }
  },
  deleteFailure (state, error) {
    state.status = { error }
  }
}
