'use strict';

class Platform extends Component {

	constructor(x, y, z) {
		super(x, y, z);
		this.currentMesh = this.phongMesh;
	}


	addCar(obj, x, y, z, color) {
		
	}

	create(obj, x, y, z) {
		obj.phongMesh = [];
		obj.lambertMesh = [];
		obj.basicMesh = [];
        const platformColor =  new THREE.Color(0x8B4513); //"rgb(137, 116, 126)"
        obj.addCylinderVertical(obj, 0, 0, 0.1, 50, 25,platformColor);
		
	//	obj.addCar(obj, 100, -10, -125, 0x063B00);

		scene.add(obj);

		obj.position.x = x;
		obj.position.y = y;
		obj.position.z = z;
	}
	getColor()
	{
		return this.currentMesh.Color;
	}
}