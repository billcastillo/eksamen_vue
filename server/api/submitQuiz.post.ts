export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  // throw createError({
  //   statusCode: 400,
  //   statusMessage: 'ID should be an integer',
  // })

  return {
    hello: 'world',
    error: 'error here',
  }
})
