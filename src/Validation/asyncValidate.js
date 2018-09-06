import db from 'db'
import { fieldNames } from 'consts'

export async function asyncValidateName (values) {
  const name = await db.table('users').get({[fieldNames.userName]: values[fieldNames.userName]})

  if (name && name.id !== values.id) {
    throw { [fieldNames.userName]: 'That username is taken' }
  }
}

export async function asyncValidateEmail (values) {
  const email = await db.table('users').get({[fieldNames.email]: values[fieldNames.email]})

  if (email && email.id !== values.id) {
    throw { [fieldNames.email]: 'That email is taken' }
  }
}
