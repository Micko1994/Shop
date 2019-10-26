'use strict'

module.exports = {
  handleError: () => {
    return (err, req, res, next) => {
      console.log('***ERROR***', err)

      const errorMessage = err.message || 'Something went wrong.'

      if (err instanceof SyntaxError) {
        return res.status(400).json({ status: 'error', message: err.message })
      }
      if (req.xhr) {
        const _error = {
          status: 'error',
          message: errorMessage
        }

        // if (err.stack) {
        //   return res.json(_error)
        // }

        return res.status(err.statusCode || 200).json(_error)
      } else {
        return res.json('error', {
          error: err,
          message: errorMessage
        })
      }
    }
  }
}
