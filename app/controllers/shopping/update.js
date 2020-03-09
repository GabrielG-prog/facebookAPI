const shopping = require('../../models/shopping')

/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping', Shopping)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/shopping/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req

      this.shoppingModel.findByIdAndUpdate(id, body, {
        new: true
      }).then(shopping => {
        res.status(200).json(shopping || {})
      }).catch(err => {
        res.status(500).json({
          'code': 500,
          'message': err
        })
      })
    })
  }
  /**
   * run
   */
  run() {
    this.middleware()
  }
}

module.exports = Update
