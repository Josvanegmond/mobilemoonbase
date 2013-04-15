/*
It tries to assign power to inactive powerConsumers. It collects manufactured devices/materials and stores it in a queue. It adds new powerSources to power grid.
*/
function Manager(powerSources, powerConsumers, plants, availableMaterials, powerGrid){
	this.powerSources=powerSources;
	this.powerConsumers=powerConsumers;
	this.plants=plants;
	this.availableMaterials=availableMaterials;
	this.powerGrid=powerGrid;
}

//Attach power sources to power grid
//This function will require update if power grid has limit or power grid requires extra resource for extension.
Manager.prototype.managePowerSources=function(){
	for(var i=0;i<this.powerSources.length;i++){
		if(!this.powerSources[i].isUsed){
			powerGrid.sources.push(this.powerSources[i]);
			this.powerSources[i].isUsed=true;
		}
	}
}

//Try to activate power consumers
Manager.prototype.managePowerConsumers=function(){
	for(var i=0;i<this.powerConsumers.length;i++){
		if(!this.powerConsumers[i].isActive){
			powerGrid.tryToAllocatePower(this.powerConsumer[i]);
		}
	}
	//TODO: Provide power to plants
}

//Add output of plants to appropriate queues
Manager.prototype.gatherResources=function(){
//TODO
	temporaryPowerConsumers = [];

	for(var i=0;i<this.plants.length;i++){
		//deque materials, devices from output queues of plants
	}
	
	//For example:
	//Add the new power consumers to original list
	for(var i=0;i<temporaryPowerConsumers.length;i++){
		this.powerConsumers.push(temporaryPowerConsumers.shift());
	}
	
}