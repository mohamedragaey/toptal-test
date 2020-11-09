import React from 'react'
import {Container, Grid} from '@material-ui/core'
import {useStyles} from './Styles'
import {SearchLoader} from '../Loader/SearchLoader'

// bio: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.↵↵Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.↵↵Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.↵↵Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.↵↵Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
// category: "Full-stack developer"
// city: "Sampacho"
// country: "Argentina"
// first_name: "Willabella"
// generalBio: "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis."
// id: 1
// last_name: "Batten"
// photoUrl: "http://dummyimage.com/100x100.jpg/cc0000/ffffff"
// skills: [{title: "React"}, {title: "PHP"}]
const ProfilePageContent = ({profileObj, loading}) => {
  const classes = useStyles()

  return (
    <Container maxWidth={false}>
      <Grid container spacing={2} justify={'space-between'}>
        {!!loading && <SearchLoader/>}
        {!!Object.keys(profileObj).length &&
        <Grid item xs={12}>
          <h1>{`${profileObj.first_name} ${profileObj.last_name}`}</h1>
          {profileObj.id}
          {profileObj.bio}
        </Grid>
        }
      </Grid>
    </Container>
  )
}

export default ProfilePageContent
