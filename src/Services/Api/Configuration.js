/**
 * Configuration Class
 * Responsible for All The Api Configuration for the Application
 */
import {EnglishFont} from '../../utils/Fonts'
import enMessages from './../../translations/en.json'
import {LocalStorageService} from '../LocalStorageService'

class Configuration {
  static BASE_URL = 'https://toptalui.docs.apiary.io/#reference/0/'
  static specialisation_collection_endpoint = '/specialisation-collection/list-all-specialisations'
  static skills_collection_endpoint = '/skills-collection/list-all-skills'
  static developers_collection_endpoint = '/developers-collection/get-developers'

  static Local = LocalStorageService.get('ToptalAppLanguage')
  static DefaultLocale = 'en'
  static DefaultDirection = 'ltr'
  static DefaultFont = EnglishFont
  static DefaultMessage = enMessages
  static DefaultPageSize = 7
}

export default Configuration
