import { router } from '../../../_helpers'

export default {
  getMovimento (state, movimento) {
    state.movimentoEdit = movimento
    router.push('/editarMovimento')
  },
  updateRequest (state, movimento) {
    state.status = { registering: true }
  },
  updateSuccess (state, movimento) {
    state.status = {}
  },
  updateFailure (state, movimento) {
    state.status = {}
  }
}
