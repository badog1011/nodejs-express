/*
 * GET Server Name
 * GET Current Time
 * GET Count
 */

var i=0; //初始化
exports.info = function(req, res){
 
 var obj = {

    "Server name:": "FatTing" ,
    "Current Time:": new Date().toISOString(),
    "瀏覽人數:": i++
	
	};

  res.send(obj);
};
