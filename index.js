var apiconnWsdl = require("apiconnect-wsdl");
var yaml 	    = require("js-yaml");
var fs          = require("fs");

console.log('Lets to parse from file  '+process.argv[2]);


var promise = apiconnWsdl.getJsonForWSDL(process.argv[2]);


promise.then(function(wsdls){
	console.log('working...');
	// Get Services from all parsed WSDLs
	var serviceData = apiconnWsdl.getWSDLServices(wsdls);
	//console.log(serviceData);
	// Loop through all services and genereate yaml file
	for (var  item in serviceData.services) {
		try{
			var serviceName = serviceData.services[item].service;
			var wsdlId = serviceData.services[item].filename;
			var wsdlEntry = apiconnWsdl.findWSDLForServiceName(wsdls, serviceName);
			var swagger = apiconnWsdl.getSwaggerForService(wsdlEntry, serviceName, wsdlId);
			console.log("writting to "+"./"+serviceName+".yaml");
			fs.writeFile("./"+serviceName+".yaml", yaml.safeDump(swagger), function(err){ 
																				if(err){
																					console.log('An error occur. Details:  '+err)
																				}else{
																					console.log('Finished OK')
																				}
																			});

		}catch(err){
			console.log('An error occur. Details:  '+err)
		}
	}
}, function (error) {
	console.log(error.message)
});