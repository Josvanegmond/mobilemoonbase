/*A Plant can produce a resource: (i.e. produce devices, extract materials)*/
/*Although a plant is logically a power consumer, it does not extend PowerConsumer, because a Plant can produce PowerConsumers.*/
function Plant(id, name, resourceToProduce){
	this.id=id;
	this.name=name;
	this.resourceToProduce=resourceToProduce;
	this.availableDeviceList={};//List of devices available
	this.availableMaterialList={};
	this.requiredDeviceList={};
	this.requiredMaterialList={};
	this.availablePower=0;//PowerGrid provides it power
	this.requiredPower=0;//Power it requires to operate: sum of powers of required devices + additional power reqd by plant
	this.lastOutputId=1;//id for produced resource
	this.outputQueue=[];
}

//Manufacture devices, extract materials...
Plant.prototype.updateOutput=function(){
	//TODO
	
}

