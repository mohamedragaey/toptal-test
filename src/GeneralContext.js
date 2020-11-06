import React, {createContext} from 'react'
import SearchServices from './Services/Consumers/SearchServices'
import Configuration from './Services/Api/Configuration'

const GeneralContext = createContext({})

const GeneralProvider = ({children}) => {
  const [developersList, setDevelopersList] = React.useState([])
  const [loading, setLoading] = React.useState(false)

  const getSearchResult = React.useCallback(() => {
    setLoading(true)
    SearchServices.Listing(Configuration.developers_collection_endpoint).then((result) => {
      if (!!result) {
        setLoading(false)
        setDevelopersList(result.data)
      }
    })
  }, [])

  React.useEffect(() => {
    getSearchResult()
  }, [])

  return (
    <GeneralContext.Provider value={{
      loading,
      developersList
    }}>
      {children}
    </GeneralContext.Provider>
  )
}
const GeneralConsumer = GeneralContext.Consumer

export {GeneralProvider, GeneralConsumer}
