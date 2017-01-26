import * as ApiHelpers from 'Data/Sources/ApiHelpers'

export default {
  startRpcService: (config) => {
    return ApiHelpers.sendIpcMessage('APP/STARTRPC', config)
  }
}
