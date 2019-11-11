import { filaAtendimentoService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    filaAtendimentoService.getAll()
      .then(
        vendedores => commit('getAllSuccess', vendedores),
        error => commit('getAllFailure', error)
      )
  },
  finalizarAtendimento ({ dispatch, commit }, idVendedor) {
    commit('finalizarAtendimentoRequest', idVendedor)
    filaAtendimentoService.finalizarAtendimento(idVendedor)
      .then(
        vendedor => {
          commit('finalizarAtendimentoSuccess', vendedor)
          router.push('/fila')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            filaAtendimentoService.getAll()
              .then(
                vendedores => commit('getAllSuccess', vendedores),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('finalizarAtendimentoFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
