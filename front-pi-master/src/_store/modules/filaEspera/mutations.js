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
  iniciarAtendimentoRequest (state, idVendedor) {
    state.all.items = state.all.items.map(vendedor =>
      vendedor.idVendedor === idVendedor
        ? { ...vendedor, registering: true }
        : vendedor
    )
  },
  iniciarAtendimentoSuccess (state, vendedor) {
    state.status = { vendedor }
  },
  iniciarAtendimentoFailure (state, error) {
    state.status = { error }
  },
  iniciarAusenciaRequest (state, idVendedor) {
    state.all.items = state.all.items.map(vendedor =>
      vendedor.idVendedor === idVendedor
        ? { ...vendedor, registering: true }
        : vendedor
    )
  },
  iniciarAusenciaSuccess (state, vendedor) {
    state.status = { vendedor }
  },
  iniciarAusenciaFailure (state, error) {
    state.status = { error }
  }
}
