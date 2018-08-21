export const stylesApp = theme =>({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
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
    marginLeft: theme.spacing.unit,
  },
  text: {
    color: '#FFFFFF',
    lineHeight: '16px',
    fontWeight: 'medium'
  },
});

export const stylesAdd = (theme) =>({
  caption: {
    width: '100%',
    maxWidth: 500,
    fontSize: '2.2rem',
    fontWeight: 'bold',
    lineHeight: '41px',
    color: '#475666',
    textAlign: 'center',
    margin: '1.5em auto 1em auto',
  },
  root: {
    width: '71%',
    margin: 'auto'
  },
  header: {
    boxShadow: 'inherit',
    backgroundColor: 'rgba(151, 186, 244, 0.2)',
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
  },
});