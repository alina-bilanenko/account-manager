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
  },
  linkUnderlain: {
    textDecoration: 'none'
  }
})

export const stylesAdd = () => ({
  captions: {
    display: 'flex',
    margin: '3.5em auto 1em auto'
  },
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
  },
  sizeDialog: {
    maxWidth: 'max-content',
    maxHeight: 'max-content'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
    flex: '1',
    justifyContent: 'space-evenly'
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
  },
  error: {
    borderColor: '#EB5757'
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

export const stylesButtonGroup = () => ({
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

export const stylesCheckbox = () => ({
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

export const stylesSelect = () => ({
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

export const stylesCustomCheckBox = {
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

export const stylesRadio = () => ({
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

export const stylesRenderPhone = () => ({
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

export const stylesGoogleAddress = theme => ({
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
  customAddress: {
    boxShadow: 'unset',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    lineHeight: '16px',
    fontWeight: 400,
    borderRadius: 0,
    padding: '5px'
  },
  addressSelect: {
    backgroundColor: 'red'
  }
})

export const stylesListPlaceholder = {
  button: {
    backgroundColor: '#5E97F3',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    fontSize: '14px',
    textAlign: 'center',
    color: '#FFFFFF',
    textTransform: 'unset',
    borderRadius: 'unset',
    padding: '12px 30px',
    '&:hover': {
      backgroundColor: '#5E97F3'
    }
  },
  body: {
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 'normal',
    fontSize: '35px',
    textAlign: 'center',
    color: '#9BB0CB',
    height: '300px',
    verticalAlign: 'middle',
    backgroundColor: '#FAFCFF'
  }
}

export const stylesList = () => ({
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
  }
})

export const stylesUsersList = theme => ({
  root: {
    width: '110%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    boxShadow: 'unset'
  },
  usersList: {
    minWidth: 600,
    padding: '0 50px'
  },
  headerList: {
    backgroundColor: '#4E86E4',
    color: '#FFFFFF',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '45px',
    fontSize: '14px'
  },
  body: {
    backgroundColor: '#FFFFFF',
    '&:before': {
      content: '"-"',
      display: 'block',
      lineHeight: '2em',
      color: 'transparent',
      width: '100%'
    },
    fontSize: 14,
    '&:first-child': {
      padding: '0'
    },
    border: 'none',
    fontWeight: '500',
    color: '#475666',
    lineHeight: 'normal'
  },
  row: {
    '&:nth-of-type(odd):not(:last-child)': {
      backgroundColor: '#E7F0FF'
    },
    alignItems: 'center'
  },
  bigAvatar: {
    width: 40,
    height: 40,
    margin: '20px auto',
    padding: '0',
    backgroundColor: '#ffffff'
  },
  userName: {
    fontSize: '9px',
    fontWeight: 'normal',
    marginTop: '0'
  },
  button: {
    '&:hover': {
      backgroundColor: 'unset'
    },
    minWidth: '20px'
  },
  deleteRow: {
    marginLeft: '-50px'
  },
  noWrap: {
    whiteSpace: 'nowrap'
  },
  hiddenDelete: {
    visibility: 'visible !important',
    paddingLeft: '50px',
    backgroundColor: '#FFFFFF',
    width: '100%',
    height: '100%'
  },
  columnDelete: {
    visibility: 'hidden'
  },
  deleteButton: {
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '4rem',
    fontSize: '14px',
    textAlign: 'right',
    color: '#FF8989',
    textTransform: 'lowercase',
    '&:hover': {
      backgroundColor: 'unset'
    }
  },
  dialog: {
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    color: '#475666',
    '& > h2': {
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 'normal',
      color: '#475666'
    }
  },
  buttonDialog: {
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    color: '#4E86E4'
  }
})

export const stylesUserView = theme => ({
  captions: {
    display: 'flex',
    margin: '3.5em auto 1em auto'
  },
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center'
  },
  root: {
    width: '70%',
    margin: 'auto'
  },
  body: {
    backgroundColor: 'rgba(231, 240, 255, 0.2)',
    width: '100%',
    display: 'flex',
    flexDirection: 'row'
  },
  bigAvatar: {
    width: 200,
    height: 200,
    margin: '35px 58px',
    padding: '0',
    backgroundColor: '#FFFFFF'
  },
  firstRow: {
    verticalAlign: 'top',
    paddingTop: theme.spacing.unit * 2
  },
  tableText: {
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#475666',
    borderBottom: 'none',
    whiteSpace: 'nowrap'
  },
  tableValue: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    lineHeight: 'normal',
    fontSize: '14px',
    color: '#657C9A',
    borderBottom: 'none'
  },
  button: {
    '&:hover': {
      backgroundColor: 'unset'
    },
    padding: '4px',
    minWidth: '20px'
  }
})
