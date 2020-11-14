import React, {createContext} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import SearchServices from './Services/Consumers/SearchServices'
import Configuration from './Services/Api/Configuration'
import countries from './utils/countries.json'

const GeneralContext = createContext({})

const GeneralProvider = ({children}) => {
  let location = useLocation()
  let history = useHistory()
  const [developersList, setDevelopersList] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [developersTypes, setDevelopersTypes] = React.useState([])
  const [developersTypesLoading, setDevelopersTypesLoading] = React.useState(false)
  const [developersSkills, setDevelopersSkills] = React.useState([])
  const [developersSkillsLoading, setDevelopersSkillsLoading] = React.useState(false)
  const [developersSkillsCheck, setDevelopersSkillsCheck] = React.useState([])
  const [filteredSkillsList, setFilteredSkillsList] = React.useState([])
  const [page, setPage] = React.useState(1)
  const [selectedMenuItem, setSelectedMenuItem] = React.useState('Frontend developer')
  const [searchKeyword, setSearchKeyword] = React.useState('')
  const itemsPerPage = 10
  let noOfPages = Math.ceil(filteredSkillsList.length / itemsPerPage)
  const [profileObj, setProfileObj] = React.useState({})

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

  React.useEffect(() => {
    let id = location.pathname.match(/talent\/(\d+)/) && location.pathname.match(/talent\/(\d+)/)[1]
    if (!!id) {
      setLoading(true)
      if (!!developersList.length) {
        let arr = developersList.filter((item) => {
          return id.indexOf(item.id) !== -1
        })
        setProfileObj(arr.slice(-1)[0])
        setLoading(false)
      }
    }
  }, [location.pathname, developersList])

  const handlePaginationChange = (event, value) => {
    setPage(value)
    window.scrollTo(0, 0)
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
    } else {
      setFilteredSkillsList(developersList.filter((item => (
        developersSkillsCheck.includes(item.skills[0].title) || developersSkillsCheck.includes(item.category)
      ))))
    }
  }, [developersSkillsCheck, developersList, developersSkills, developersTypes])

  /**
   * Function to check if the search keyword is cleared
   * If so it should remove all the filters criteria and show the original list
   */
  React.useEffect(() => {
    if (!searchKeyword && !!selectedMenuItem) {
      setFilteredSkillsList(developersList)
    }
  }, [searchKeyword, selectedMenuItem, developersList])

  /**
   * Handler triggered when the user click on the search button in the search bar located in the page header
   */
  const handleSearchBarSubmit = () => {
    if (!!searchKeyword) {
      if (location.pathname !== '/') {
        history.push('/')
      }
      setFilteredSkillsList(developersList.filter((item => (selectedMenuItem === (item.category) && searchKeyword === (item.country)))))
    }
  }

  const handleSearchInputChange = (event, values) => {
    setSearchKeyword(values)
  }

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      handleSearchBarSubmit()
    }
  }

  const handleSelectedMenuItem = (title) => {
    setSelectedMenuItem(title)
  }

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
      developersSkillsCheck,
      filteredSkillsList,
      searchKeyword,
      selectedMenuItem,
      profileObj,
      countries,
      handlePaginationChange,
      handleSelectedMenuItem,
      handleDevelopersSkillsChange,
      handleSearchInputChange,
      handleKeyPress,
      handleSearchBarSubmit
    }}>
      {children}
    </GeneralContext.Provider>
  )
}
const GeneralConsumer = GeneralContext.Consumer

export {GeneralProvider, GeneralConsumer}
