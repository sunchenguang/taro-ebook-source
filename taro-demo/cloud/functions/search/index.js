const app = require('wx-server-sdk')

const { getList } = require('./getList.js')

app.init({
  envName: 'demo1-c42c54',
  mpAppId: 'wx1adbb12292af7288',
})

exports.main = async (event, context) => {
  const db = app.database()
  const { func, data } = event
  let res
  if (func === 'getList') {
    res = await getList(db, data)
  }
  return {
    context,
    data: res
  }
}
