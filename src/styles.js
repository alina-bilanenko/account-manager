export const mainStyles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  header: {
    textAlign: 'center',
    background: 'radial-gradient(#4E86E4, #2F68C8)',
    borderRadius: '0',
    height: '60px'
  },
  headerFlex: {
    display: 'flex',
    height: '60px'
  },
  logo: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'inherit'
  },
  link: {
    textAlign: 'center',
    verticalAlign: 'middle',
    flexDirection: 'row',
    opacity: '0.5',
    '&:focus': {
      opacity: '1'
    }
  },
  icon: {
    marginLeft: theme.spacing.unit
  },
  text: {
    color: '#FFFFFF',
    lineHeight: '16px',
    fontWeight: 'medium'
  }
})

export const stylesAdd = () => ({
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center',
    margin: '1.5em auto 1em auto'
  },
  root: {
    width: '71%',
    margin: 'auto'
  },
  header: {
    boxShadow: 'inherit',
    backgroundColor: 'rgba(151, 186, 244, 0.2)'
  },
  fieldHeader: {
    maxWidth: '100%',
    flex: '1',
    fontWeight: 'bold',
    lineHeight: '28px',
    color: '#9BB0CB',
    fontSize: '1.5rem !important',
    textTransform: 'none',
    height: '62px'
  },
  activeTab: {
    color: '#FFFFFF',
    backgroundColor: '#4E86E4'
  }
})

export const stylesAccount = theme => ({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px',
    '&:visited': {
      color: 'red'
    }
  },
  unsavedUserData: {
    backgroundColor: '#5E97F3',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`
  },
  unsavedUserDataText: {
    fontWeight: '500',
    lineHeight: '16px',
    color: '#FFFFFF',
    marginBottom: 0
  },
  unsavedUserDataTextBlack: {
    fontWeight: '900',
    lineHeight: '16px',
    color: '#FFFFFF',
    padding: '0 !important',
    marginLeft: theme.spacing.unit * 2
  },
  rightIcons: {
    marginLeft: 'auto',
    minWidth: '30px',
    maxWidth: '30px',
    padding: '0 !important'
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit * 4,
    height: '600px'
  },
  card: {
    boxShadow: 'none',
    border: '3px solid #5E97F3',
    borderRadius: '50%',
    width: '11rem',
    height: '11rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: 'auto',
    marginTop: theme.spacing.unit * 3
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing.unit * 12
  },
  imageLoader: {
    width: '100%',
    height: '100%'
  }
})

export const stylesCapabilities = theme => ({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit * 7,
    height: '600px',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '70%'
  }
})

export const stylesContacts = theme => ({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit * 7,
    height: '600px',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '70%'
  }
})

export const stylesProfile = theme => ({
  root: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    height: '600px'
  },
  gridItem: {
    flex: '1',
    paddingTop: theme.spacing.unit * 7,
    height: '600px',
    display: 'flex',
    justifyContent: 'center'
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '70%'
  }
})

export const stylesImgLoader = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: 'none'
  },
  avatar: {
    margin: 'auto',
    display: 'block',
    textTransform: 'lowercase',
    border: 'none',
    textAlign: 'center',
    width: '50%',
    paddingLeft: '0',
    '&:hover': {
      backgroundColor: 'inherit'
    }
  },
  addAvatar: {
    color: '#9BB0CB'
  },
  error: {
    color: '#EB5757',
    textAlign: 'center',
    textTransform: 'none',
    fontWeight: '400'
  }
})

export const stylesBirthDate = theme => ({
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #C1CFE0',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: '#000000',
    '& + div': {
      marginLeft: '-16px'
    },
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    width: '100%'
  },
  textHelper: {
    color: '#EB5757',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  textField: {
    marginBottom: '25px',
    '&input': {
      borderRadius: 0,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #C1CFE0',
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 500,
      padding: '10px 12px',
      width: 'calc(100% - 24px)',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      color: '#000000',
      '& + div': {
        marginLeft: '-16px'
      }
    }
  },
  visibleIcon: {
    marginLeft: theme.spacing.unit * (-4)
  }
})

export const stylesInput = theme => ({
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #C1CFE0',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: '#000000',
    '& + div': {
      marginLeft: '-16px'
    }
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  textField: {
    marginBottom: '25px',
    '&input': {
      borderRadius: 0,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #C1CFE0',
      fontSize: 14,
      lineHeight: '16px',
      fontWeight: 500,
      padding: '10px 12px',
      width: 'calc(100% - 24px)',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      color: '#000000',
      '& + div': {
        marginLeft: '-16px'
      }
    }
  },
  error: {
    borderColor: '#EB5757'
  },
  visibleIcon: {
    marginLeft: theme.spacing.unit * (-4)
  },
  textHelper: {
    color: '#EB5757'
  }
})

export const stylesButtonGroup = theme => ({
  buttonGroup: {
    display: 'flex',
    marginTop: '20%',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: '#5E97F3',
    textTransform: 'none',
    width: '100px',
    height: '40px',
    '&:hover': {
      backgroundColor: '#5E97F3'
    }
  },
  hidden: {
    visibility: 'hidden'
  },
  finish: {
    backgroundColor: '#4EE4A5',
    '&:hover': {
      backgroundColor: '#4EE4A5'
    }
  }
})

export const stylesCheckbox = theme => ({
  root: {
    display: 'flex',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#657C9A',
    flexDirection: 'column'
  },
  label: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#657C9A',
    marginBottom: '10px',
    marginLeft: '-14px'
  }
})

export const stylesMask = theme => ({
  bootstrapInput: {
    borderRadius: 0,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #C1CFE0',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 500,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    color: '#000000',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  error: {
    borderColor: '#EB5757'
  },
  textHelper: {
    color: '#EB5757'
  },
  inputField: {
    marginBottom: '25px'
  }
})

export const stylesSelect = theme => ({
  root: {
    marginBottom: '10px'
  },
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A !important',
    transform: 'translate(0, -5.5px) scale(1)',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  textHelper: {
    color: '#EB5757',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
  }
})

export const stylesMyHobbies = {
  root: {
    color: '#C1CFE0',
    width: 30,
    height: 30,
    '&$checked': {
      color: '#4E86E4'
    }
  },
  checked: {},
  sizeIcon: {
    fontSize: 20,
    background: '#4E86E4',
    border: '3px solid #C1CFE0',
    boxSizing: 'border-box'
  }
}

export const stylesRadio = theme => ({
  bootstrapFormLabel: {
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    color: '#657C9A'
  },
  group: {
    flexDirection: 'row'
  },
  radio: {
    color: '#C1CFE0',
    '&$checked': {
      color: '#4E86E4'
    }
  },
  checked: {
    '&, & + $label': {
      color: '#000000',
      fontWeight: '500'
    }
  },
  label: {}
})

export const stylesRenderPhone = theme => ({
  root: {
    listStyle: 'none',
    padding: '0',
    margin: '0'
  },
  addNumber: {
    display: 'block',
    textTransform: 'lowercase',
    border: 'none',
    width: '50%',
    paddingLeft: '0',
    '&:hover': {
      backgroundColor: 'inherit'
    },
    marginTop: '-25px'
  },
  addNumberColor: {
    color: '#657C9A'
  },
  buttonRemove: {
    position: 'absolute',
    right: '-8%',
    top: '40%',
    border: 'none',
    background: 'transparent'
  },
  button: {
    position: 'relative'
  }
})
