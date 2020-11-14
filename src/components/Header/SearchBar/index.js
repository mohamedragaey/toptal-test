import React from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import Autocomplete from '@material-ui/lab/Autocomplete'
import {Button, FormControl, TextField} from '@material-ui/core'
import {GeneralConsumer} from '../../../GeneralContext'
import DeveloperTypesMenu from './DeveloperTypesMenu'
import {useStyles} from './Styles'

const SearchBar = () => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <GeneralConsumer>{({developersTypes, handleSelectedMenuItem, selectedMenuItem, countries, searchKeyword, handleSearchInputChange, handleKeyPress, handleSearchBarSubmit}) => (
      <section className={classes.searchBarWrapper}>
        <DeveloperTypesMenu developersTypes={developersTypes} handleSelectedMenuItem={handleSelectedMenuItem}
                            selectedMenuItem={selectedMenuItem}/>
        <FormControl className={classes.SearchBoxFormControl} variant="outlined">
          <Autocomplete
            id="searchKeyword"
            freeSolo
            options={countries.map((option) => option.name)}
            onChange={handleSearchInputChange}
            onKeyPressCapture={handleKeyPress}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder={intl.formatMessage({id: 'SearchBar.PlaceHolder'})}
                id="searchKeyword"
                margin="dense"
                variant="outlined"
                value={searchKeyword}
              />
            )}
          />
        </FormControl>
        <Button type='submit' variant='contained' color='primary' className={classes.searchButton}
                onClick={handleSearchBarSubmit}>
          <FormattedMessage id='SearchBar.button.search'/>
        </Button>
      </section>
    )}
    </GeneralConsumer>
  )
}
export default SearchBar
