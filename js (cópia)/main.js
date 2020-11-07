let camera, PerspectiveCamera /*4*/, OrtogonalCamera /*5*/;

let scene, renderer;
let clock = new THREE.Clock();
let cameraRatio = 20;

var directionalLight;
var onn_off_Directional = 0;

let car;
let radium = 2; //raio da roda
let platform; // objeto palanque inclui o carro consigo. 
let floor;


let time = clock.getDelta();

// Sets the z-axis as the top pointing one
THREE.Object3D.DefaultUp.set(0, 0, 1);


function createOrtogonalCamera(x, y, z) {
	// Adjusts camera ratio so the scene is totally visible 
	if (window.innerWidth / window.innerHeight > 1.2725) {
		cameraRatio = window.innerHeight / 150;
	}
	else {
		cameraRatio = window.innerWidth / 190;
	}
	/*OrthographicCamera( left, right, top, bottom, near, far )*/
	camera = new THREE.OrthographicCamera(window.innerWidth / -(2 * cameraRatio),
		window.innerWidth / (2 * cameraRatio), window.innerHeight / (2 * cameraRatio),
		window.innerHeight / -(2 * cameraRatio), 0, 1000);

	camera.position.x = x;
	camera.position.y = y;
	camera.position.z = z;
	camera.lookAt(scene.position);
	return camera;
}

function createPerspectiveCamera(x, y, z) {
	/* PerspectiveCamera(fov, aspect, near, far)
	fov — Camera frustum vertical field of view. 
	aspect — Camera frustum aspect ratio.*/
	camera = new THREE.PerspectiveCamera(70,innerWidth / innerHeight, 1, 2000);
	camera.position.x = x;
	camera.position.y = y;
	camera.position.z = z;
	camera.lookAt(scene.position);
	return camera;
}

function createScene() {
	scene = new THREE.Scene();
	//scene.background = new THREE.Color("black");
	
	// Adds axes to the scene: x-axis is red, y-axis is green, z-axis is blue
	scene.add(new THREE.AxesHelper(30));
	floor = new Floor(0,0,0);
	
	//car = new Car(100, -10, -125,radium);
	car = new Car(9,-15,3.5,5); //mudar
	//car.addCar(100,-10,-125,radium)
	platform = new Platform(0,0,0);
	platform.addCar(car);
	

	scene.add(platform);
	scene.add(floor);
	//scene.add(car);

	directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(250, 100, 0);
    scene.add(directionalLight);

}

function animate() {
	//  animation functions

	let angSpeed = 1;

	let timeDelta = clock.getDelta();

	if (platform.get_rotation() === "Left") {
		platform.rotate_z(angSpeed * timeDelta);
	}

	if (platform.get_rotation() === "Right") {
		platform.rotate_z(-angSpeed * timeDelta);
	}

	if (onn_off_Directional == 1) {
        onn_off_Directional = 0;
        if (directionalLight.intensity == 1)
            directionalLight.intensity = 0;
        else
            directionalLight.intensity = 1;
    }


	renderer.render(scene, camera);
	requestAnimationFrame(animate);
}

function onResize() {
	renderer.setSize(window.innerWidth, window.innerHeight);

	if (window.innerHeight > 0 && window.innerWidth > 0) {
		if (camera === OrtogonalCamera) {
		// Adjusts camera ratio so the scene would be totally visible
			if (window.innerWidth / window.innerHeight > 1.2725) {
				cameraRatio = window.innerHeight / 150;
			}
			else {
				cameraRatio = window.innerWidth / 190;
			}
			camera.left = window.innerWidth / -(2 * cameraRatio);
			camera.right = window.innerWidth / (2 * cameraRatio);
			camera.top = window.innerHeight / (2 * cameraRatio);
			camera.bottom = window.innerHeight / -(2 * cameraRatio);
		}
		else {
			camera.aspect = renderer.getSize(new THREE.Vector2()).width / renderer.getSize(new THREE.Vector2()).height;
		}
	}
	camera.updateProjectionMatrix();
}

function onKeyDown(e) {
	switch (e.key) {
		case "1":
		
			//turnOnLigth(0)
			onResize();
			break;
		case "2":
			//turnOnLigth(1)
			onResize();
			break;
		case "3":
			//turnOnLight(2)
			onResize();
			break;
		case "4":
			camera = PerspectiveCamera;
			break;
		case "5":
			camera = OrtogonalCamera;
			break;
		case "Q":
		case "q":
			//directionLigh(Onn/Off)
			on_off_Directional = 1;
            
			break;
		case "W":
		case "w":
			//n entendi o que este faz, se alguem me puder explicar
			break;
		case "E":
		//alterar entre o basic e os outros case"e":
			//mudar sombreamento
			break;

		case "ArrowRight":
			platform.set_rotation("Right");
			break;

		case "ArrowLeft":
			platform.set_rotation("Left");
			break;

	}
}

function onKeyUp(e) {
	switch (e.key) {
		case "ArrowRight":
		case "ArrowLeft":
			platform.set_rotation("Stop");
			break;
	}
}

function __init__() {
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();
	//PerspectiveCamera = createPerspectiveCamera(60,0, 20); //Lateral
	//PerspectiveCamera = createPerspectiveCamera(-95,0, 20); // Lateral
	PerspectiveCamera = createPerspectiveCamera(-45, -45, 25); //Frontal
	//PerspectiveCamera = createPerspectiveCamera(-25 ,100, 20); //Back
	//OrtogonalCamera = createOrtogonalCamera(0, 0, 100);        //view to the platform	
	//TODO: mudar coordenadas para as do palanque
	window.addEventListener("resize", onResize)
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
}