import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const filaAtendimentoService = {
  getAll,
  finalizarAtendimento
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/FilaAtendimento/ObterVendedoresFilaAtendimento`, requestOptions).then(handleResponse)
}

function finalizarAtendimento (idVendedor) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }
  return fetch(`${config.apiUrl}/FilaAtendimento/FinalizarAtendimento/${idVendedor}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout()
        location.reload(true)
      } else {
        return data
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
