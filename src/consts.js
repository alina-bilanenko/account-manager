export const mainLanguage = [
  { label: 'Rushian' },
  { label: 'Ukrainian' },
  { label: 'English, Canada' },
  { label: 'English, Australia' },
  { label: 'English, UK' },
  { label: 'English, USA' },
].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
}));

export const skills = [
  { label: 'art direction' },
  { label: 'aerobica' },
  { label: 'DevOps' },
  { label: 'designer' },
  { label: 'make-up artist' },
  { label: 'project manager' },
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
  myHobbies: 'myHobbies',
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