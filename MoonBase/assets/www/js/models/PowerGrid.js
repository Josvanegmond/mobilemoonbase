/*
A power grid takes power from its sources and supplies power to its consumers.
*/
function PowerGrid(sources,consumers){
	this.sources=sources;
	this.consumers=consumers;
	this.totalPower=0;
	this.availablePower=0;
}

/*Checks if a new power consumer can be added*/
PowerGrid.prototype.canSupportDevice=function(powerConsumer){
	if(powerConsumer.powerToOperate<=this.availablePower)
		return true;
	else return false;	
}

PowerGrid.prototype.tryToAllocatePower=function(powerConsumer){
	if(this.canSupportDevice(powerConsumer)){
		this.availablePower-=powerConsumer.powerToOperate;
		powerConsumer.isActive=true;
	}
}