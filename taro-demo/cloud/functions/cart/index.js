const app = require('wx-server-sdk')

const { getCart } = require('./getCart.js')
const { editCart } = require('./editCart.js')

app.init({
  envName: 'demo1-c42c54',
  mpAppId: 'wx1adbb12292af7288'
})

async function main (event, context) {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'getCart') {
    res = await getCart(db, data).catch(err => console.log(err))
  } else if (func === 'editCart') {
    res = await editCart(db, data).catch(err => console.log(err))
  }

  return {
    context,
    data: res
  }
}

exports.main = main
