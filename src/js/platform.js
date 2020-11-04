class Platform extends Component {

	constructor(x, y, z) {

		const platformColor =  new THREE.Color("rgb(137, 116, 126)"); //"rgb(137, 116, 126)"

		super(x, y, z);

		this.addCylinderVertical(0, 0, 0.1, 80, 5,platformColor);
		this.car;

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

	getColor() {
		return this.currentMesh.Color;
	}
}