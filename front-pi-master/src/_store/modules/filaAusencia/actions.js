import { filaAusenciaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    filaAusenciaService.getAll()
      .then(
        vendedores => commit('getAllSuccess', vendedores),
        error => commit('getAllFailure', error)
      )
  },
  finalizarAusencia ({ dispatch, commit }, idVendedor) {
    commit('finalizarAusenciaRequest', idVendedor)
    filaAusenciaService.finalizarAusencia(idVendedor)
      .then(
        vendedor => {
          commit('finalizarAusenciaSuccess', vendedor)
          router.push('/fila')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            filaAusenciaService.getAll()
              .then(
                vendedores => commit('getAllSuccess', vendedores),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('finalizarAusenciaFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
