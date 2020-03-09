const shopping = require('../../models/shopping')

/**
 * Create
 * @class
 */
class Show {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping', Shopping)

    this.run()
  }

  /**
   * middleware
   */
  middleware() {
    this.app.get('/shopping/show/:id', (req, res) => {
      const {
        id
      } = req.params

      if (id) {
        this.shoppingModel.findById(id).then(shopping => {
          res.status(200).json(shopping || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } else {
        res.status(401).json({
          'code': 401,
          'message': 'Error'
        })
      }
    })
  }

  /**
   * run
   */
  run() {
    this.middleware()
  }
}

module.exports = Show
