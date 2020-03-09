const shopping = require('../../models/shopping')

/**
 * Create
 * @class
 */
class Delete {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping', Shopping)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.delete('/shopping/delete/:id', (req, res) => {
      try {
        const {
          id
        } = req.params
        this.shoppingModel.findByIdAndDelete(id).then(shopping => {
          res.status(200).json(shopping || {})
        }).catch(err => {
          res.status(500).json({
            'code': 500,
            'message': err
          })
        })
      } catch (err) {
        res.status(500).json({
          'code': 500,
          'message': err
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

module.exports = Delete
