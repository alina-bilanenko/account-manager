import db from '../db'
// import { fieldNames } from 'consts'

export async function asyncValidateName (values) {
  try {
    console.log(await db.table('users').schema)
    // const name = await db.table('users').get({id: 262});
    // const name = await db.table('users').where({email: "1"}).toArray()
    // const name = await db.table('users').get({email: "1"});
    // console.log(name)

    // if (name) {
    //   throw { [values[fieldNames.userName]]: 'That username is taken' }
    // }
  } catch (e) {
    console.log(e)
  }
}

// export const asyncValidateName = (values) => {
//   console.log(values)
//   return async () => {
//     try{
//       const name = await db.table('users').get(values);
//       // console.log(name)
//       if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
//         throw { [values[fieldNames.userName]]: 'That username is taken' }
//       }
//     }
//     catch (e) {
//       console.log(e)
//     }
//   }
// };

// export const asyncValidateEmail = (values) => {
//   console.log(values)
//   return async () => {
//     const name = await db.table('users').get(values);
//     // console.log(name)
//     if ([ 'john', 'paul', 'george', 'ringo' ].includes(values.username)) {
//       throw { [values[fieldNames.email]]: 'That email is taken' }
//     }
//   }
// };
