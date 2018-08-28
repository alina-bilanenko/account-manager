export const mainLanguage = [
  {value: "en", label: "English"},
  {value: "fr", label: "French"},
  {value: "es", label: "Spanish"},
  {value: "ar", label: "Arabic"},
  {value: "cmn", label: "Mandarin"},
  {value: "ru", label: "Russian"},
  {value: "pt", label: "Portuguese"},
  {value: "de", label: "German"},
  {value: "ja", label: "Japanese"},
  {value: "hi", label: "Hindi"},
  {value: "ms", label: "Malay"},
  {value: "fa", label: "Persian"},
  {value: "sw", label: "Swahili"},
  {value: "ta", label: "Tamil"},
  {value: "it", label: "Italian"},
  {value: "nl", label: "Dutch"},
  {value: "bn", label: "Bengali"},
  {value: "tr", label: "Turkish"},
  {value: "vi", label: "Vietnamese"},
  {value: "pl", label: "Polish"},
  {value: "jv", label: "Javanese"},
  {value: "pa", label: "Punjabi"},
  {value: "th", label: "Thai"},
  {value: "ko", label: "Korean"}
].map(suggestion => ({
  value: suggestion.value,
  label: suggestion.label,
}));

export const skills = [
  { label: 'HTML' },
  { label: 'CSS' },
  { label: 'Javascript' },
  { label: 'React' },
  { label: 'Angular' },
  { label: 'jQuery' },
  { label: 'NodeJS' },
  { label: 'Python' },
  { label: 'PHP' },
  { label: 'Ruby On Rails' },
  { label: 'SQL' },
  { label: 'BackboneJS' },
  { label: 'Web Design' },
  { label: 'Project management' },
  { label: 'Git' },
  { label: 'Docker' },
  { label: 'AWS Lambda' },
  { label: 'Firebase' }
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

export const fieldNames = {
  photo: 'photo',
  userName: 'userName',
  password: 'password',
  repeatPassword: 'repeatPassword',
  firstName: 'firstName',
  lastName: 'lastName',
  birthDate: 'birthDate',
  email: 'email',
  address: 'address',
  gender: 'gender',
  company: 'company',
  gitHubLink: 'gitHubLink',
  facebookLink: 'facebookLink',
  mainLanguage: 'mainLanguage',
  fax: 'fax',
  phone: 'phone',
  skills: 'skills',
  checkBox1: 'checkBox1',
  checkBox2: 'checkBox2',
  checkBox3: 'checkBox3',
  checkBox4: 'checkBox4',
  checkBox5: 'checkBox5',
  checkBox6: 'checkBox6',
  additionalInformation: 'additionalInformation'
};

export const initialState = {
  collectiveState: {
    createUser:  true,
    showPassword: false,
    showConfirmPassword: false
  },
  usersList: {
    listOfUsers: []
  },
  createUser: {
    addNewUser: {
      photo: null
    }
  }
};