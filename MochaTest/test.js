describe("logEval", function() {

let testInp = {
	limit : ["24", "24", "24", "24", "kap", "ket", "ket"],
	op : [ ">", ">", ">", ">", "=", "!=", "="],
	inp : [ "23", "26", "2300", "2800", "kap", "kap", "kap"],
	res : [ false, true, true, true, true, true, false]
	};

for(let i = 0; i < testInp.limit.length; i++){
  it(`logic evaluation at i ${i} op:${ testInp["op"][i]} inp: ${testInp["inp"][i]} `, function() {
	
    	assert.equal(logEval( testInp["op"][i], testInp["limit"][i], testInp["inp"][i] ), testInp["res"][i]);

 
  	});
   	}

});