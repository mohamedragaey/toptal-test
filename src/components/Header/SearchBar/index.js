import React from 'react'
import {useStyles} from './Styles'
import {Container, Grid} from '@material-ui/core'
import MainBreadcrumbs from '../MainBreadcrumbs'

const SearchBar = () => {
  const classes = useStyles()

  return (
    <section className={classes.searchBarWrapper}>
      <Container maxWidth={false}>
        <Grid container alignItems='center'>
          <Grid item xs={12} sm={12} md={6}>
            <MainBreadcrumbs/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            search bar
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
export default SearchBar
