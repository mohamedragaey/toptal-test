import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import Alert from '@material-ui/lab/Alert'

function SlideTransition (props) {
  return <Slide {...props} direction="right"/>
}

const GeneralAlert = ({message, severity, generalAlertState, handleGeneralAlertClose}) => {
  return (
    <div>
      <Snackbar
        open={generalAlertState}
        onClose={handleGeneralAlertClose}
        TransitionComponent={SlideTransition}
        key={SlideTransition}
        message={message}
        anchorOrigin={{vertical: 'bottom', horizontal: 'left'}}
      >
        <Alert onClose={handleGeneralAlertClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default GeneralAlert
