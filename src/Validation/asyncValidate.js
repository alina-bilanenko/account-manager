import db from '../db'
import { fieldNames } from 'consts'

export async function asyncValidateName (values) {
  const name = await db.table('users').get(values);

  if (name) {
    throw { [fieldNames.userName]: 'That username is taken' }
  }
}

export async function asyncValidateEmail (values) {
  const email = await db.table('users').get(values);

  if (email) {
    throw { [fieldNames.email]: 'That email is taken' }
  }
}

