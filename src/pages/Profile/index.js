import React from 'react'
import {useParams} from 'react-router-dom'
import ProfilePageContent from '../../components/ProfilePageContent'
import {GeneralConsumer, GeneralProvider} from '../../GeneralContext'

const Profile = () => {
  let {id} = useParams()

  return (
    <GeneralProvider id={id}>
      <GeneralConsumer>{({profileObj, loading}) => (
        <ProfilePageContent profileObj={profileObj} loading={loading}/>
      )}
      </GeneralConsumer>
    </GeneralProvider>
  )
}

export default Profile
