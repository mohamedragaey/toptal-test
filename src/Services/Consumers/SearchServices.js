/**
 * General Services class
 */
import RestClient from '../Client/RestClient'

class SearchServices {
  /**
   *
   * @param url
   * @returns {Promise<*>}
   * @constructor
   */
  static Listing (url) {
    return RestClient.getRequest(url)
  }
}

export default SearchServices
