import { filaEsperaService } from '../../../_services'
import { router } from '../../../_helpers'

export default {
  getAll ({ commit }) {
    commit('getAllRequest')
    filaEsperaService.getAll()
      .then(
        vendedores => commit('getAllSuccess', vendedores),
        error => commit('getAllFailure', error)
      )
  },
  iniciarAtendimento ({ dispatch, commit }, idVendedor) {
    commit('iniciarAtendimentoRequest', idVendedor)
    filaEsperaService.iniciarAtendimento(idVendedor)
      .then(
        vendedor => {
          commit('iniciarAtendimentoSuccess', vendedor)
          router.push('/fila')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            filaEsperaService.getAll()
              .then(
                vendedores => commit('getAllSuccess', vendedores),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('iniciarAtendimentoFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  },
  iniciarAusencia ({ dispatch, commit }, idVendedor) {
    commit('iniciarAusenciaRequest', idVendedor)
    filaEsperaService.iniciarAusencia(idVendedor)
      .then(
        vendedor => {
          commit('iniciarAusenciaSuccess', vendedor)
          router.push('/fila')
          setTimeout(() => {
            dispatch('alert/success', 'Registration successful', { root: true })
            commit('getAllRequest')
            filaEsperaService.getAll()
              .then(
                vendedores => commit('getAllSuccess', vendedores),
                error => commit('getAllFailure', error)
              )
          })
        },
        error => {
          commit('iniciarAusenciaFailure', error)
          dispatch('alert/error', error, { root: true })
        }
      )
  }
}
