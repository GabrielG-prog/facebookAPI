const groupe = require('../../models/groupe')

/**
 * Create
 * @class
 */
class Delete {
  constructor(app, connect) {
    this.app = app
    this.groupeModel = connect.model('groupe', Groupe)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.delete('/groupe/delete/:id', (req, res) => {
      try {
        const {
          id
        } = req.params
        this.groupeModel.findByIdAndDelete(id).then(event => {
          res.status(200).json(event || {})
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
