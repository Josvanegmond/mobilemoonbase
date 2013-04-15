/*
A device can be a power source or a power consumer.
If materialsToManufacture are available, then the device can be manufactured within given time "timeToManufacture"
Question: Should a device take some time to be manufactured, or should it be available as soon as it is created???
*/
function Device(id, name, launchMass, costPrice, sellingPrice, timeToManufacture, materialsToManufacture){
	Resource.call(this,id, name, launchMass, costPrice, sellingPrice);//call parent constructor with necessary arguments
	this.timeToManufacture=timeToManufacture;
	//this.manufactureStartTime=-1;//Time at which this object is created
	this.materialsToManufacture=materialsToManufacture;
}

//inherit from Resource
Device.prototype = Object.create(Resource.prototype);
Device.prototype.constructor=Device;


//test function
//Device.prototype.sayMaterialsToManufacture=function(){
//	alert(this.sayMaterialsToManufacture['b']);
//}

//var device = new Device(0,'power cube',200,200,200,200,{'a':'a','b':'bb','dd':'d'});
//device.sayMaterialsToManufacture();
//var a = new Material(1,'sand',240,200,200,200,100);
//a.sayName();