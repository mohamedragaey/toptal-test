import React from 'react'
import {Container, Grid} from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import {GeneralProvider, GeneralConsumer} from '../../GeneralContext'
import {SearchLoader} from '../Loader/SearchLoader'
import DeveloperCard from '../DeveloperCard'
import {useStyles} from './Styles'

const SearchPageContent = () => {
  const classes = useStyles()
  return (
    <GeneralProvider>
      <GeneralConsumer>{({loading, developersList, page, itemsPerPage, noOfPages, handlePaginationChange}) => (
        <Container maxWidth={false}>
          <Grid container spacing={2} justify={'space-between'}>
            <Grid item xs={12} sm={12} md={3}>
              Filters
            </Grid>
            <Grid item xs={12} sm={12} md={9}>
              <h1>Top full-stack developers in United Stats</h1>
              {!!loading && <SearchLoader/>}
              {developersList.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((developer) => (
                <DeveloperCard
                  key={developer.id}
                  id={developer.id}
                  category={developer.category}
                  bio={developer.bio}
                  city={developer.city}
                  country={developer.country}
                  first_name={developer.first_name}
                  last_name={developer.last_name}
                  generalBio={developer.generalBio}
                  photoUrl={developer.photoUrl}
                  skills={developer.skills}
                />
              ))}
              <div className={classes.paginationWrapper}>
                <Pagination
                  shape="rounded"
                  variant="outlined"
                  page={page}
                  defaultPage={1}
                  count={noOfPages}
                  onChange={handlePaginationChange}
                />
              </div>
            </Grid>
          </Grid>
        </Container>
      )}</GeneralConsumer>

    </GeneralProvider>
  )
}

export default SearchPageContent
