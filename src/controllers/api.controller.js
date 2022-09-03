const controller = {};

controller.indexRoute = async (req, res, next) => {
  return res.send({success: true}) 
}


module.exports = controller