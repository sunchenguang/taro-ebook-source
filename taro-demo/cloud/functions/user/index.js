const app = require('wx-server-sdk')

const { addUser } = require('./addUser.js')
const { getUser } = require('./getUser.js')

app.init({
  envName: 'demo1-c42c54',
  mpAppId: 'wx1adbb12292af7288'
})

exports.main = async (event, context) => {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'addUser') {
    res = await addUser(db, data)
  } else if (func === 'getUser') {
    res = await getUser(db, data)
  } else if (func === 'getOpenId') {
    res = event.userInfo
  }

  return {
    data: res
  }
}
