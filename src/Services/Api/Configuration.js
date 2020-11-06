/**
 * Configuration Class
 * Responsible for All The Api Configuration for the Application
 */
import {EnglishFont} from '../../utils/Fonts'
import enMessages from './../../translations/en.json'
import {LocalStorageService} from '../LocalStorageService'

class Configuration {
  static BASE_URL = 'https://private-anon-b82ed30a63-toptalui.apiary-mock.com'
  static specialisation_collection_endpoint = '/categories/specialisations'
  static skills_collection_endpoint = '/categories/skills'
  static developers_collection_endpoint = '/developers'

  static Local = LocalStorageService.get('ToptalAppLanguage')
  static DefaultLocale = 'en'
  static DefaultDirection = 'ltr'
  static DefaultFont = EnglishFont
  static DefaultMessage = enMessages
  static DefaultPageSize = 7
}

export default Configuration
