import React from 'react'
import { MagicSpinner } from 'react-spinners-kit'
import { useStyles } from './Styles'

export const SearchLoader = ({ loading }) => {
  let classes = useStyles()
  return (
    <div className={classes.SearchLoaderWrapper}>
      <MagicSpinner
        size={100}
        color="#29cc8b"
        loading={loading}
      />
    </div>
  )
}
