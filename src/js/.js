'use strict';

 class Floor extends Entity {

 	constructor(x, y, z) {
                super(x, y, z);
                this.currentMesh = this.phongMesh;
	 }


	
 	create(obj, x, y, z) {
        obj.phongMesh = [];
        obj.lambertMesh = [];
        obj.basicMesh = [];
         
        //parede        
        obj.addParallelepiped(obj, 0, 0, 0, 1, 300, 500, 0x404040);


        //chao
        obj.addParallelepiped(obj, 100, -150, 0, 200, 1, 500, 0x778899);

         
	scene.add(obj);

	obj.position.x = x;
	obj.position.y = y;
        obj.position.z = z;
 	}
 }
