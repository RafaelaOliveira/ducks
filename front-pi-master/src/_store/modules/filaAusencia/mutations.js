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
  finalizarAusenciaRequest (state, idVendedor) {
    state.all.items = state.all.items.map(vendedor =>
      vendedor.idVendedor === idVendedor
        ? { ...vendedor, registering: true }
        : vendedor
    )
  },
  finalizarAusenciaSuccess (state, vendedor) {
    state.status = { vendedor }
  },
  finalizarAusenciaFailure (state, error) {
    state.status = { error }
  }
}
