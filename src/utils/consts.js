import BirthDate from 'components/commonComponents/BirthDate'
import { Calendar, Close } from "utils/icons";
import BootstrapInput from 'components/commonComponents/BootstrapInput'
import GenderRadioBtns from 'components/commonComponents/GenderRadioBtns'
import GoogleAddress from 'components/commonComponents/GoogleAddress'
import IntegrationReactSelect from 'components/commonComponents/IntegrationReactSelect'
import { BottomNavigationAction } from "@material-ui/core";
import React from "react";

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
]

export const skills = [
  'HTML',
  'CSS',
  'Javascript',
  'React',
  'Angular',
  'jQuery',
  'NodeJS',
  'Python',
  'PHP',
  'Ruby On Rails',
  'SQL',
  'BackboneJS',
  'Web Design',
  'Project management',
  'Git',
  'Docker',
  'AWS Lambda',
  'Firebase'
].map(item => ({ label: item, value: item }))

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
    editingUser: {},
    indDeleteUser: 0,
    openConfirmation: false,
    hasUnsavedData: false,
    search: 'firstName',
    filter: ''
  },
  pagination: {
    page: 1,
    rowsPerPage: 5,
    count: 0
  },
  cropState: {
    crop: {
      x: 10,
      y: 10,
      width: 20,
      height: 20
    },
    modalOpenDialogCrop: false
  },
  usersList: []
}

export const srtuctureUser = [
  {
    name: 'account',
    title: 'Account:',
    data: [
      {
        name: fieldNames.userName,
        title: 'User name:'
      },
      {
        name: fieldNames.password,
        title: 'Password:'
      }
    ]
  },
  {
    name: 'profile',
    title: 'Personal:',
    data: [
      {
        name: fieldNames.firstName,
        title: 'First name:'
      },
      {
        name: fieldNames.lastName,
        title: 'Last name:'
      },
      {
        name: fieldNames.birthDate,
        title: 'Birth date:'
      },
      {
        name: fieldNames.email,
        title: 'Email:'
      },
      {
        name: fieldNames.address,
        title: 'Adress:'
      }
    ]
  },
  {
    name: 'contacts',
    title: 'Contacts:',
    data: [
      {
        name: fieldNames.company,
        title: 'Company:'
      },
      {
        name: fieldNames.fax,
        title: 'Fax:'
      },
      {
        name: fieldNames.facebookLink,
        title: 'Facebook Link:'
      },
      {
        name: fieldNames.phone,
        title: 'Phone:'
      }
    ]
  },
  {
    name: 'capabilities',
    title: 'Capabilities:',
    data: [
      {
        name: fieldNames.skills,
        title: 'Skills:'
      },
      {
        name: 'checkBox',
        title: 'Hobies:'
      }
    ]
  }
]

export const tabList = [
  {
    name: 'account',
    title: '1. Account'
  },
  {
    name: 'profile',
    title: '2. Profile'
  },
  {
    name: 'contacts',
    title: '3. Contacts'
  },
  {
    name: 'capabilities',
    title: '4. Capabilities'
  }
]

export const myHobbiesList = [
  {
    name: fieldNames.checkBox1,
    title: 'Art'
  },
  {
    name: fieldNames.checkBox2,
    title: 'Sport, fitness, aerobica and staff like that'
  },
  {
    name: fieldNames.checkBox3,
    title: 'I just want to play games, I’m not living in this life'
  },
  {
    name: fieldNames.checkBox4,
    title: 'I’m a female... I’m doing nothing. Every day.'
  },
  {
    name: fieldNames.checkBox5,
    title: 'Guitar, guitar and guitar again. I’m fall in love with it.'
  },
  {
    name: fieldNames.checkBox6,
    title: 'WTF is “hobbies”???'
  }
]

export const columnProfile = [
  [
    {
      name: fieldNames.firstName,
      label: 'First name',
      component: BootstrapInput,
      type: 'text'
    },
    {
      name: fieldNames.lastName,
      label: 'Last name',
      component: BootstrapInput,
      type: 'text'
    },
    {
      name: fieldNames.birthDate,
      label: 'Birth date',
      component: BirthDate,
      type: 'data time',
      icon: Calendar
    }
  ],
  [
    {
      name: fieldNames.email,
      required: true,
      label: 'Email',
      component: BootstrapInput,
      type: 'email'
    },
    {
      name: fieldNames.address,
      label: 'Address',
      component: GoogleAddress,
      type: 'text'
    },
    {
      name: fieldNames.gender,
      component: GenderRadioBtns
    }
  ]
]

export const leftColumnContacts = [
  {
    name: fieldNames.company,
    required: true,
    label: 'Company',
    component: BootstrapInput,
    type: 'text'
  },
  {
    name: fieldNames.gitHubLink,
    label: 'Github link',
    component: BootstrapInput,
    type: 'text'
  },
  {
    name: fieldNames.facebookLink,
    label: 'Facebook link',
    component: BootstrapInput,
    type: 'text'
  },
  {
    name: fieldNames.mainLanguage,
    label: 'Main language',
    component: IntegrationReactSelect,
    type: 'text',
    isMulti: false,
    options: mainLanguage
  }
]

export const gender = [
  {
    value: 'male',
    label: 'Male'
  },
  {
    value: 'female',
    label: 'Female'
  }
]

export const headerLink = [
  {
    linkTo: '\'/create-user/account\'',
    onClick: 'handlerClickAddUser',
    icon: 'AddNewUser',
    classActive: (path) => path.indexOf('create-user') !== -1
  },
  {
    linkTo: '/list-of-user',
    onClick: 'handlerClickListOfUsers',
    icon: 'ListAllUsers',
    classActive: (path) => path.indexOf('create-user') === -1
  }
]

export const rightColumnAccount = [
  {
    name: fieldNames.userName,
    label: 'User name',
    endAdornment: false,
    type: 'text'
  },
  {
    name: fieldNames.password,
    label: 'Password',
    endAdornment: true,
    type: (showPassword) => showPassword ? 'text' : 'password',
    show: showPassword => showPassword,
    changeShow: changeShowPassword => changeShowPassword
  },
  {
    name: fieldNames.repeatPassword,
    label: 'Repeat Password',
    endAdornment: true,
    type: (showPassword, showConfirmPassword) => showConfirmPassword ? 'text' : 'password',
    show: (showPassword, showConfirmPassword) => showConfirmPassword,
    changeShow: (changeShowPassword, changeShowConfirmPassword) => changeShowConfirmPassword
  }
]

export const rightColumnCapabilities = [
  {
    name: fieldNames.skills,
    label: 'Skills',
    isMulti: true,
    indicator: true,
    component: IntegrationReactSelect,
    options: skills
  },
  {
    name: fieldNames.additionalInformation,
    label: 'Additional information',
    component: BootstrapInput,
    type: 'text',
    maxLength: '300',
    multiline: true
  }
]

export const completeNavigationAction = [
  {
    icon: 'Continue',
    className: (classes) => classes.unsavedUserDataTextBlack,
    click: (completeData) => completeData
  },
  {
    icon: Close,
    className: (classes) => classes.rightIcons,
    click: (completeData, closeComplete) => closeComplete
  }
]