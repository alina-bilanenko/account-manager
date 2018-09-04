export const mainLanguage = [
  { value: 'en', label: 'English' },
  { value: 'fr', label: 'French' },
  { value: 'es', label: 'Spanish' },
  { value: 'ar', label: 'Arabic' },
  { value: 'cmn', label: 'Mandarin' },
  { value: 'ru', label: 'Russian' },
  { value: 'pt', label: 'Portuguese' },
  { value: 'de', label: 'German' },
  { value: 'ja', label: 'Japanese' },
  { value: 'hi', label: 'Hindi' },
  { value: 'ms', label: 'Malay' },
  { value: 'fa', label: 'Persian' },
  { value: 'sw', label: 'Swahili' },
  { value: 'ta', label: 'Tamil' },
  { value: 'it', label: 'Italian' },
  { value: 'nl', label: 'Dutch' },
  { value: 'bn', label: 'Bengali' },
  { value: 'tr', label: 'Turkish' },
  { value: 'vi', label: 'Vietnamese' },
  { value: 'pl', label: 'Polish' },
  { value: 'jv', label: 'Javanese' },
  { value: 'pa', label: 'Punjabi' },
  { value: 'th', label: 'Thai' },
  { value: 'ko', label: 'Korean' }
].map(suggestion => ({
  value: suggestion.value,
  label: suggestion.label
}))

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
  label: suggestion.label
}))

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
  additionalInformation: 'additionalInformation',
  lastUpdate: 'lastUpdate'
}

export const initialState = {
  collectiveState: {
    createUser:  true,
    showPassword: false,
    showConfirmPassword: false,
    editingId: null,
    editingUser: {}
  },
  usersList: []
}

export const srtuctureUser = [
  {
    title: 'Account:',
    data: [
      {
        name: fieldNames.userName,
        title: 'User name:',
      },
      {
        name: fieldNames.password,
        title: 'Password:',
      }
    ]
  },
  {
    title: 'Personal:',
    data: [
      {
        name: fieldNames.firstName,
        title: 'First name:',
      },
      {
        name: fieldNames.lastName,
        title: 'Last name:',
      },
      {
        name: fieldNames.birthDate,
        title: 'Birth date:',
      },
      {
        name: fieldNames.email,
        title: 'Email:',
      },
      {
        name: fieldNames.address,
        title: 'Adress:',
      }
    ]
  },
  {
    title: 'Contacts:',
    data: [
      {
        name: fieldNames.company,
        title: 'Company:',
      },
      {
        name: fieldNames.fax,
        title: 'Fax:',
      },
      {
        name: fieldNames.facebookLink,
        title: 'Facebook Link:',
      },
      {
        name: fieldNames.phone,
        title: 'Phone #1:',
      }
    ]
  },
  {
    title: 'Capabilities:',
    data: [
      {
        name: fieldNames.skills,
        title: 'Skills:',
      },
      {
        name: 'checkBox',
        title: 'Hobies:',
      }
    ]
  },

];
