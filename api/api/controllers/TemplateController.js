/*---------------------
	:: Template 
	-> controller
---------------------*/
var TemplateController = {

  index: function (req,res) {
    var listOfAssetSourcePaths = sails.config.assets.sequence;

    var htmlString = "";
    async.each(listOfAssetSourcePaths, function (path,cb) {
      require('fs').readFile(path,function (err, contents) {
        if (err) return cb(err);
        htmlString += contents;
      });
    }, function (err) {
      if (err) return res.send(err,500);

      res.contentType('text/html');
      res.send(htmlString);
    });
  }

};
module.exports = TemplateController;
