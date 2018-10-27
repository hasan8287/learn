const lib = {}

lib.pagination = (params) => {
  const { pages, page, limit = 5 } = params
  const data = []

  let index = 1
  if (page > Math.ceil(pages/limit)) {
    index = page - Math.floor(pages/limit)
    if ((pages - index - 1) < limit) {
      console.log('silit')
      // index = index - Math.floor(pages/limit) - 1
    }
  }

  console.log('index : ', index)
  // if ((pages - index) < pages) {
  //   console.log('hahaha')
  //   index = index - (pages - (index + limit))
  // }


  for (let i = index; i <= pages; i += 1) {
    data.push(i)
    if (data.length === limit) break
  }

  return data

}

export default lib
