import React from 'react'
import {FormattedMessage} from 'react-intl'
import {Container, Grid} from '@material-ui/core'
import {SearchLoader} from '../Loader/SearchLoader'
import CanHelpYouWith from './parts/CanHelpYouWith'
import PersonalInfo from './parts/PersonalInfo'
import Experience from './parts/Experience'
import FormDialog from './FormDialog'
import {useStyles} from './Styles'
import {lg} from '../../utils/ResponsiveUtility'
import {GeneralConsumer} from '../../GeneralContext'

const ProfilePageContent = () => {
  const classes = useStyles()
  let [width, setWidth] = React.useState(document.body.clientWidth)
  let Mobile = (width < lg)
  let DesktopAndUp = (width >= lg)
  React.useEffect(() => {
    const getWidth = () => {
      setWidth(document.body.clientWidth)
    }
    window.addEventListener('resize', getWidth)
    return () => {
      window.removeEventListener('resize', getWidth)
    }
  }, [width])

  return (
    <GeneralConsumer>
      {({profileObj, loading}) => (
        <section className={classes.paper}>
          <Container maxWidth={'lg'}>
            {!!loading && <SearchLoader/>}
            {!!Object.keys(profileObj).length &&
            <Grid container spacing={6} justify={'space-between'}>
              <Grid item xs={12} md={12} lg={10}>
                <PersonalInfo profileObj={profileObj}/>
                <Grid container spacing={4} justify={'space-between'}>
                  <Grid item xs={12} md={8} lg={9} className={classes.borderRight}><Experience/></Grid>
                  <Grid item xs={12} md={4} lg={3} className={classes.order}>
                    {Mobile && <FormDialog profileObj={profileObj}/>}
                    <CanHelpYouWith profileObj={profileObj}/>
                  </Grid>
                </Grid>
              </Grid>
              {DesktopAndUp && <Grid item xs={12} lg={2} className={classes.contactOptionsWrapper}>
                <h2 className={classes.contactOptionsTitle}><FormattedMessage id='ContactOptions.title'/></h2>
                <FormDialog profileObj={profileObj}/>
              </Grid>}
            </Grid>
            }
          </Container>
        </section>
      )}
    </GeneralConsumer>
  )
}

export default ProfilePageContent
