import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {home} from '../../utils/pages-meta.json'
import SearchPageContent from '../../components/SearchPageContent'

const Home = () => {
  return (
    <>
      <SEO title={home.title}
           pathname={window.location.origin}
           titleTemplate='UI Search'
           image={home.image}
           description={home.description}
      />
      <SearchPageContent/>
    </>
  )
}

export default Home
