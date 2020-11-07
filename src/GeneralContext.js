import React, {createContext} from 'react'
import SearchServices from './Services/Consumers/SearchServices'
import Configuration from './Services/Api/Configuration'

const GeneralContext = createContext({})

const GeneralProvider = ({children}) => {
  const [developersList, setDevelopersList] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const itemsPerPage = 10
  const noOfPages = Math.ceil(developersList.length / itemsPerPage)

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
  }, [getSearchResult])

  const handlePaginationChange = (event, value) => {
    setPage(value)
    window.scrollTo(0, 0)
  }

  return (
    <GeneralContext.Provider value={{
      loading,
      page,
      setPage,
      noOfPages,
      itemsPerPage,
      developersList,
      handlePaginationChange
    }}>
      {children}
    </GeneralContext.Provider>
  )
}
const GeneralConsumer = GeneralContext.Consumer

export {GeneralProvider, GeneralConsumer}
