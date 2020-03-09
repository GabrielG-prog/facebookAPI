const groupe = require('../../models/groupe')
const user = require('../../models/user')

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.userModel = connect.model('user', User)
    this.groupeModel = connect.model('groupe', Groupe)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/groupe/create/', (req, res) => {
      try {
        const eventModel = new this.groupeModel(req.body)
        res.status(201).send({
          eventModel
        })
      } catch (err) {
        console.log(err)
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

module.exports = Create
