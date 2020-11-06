import axios from 'axios'
import Configuration from './Api/Configuration'
import {log} from '../utils/helpers'
import {LocalStorageService} from './LocalStorageService'

// LocalstorageService
let {BASE_URL} = Configuration


axios.defaults.baseURL = BASE_URL
axios.defaults.headers.common['apiToken'] = ''
axios.defaults.headers.common['Content-Type'] = 'application/json'

/**
 *  Add a request interceptor
 */
axios.interceptors.request.use((config) => {
  LocalStorageService.get('ToptalAppLanguage').then((appLanguage) => {
    config.headers['Accept-Language'] = appLanguage
  })
  return config
}, (error) => { log('axios.interceptors.request', error) })

