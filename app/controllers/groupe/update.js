const groupe = require('../../models/groupe')

/**
 * Create
 * @class
 */
class Update {
  constructor(app, connect) {
    this.app = app
    this.groupeModel = connect.model('groupe', Groupe)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.put('/groupe/update/:id', (req, res) => {
      const {
        id
      } = req.params
      const {
        body
      } = req

      this.groupeModel.findByIdAndUpdate(id, body, {
        new: true
      }).then(event => {
        res.status(200).json(event || {})
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
