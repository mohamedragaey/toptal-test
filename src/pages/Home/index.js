import React from 'react'
import {SEO} from '../../components/Seo/seo'
import {home} from '../../utils/pages-meta.json'

const Home = () => {
  return (
    <>
      <SEO title={home.title}
           pathname={window.location.origin}
           titleTemplate='UI Search'
           image={home.image}
           description={home.description}
      />
      <h1 style={{textAlign: 'center'}}>Welcome To Toptal search</h1>
    </>
  )
}

export default Home
