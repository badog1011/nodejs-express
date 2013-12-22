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


/*Ex4*/
var vcard=[];

exports.create = function(req, res){
  var person = {
  	nickname: "",
	name: "",
	tel : ""
  };
  console.log(">>>>>>>>>>>>> create");

  person.nickname = req.params.nickname;//抓取參數匿名

  person.name = req.query.name;
  person.tel  = req.query.tel;
  vcard.push(person);
  res.end();
};
exports.read = function(req, res){
  console.log(">>>>>>>>>>>>> read");
  
  res.send(vcard);
  res.end();
};
exports.update = function(req, res){
  console.log(">>>>>>>>>>>>> update");
  var nickname = req.params.nickname;

  vcard.forEach(function (entry) {
  	if (entry.nickname === nickname){
  		console.log('found!');

	  	entry.name = req.query.name;
	    entry.tel  = req.query.tel;
  	}
  });

  
  res.end();
};

exports.delete = function(req, res){
  console.log(">>>>>>>>>>>>> delete");
  var nickname = req.params.nickname;

  vcard.forEach(function (entry) {
  	if (entry.nickname === nickname){
  		console.log('found!');

  		vcard.pop(entry);
  	}
  });
  res.end();
};


