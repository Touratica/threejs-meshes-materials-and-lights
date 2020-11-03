'use strict';

 class Floor extends Component {

 	constructor(x, y, z) {
                super(x, y, z);
                this.currentMesh = this.basicMesh;
            
	 }


	
 	create(obj, x, y, z) {
       
        obj.lambertMesh = [];
        obj.basicMesh = [];
        obj.phongMesh = [];
        
        //chao
        const colour =  new THREE.Color("rgb(55, 52, 67)");
        obj.addCuboid(obj, 0, 0, 0, 0, 100, 100,colour);
        scene.add(obj);

	    obj.position.x = x;
	    obj.position.y = y;
        obj.position.z = z;
 	}
 }
