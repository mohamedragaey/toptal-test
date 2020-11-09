import React from 'react'
import {FormattedMessage, useIntl} from 'react-intl'
import {Button, FormControl, TextField} from '@material-ui/core'
import {GeneralConsumer, GeneralProvider} from '../../../GeneralContext'
import DeveloperTypesMenu from './DeveloperTypesMenu'
import {useStyles} from './Styles'

const SearchBar = () => {
  const classes = useStyles()
  const intl = useIntl()
  return (
    <GeneralProvider>
      <GeneralConsumer>{({developersTypes, handleSelectedMenuItem, selectedMenuItem, searchKeyword, handleSearchInputChange, handleKeyPress, handleSearchBarSubmit}) => (
        <section className={classes.searchBarWrapper}>
          <DeveloperTypesMenu developersTypes={developersTypes} handleSelectedMenuItem={handleSelectedMenuItem}
                              selectedMenuItem={selectedMenuItem}/>
          <FormControl className={classes.SearchBoxFormControl} variant="outlined">
            <TextField
              placeholder={intl.formatMessage({id: 'SearchBar.PlaceHolder'})}
              id="searchKeyword"
              type={'text'}
              margin="dense"
              variant="outlined"
              value={searchKeyword}
              onChange={handleSearchInputChange}
              onKeyPressCapture={handleKeyPress}
            />
          </FormControl>
          <Button type='submit' variant='contained' color='primary' className={classes.searchButton}
                  onClick={handleSearchBarSubmit}>
            <FormattedMessage id='SearchBar.button.search'/>
          </Button>
        </section>
      )}
      </GeneralConsumer>
    </GeneralProvider>
  )
}
export default SearchBar
