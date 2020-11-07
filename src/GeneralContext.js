import React, {createContext} from 'react'
import SearchServices from './Services/Consumers/SearchServices'
import Configuration from './Services/Api/Configuration'

const GeneralContext = createContext({})

const GeneralProvider = ({children}) => {
  const [developersList, setDevelopersList] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [developersTypes, setDevelopersTypes] = React.useState([])
  const [developersTypesLoading, setDevelopersTypesLoading] = React.useState(false)
  const [developersSkills, setDevelopersSkills] = React.useState([])
  const [developersSkillsLoading, setDevelopersSkillsLoading] = React.useState(false)
  const [developersTypesCheck, setDevelopersTypesCheck] = React.useState([])
  const [developersSkillsCheck, setDevelopersSkillsCheck] = React.useState([])
  const [filteredSkillsList, setFilteredSkillsList] = React.useState([])
  const [page, setPage] = React.useState(1)
  const itemsPerPage = 10
  const [noOfPages, setNoOfPages] = React.useState(Math.ceil(filteredSkillsList.length / itemsPerPage))

  const getSearchResult = React.useCallback(() => {
    setLoading(true)
    SearchServices.Listing(Configuration.developers_collection_endpoint).then((result) => {
      if (!!result) {
        setLoading(false)
        setDevelopersList(result.data)
      }
    })
  }, [])

  const getDevelopersTypes = React.useCallback(() => {
    setDevelopersTypesLoading(true)
    SearchServices.Listing(Configuration.specialisation_collection_endpoint).then((result) => {
      if (!!result) {
        setDevelopersTypesLoading(false)
        setDevelopersTypes(result.data)
      }
    })
  }, [])

  const getDevelopersSkills = React.useCallback(() => {
    setDevelopersSkillsLoading(true)
    SearchServices.Listing(Configuration.skills_collection_endpoint).then((result) => {
      if (!!result) {
        setDevelopersSkillsLoading(false)
        setDevelopersSkills(result.data)
      }
    })
  }, [])

  React.useEffect(() => {
    getSearchResult()
    getDevelopersTypes()
    getDevelopersSkills()
  }, [getSearchResult, getDevelopersTypes, getDevelopersSkills])

  const handlePaginationChange = (event, value) => {
    setPage(value)
    window.scrollTo(0, 0)
  }

  const handleDevelopersTypesChange = (title) => {
    if (developersTypesCheck.includes(title)) {
      const filterIndex = developersTypesCheck.indexOf(title)
      const newFilter = [...developersTypesCheck]
      newFilter.splice(filterIndex, 1)
      setDevelopersTypesCheck(newFilter)
    } else {
      setDevelopersTypesCheck([...developersTypesCheck, title])
    }

  }

  const handleDevelopersSkillsChange = (title) => {
    if (developersSkillsCheck.includes(title)) {
      const filterIndex = developersSkillsCheck.indexOf(title)
      const newFilter = [...developersSkillsCheck]
      newFilter.splice(filterIndex, 1)
      setDevelopersSkillsCheck(newFilter)
    } else {
      setDevelopersSkillsCheck([...developersSkillsCheck, title])
    }
  }

  React.useEffect(() => {
    if (developersSkillsCheck.length === 0 || developersSkillsCheck.length === (developersSkills.length + developersTypes.length)) {
      setFilteredSkillsList(developersList)
      setNoOfPages(Math.ceil(filteredSkillsList.length / itemsPerPage))
    } else {
      setFilteredSkillsList(developersList.filter((item => (
        developersSkillsCheck.includes(item.skills[0].title) || developersSkillsCheck.includes(item.category)
      ))))
      setNoOfPages(Math.ceil(filteredSkillsList.length / itemsPerPage))
    }
    console.log('developersSkillsCheck....', developersSkillsCheck)

  }, [developersSkillsCheck])

  return (
    <GeneralContext.Provider value={{
      loading,
      page,
      setPage,
      noOfPages,
      itemsPerPage,
      developersList,
      developersTypes,
      developersSkills,
      developersTypesLoading,
      developersSkillsLoading,
      developersTypesCheck,
      developersSkillsCheck,
      filteredSkillsList,
      handlePaginationChange,
      handleDevelopersTypesChange,
      handleDevelopersSkillsChange
    }}>
      {children}
    </GeneralContext.Provider>
  )
}
const GeneralConsumer = GeneralContext.Consumer

export {GeneralProvider, GeneralConsumer}
