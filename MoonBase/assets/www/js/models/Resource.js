/*A Resource is a material or a device*/
function Resource(id, name, launchMass, costPrice, sellingPrice){
	this.id=id;
	this.name=name;
	this.launchMass=launchMass;
	this.costPrice=costPrice;
	this.sellingPrice=sellingPrice;
}

Resource.prototype.sayName=function(){
	alert(this.name);
}