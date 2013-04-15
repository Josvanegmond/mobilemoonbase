/*Plants use materials to manufacture devices*/
function Material(id, name, launchMass, costPrice, sellingPrice, timeToManufacture){
	Resource.call(this,id, name, launchMass, costPrice, sellingPrice);//call parent constructor with necessary arguments
	this.timeToManufacture=timeToManufacture;
}

//inherit from Resource
Material.prototype = Object.create(Resource.prototype);
Material.prototype.constructor=Material;
//var a = new Material(1,'sand',240,200,200,200,100);
//a.sayName();