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


/*Ex3*/
var person = {
	tel: ""
};
exports.create = function(req, res){
  console.log(">>>>>>>>>>>>> create");
  person.tel = "0975028449";
  res.end();
};
exports.read = function(req, res){
  console.log(">>>>>>>>>>>>> read");
  
  res.send(person);
  res.end();
};
exports.update = function(req, res){
  console.log(">>>>>>>>>>>>> update");
  console.log(req.query);

  person.tel = req.query.tel;
  res.end();
};
exports.delete = function(req, res){
  console.log(">>>>>>>>>>>>> delete");
  person.tel = null;
  res.end();
};


