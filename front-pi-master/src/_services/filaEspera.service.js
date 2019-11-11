import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const filaEsperaService = {
  getAll,
  iniciarAtendimento,
  iniciarAusencia
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/FilaEspera/ObterVendedoresFilaEspera`, requestOptions).then(handleResponse)
}

function iniciarAtendimento (idVendedor) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }
  return fetch(`${config.apiUrl}/FilaEspera/IniciarAtendimento/${idVendedor}`, requestOptions).then(handleResponse)
}

function iniciarAusencia (idVendedor) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' }
  }
  return fetch(`${config.apiUrl}/FilaEspera/IniciarAusencia/${idVendedor}`, requestOptions).then(handleResponse)
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
