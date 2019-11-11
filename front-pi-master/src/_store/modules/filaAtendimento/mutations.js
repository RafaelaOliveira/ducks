export default {
  getAllRequest (state) {
    state.all = { loading: true }
  },
  getAllSuccess (state, vendedores) {
    state.all = { items: vendedores }
  },
  getAllFailure (state, error) {
    state.all = { error }
  },
  finalizarAtendimentoRequest (state, idVendedor) {
    state.all.items = state.all.items.map(vendedor =>
      vendedor.idVendedor === idVendedor
        ? { ...vendedor, registering: true }
        : vendedor
    )
  },
  finalizarAtendimentoSuccess (state, vendedor) {
    state.status = { vendedor }
  },
  finalizarAtendimentoFailure (state, error) {
    state.status = { error }
  }
}
