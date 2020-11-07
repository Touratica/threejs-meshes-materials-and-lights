class Platform extends Component {
	constructor(x, y, z) {

		const platformColor =  new THREE.Color("rgb(137, 116, 126)"); //"rgb(137, 116, 126) rgb(137, 116, 126)"
		//const platformColor =  new THREE.Color("black"); //"rgb(137, 116, 126) rgb(137, 116, 126)"

		super(x, y, z);
		

		this.addCylinderVertical(0, 0, 0.1, 100, 5,platformColor);
		this.currentMesh = this.basicMesh;
		this.lastMesh = this.lambertMesh;
		this.rotation_Z = "Stop";
	}
	

	addCar(car) {
		this.car = car;
		this.add(car);
	}

	changeMesh(flag) { //muda o tipo de mesh, consoante a flag passada
		//obj pode ser do tipo carro ou palanquete
		super.changeMesh(flag);
		this.car.changeMesh(flag);
	}

	
	get_rotation()
	{
		return this.rotation_Z;
	}
	set_rotation(rot){
		this.rotation_Z = rot;
	}
	rotate_z(angle) {
        if (this.angle >= (Math.PI) / 3 && this.rotate_z == "Left"){
            return;
        }

        if (this.angle >= -(Math.PI) / 3 && this.rotate_z == "Right"){
            return;
        }

        let a = this.angle + angle;

        if (a >= Math.PI / 3) {
            this.angle = (Math.PI) / 3;
            return;
        }
        else if (a <= -Math.PI / 3) {
            this.angle = -Math.PI / 3;
            return;
        }
        this.angle = a;
        this.rotateZ(angle);
    }
}