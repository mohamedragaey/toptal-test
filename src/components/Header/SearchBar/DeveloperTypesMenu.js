import React from 'react'
import {withStyles} from '@material-ui/core/styles'
import {Button, Menu, MenuItem} from '@material-ui/core'
import {useStyles} from './Styles'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

const StyledMenu = withStyles((theme) => ({
  paper: {
    border: '1px solid #d3d4d5',
    '& .MuiListItem-button:hover': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white
    }
  }
}))((props) => (
  <Menu elevation={0} getContentAnchorEl={null} anchorOrigin={{
    vertical: 'bottom', horizontal: 'center'
  }} transformOrigin={{
    vertical: 'top',
    horizontal: 'center'
  }} {...props}/>
))

const DeveloperTypesMenu = ({developersTypes, handleSelectedMenuItem, selectedMenuItem}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Button
        aria-controls="Developer-Types-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
        className={classes.menuButton}
      >
        {selectedMenuItem} in <ArrowDropDownIcon/>
      </Button>
      <StyledMenu
        id="Developer-Types-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {developersTypes.map((type) => (
          <MenuItem key={type.id} onClick={() => {
            handleSelectedMenuItem(type.title)
            setAnchorEl(null)
          }}>{type.title}</MenuItem>
        ))}
      </StyledMenu>
    </>
  )
}
export default DeveloperTypesMenu
