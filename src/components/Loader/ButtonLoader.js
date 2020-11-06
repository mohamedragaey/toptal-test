import React from 'react'
import { MagicSpinner } from 'react-spinners-kit'
import { useStyles } from './Styles'

export const ButtonLoader = ({ loading }) => {
  let classes = useStyles()
  return (
    <div className={classes.buttonLoaderWrapper}>
      <MagicSpinner
        size={30}
        color="#29cc8b"
        loading={loading}
      />
    </div>
  )
}
