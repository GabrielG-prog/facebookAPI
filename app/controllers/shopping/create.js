const shopping = require('../../models/shopping')
const event = require('../../models/event')

/**
 * Create
 * @class
 */
class Create {
  constructor(app, connect) {
    this.app = app
    this.shoppingModel = connect.model('shopping', Shopping)
    this.eventModel = connect.model('event', Event)
    this.run()
  }
  /**
   * middleware
   */
  middleware() {
    this.app.post('/shopping/create/', (req, res) => {
      try {
        const shoppingModel = new this.shoppingModel(req.body)
        const event = await this.eventModel.findById(req.body.event)

        shoppingModel.save()
        res.status(201).send({
          shoppingModel
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
