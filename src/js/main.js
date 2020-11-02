let camera, PerspectiveCamera /*4*/, OrtogonalCamera /*5*/;

let scene, renderer;
let clock = new THREE.Clock();
let cameraRatio = 20;

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
	
	// Adds axes to the scene: x-axis is red, y-axis is green, z-axis is blue
	scene.add(new THREE.AxesHelper(30));
	floor = new Floor(0,0,0);
	platform = new Platform(0,0,0);
	if(floor.currentMesh == floor.phongMesh)
	{
		console.log("sou mesh\n");
	}
	console.log("cor real?");
	console.log(platform.getColor());
	
	

}

function animate() {
	//  animation functions

	let angSpeed = 1;

	let timeDelta = clock.getDelta();

	/*if (platorm.get_rotation() === "Left") {
		platform.rotate_z(angSpeed * timeDelta);
	}*/

	/*if (platorm.get_rotation() === "Right") {
		platorm.rotate_z(-angSpeed * timeDelta);
	}*/


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
			break;
		case "W":
		case "w":
			//n entendi o que este faz, se alguem me puder explicar
			break;
		case "E":
		case"e":
			//mudar sombreamento
			break;

		case "ArrowRight":
			//platform.set_rotation("Right");
			break;

		case "ArrowLeft":
			//platform.set_rotation("Left");
			break;

	}
}

function onKeyUp(e) {
	switch (e.key) {
		case "ArrowRight":
		case "ArrowLeft":
			//platform.set_rotation("Stop");
			break;
	}
}

function __init__() {
	renderer = new THREE.WebGLRenderer({antialias: true});
	renderer.setClearColor(0xffffff);
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	createScene();

	PerspectiveCamera = createPerspectiveCamera(40, 40, 40); //perspective view
	//OrtogonalCamera = createOrtogonalCamera(0, 0, 100);        //view to the platform	
	//TODO: mudar coordenadas para as do palanque
	window.addEventListener("resize", onResize)
	window.addEventListener("keydown", onKeyDown);
	window.addEventListener("keyup", onKeyUp);
}