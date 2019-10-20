async function getCart (db, data) {
  const { _id } = data
  const cartColl = db.collection('cart')
  let cartData = {
    _id,
    cartNum: 0,
    totalPrice: 0,
    cartInfo: [],
    shopMap: {}
  }

  const res = await cartColl.doc(_id).get()
  if (!res.data || !Object.keys(res.data).length) {
    await cartColl.add(cartData)
  } else {
    cartData = res.data
  }
  return cartData
}

exports.getCart = getCart
