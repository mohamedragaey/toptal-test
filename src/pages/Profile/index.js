import React from 'react'
import ProfilePageContent from '../../components/ProfilePageContent'
import {SEO} from '../../components/Seo/seo'
import {profile} from '../../utils/pages-meta.json'
import {NamedRoutes} from '../../routes'

const Profile = () => {
  return (
    <>
      <SEO title={profile.title}
           pathname={window.location.origin + NamedRoutes.profile}
           titleTemplate='UI Search'
           image={profile.image}
           description={profile.description}
      />
      <ProfilePageContent/>
    </>
  )
}

export default Profile
