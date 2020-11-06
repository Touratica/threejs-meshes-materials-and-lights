'use strict';

 class Floor extends Component {

 	constructor(x, y, z) {
              const colour =  new THREE.Color("rgb(55, 52, 67)");
              super(x, y, z);
              this.addCuboid(0, 0, 0, 150, 0, 150,colour);
              this.currentMesh = this.basicMesh;
            
	}
	
 }
