async function addUser (db, userInfo) {
  const collection = db.collection('user')
  const res = await collection.doc(userInfo._id);
  if(res) {
    // todo FIXME
    // await collection.doc(userInfo._id).set(userInfo)
    console.log(res)
  } else {
    await collection.add(userInfo)
  }

  return userInfo
}

exports.addUser = addUser
