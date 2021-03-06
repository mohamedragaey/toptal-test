import React from 'react'
import {useStyles} from './Styles'
import {Container, Grid} from '@material-ui/core'
import MainBreadcrumbs from '../MainBreadcrumbs'
import SearchBar from '../SearchBar'

const BottomHeader = () => {
  const classes = useStyles()

  return (
    <section className={classes.bottomHeaderWrapper}>
      <Container maxWidth={false}>
        <Grid container alignItems='center'>
          <Grid item xs={12} sm={12} md={6}>
            <MainBreadcrumbs/>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <SearchBar/>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}
export default BottomHeader
