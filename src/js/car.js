class Car extends Component{
    constructor(x, y, z,radius) {
		super(x, y, z);
		this.phongMesh=  [];
		this.basicMesh = [];
		this.lambertMesh = [];
		let L_lateral = radius * 14; // chassis body width
		let segment = L_lateral / 28;
        let L_frontal = 14; // length between center of front wheels
       	let windowColor = new THREE.Color("rgba(0, 0, 0, 0.8)");
		let bodyworkColor = new THREE.Color("silver");
		let chassisColor = new THREE.Color("grey");
		let wheelsColor = new THREE.Color("black");
        
		let geometry = new THREE.Geometry();

	    // chassis
	    let chassis = new Component();

	    // chassis body
	    let mainBody = new Component();
	    mainBody.addCuboid(0, 0, 0, L_lateral, 2 * segment, (L_frontal + 2) * segment, chassisColor);
	    chassis.addComponent(mainBody, -(L_frontal / 2) * segment,L_lateral / 2 - 3 * segment,0);

	    // front bumper
	    let shape = new THREE.Shape();
	    shape.moveTo(-segment, segment);
	    shape.lineTo(segment, segment);
	    shape.lineTo(segment, -segment);

	    let frontBumper = new Component();
		frontBumper.addHorizontalExtrusion(0, 0, 0, shape, (L_frontal + 2) * segment, chassisColor);
		// TODO: #3 Fix x position to take segment in consideration
	    chassis.addComponent(frontBumper, -L_frontal / 2 - 4 * segment, -4 * segment, 0);

	    // back bumper
	    shape = new THREE.Shape();
	    shape.moveTo(-segment, -1.50 * segment);
	    shape.lineTo(1.25 * segment, 1.5 * segment);
	    shape.lineTo(segment, -1.5 * segment);

	    let backBumper = new Component();
	    backBumper.addHorizontalExtrusion(0, 0, 0, shape, (L_frontal + 2) * segment, chassisColor);
		// TODO: #4 Fix x position to take segment in consideration
		chassis.addComponent(backBumper, -L_frontal / 2 - 4 * segment, L_lateral - 1.5 * segment, 0);

	    // Wheels
	    let wheelFL = new Component();
	    wheelFL.addCylinderHorizontal(0, 0, 0, 2 * radius, 2 * radius, 2 * segment, wheelsColor);
	    chassis.addComponent(wheelFL, 0, 0, 0);

	    let wheelFR = new Component();
	    wheelFR.addCylinderHorizontal(0, 0, 0, 2 * radius, 2 * radius, 2 * segment, wheelsColor);
	    chassis.addComponent(wheelFR, -L_frontal * segment, 0, 0);

	    let wheelBR = new Component();
	    wheelBR.addCylinderHorizontal(0, 0, 0, 2 * radius, 2 * radius, 2 * segment, wheelsColor);
	    chassis.addComponent(wheelBR, -L_frontal * segment, L_lateral - 6 * segment, 0);

	    let wheelBL = new Component();
	    wheelBL.addCylinderHorizontal(0, 0, 0, 2 * radius, 2 * radius, 2 * segment, wheelsColor);
	    chassis.addComponent(wheelBL, 0, L_lateral - 6 * segment, 0);

		this.addComponent(chassis,9,-15,5);


		//parte lateral
		geometry.vertices.push((new THREE.Vector3(1, -2, 3)).multiplyScalar(segment)); // vertex 1 -> 0
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -2, 3)).multiplyScalar(segment)); // vertex 1' -> 1
		//changed to p -l
		geometry.vertices.push((new THREE.Vector3(1, 2, 3)).multiplyScalar(segment)); // vertex 2 -> 2
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 2, 3)).multiplyScalar(segment)); // vertex 2' -> 3

		geometry.vertices.push((new THREE.Vector3(1, 3, 1 / 2)).multiplyScalar(segment)); // vertex 3 -> 4
		geometry.vertices.push((new THREE.Vector3(1, 4, -1)).multiplyScalar(segment)); // vertex 4 -> 5
		geometry.vertices.push((new THREE.Vector3(1, 18, -1)).multiplyScalar(segment)); // vertex 5 -> 6
		geometry.vertices.push((new THREE.Vector3(1, 19, 0)).multiplyScalar(segment)); // vertex 6 -> 7
		geometry.vertices.push((new THREE.Vector3(1, 19, 1)).multiplyScalar(segment)); // vertex 7 -> 8



		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 3, 1/2)).multiplyScalar(segment)); // vertex 3' -> 9
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 4, -1)).multiplyScalar(segment)); // vertex 4' -> 10
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 18, -1)).multiplyScalar(segment)); // vertex 5' -> 11
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 19, 0)).multiplyScalar(segment)); // vertex 6' -> 12
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 19, 1)).multiplyScalar(segment)); // vertex 7' -> 13


		geometry.vertices.push((new THREE.Vector3(1, 20.5, 3)).multiplyScalar(segment)); // vertex 8 -> 14
		geometry.vertices.push((new THREE.Vector3(1, 23.5, 3)).multiplyScalar(segment)); // vertex 9 -> 15
		geometry.vertices.push((new THREE.Vector3(1, 25, 1)).multiplyScalar(segment)); // vertex 10 -> 16
		geometry.vertices.push((new THREE.Vector3(1, 28, 1.25)).multiplyScalar(segment)); // vertex 11 -> 17
		geometry.vertices.push((new THREE.Vector3(1, 29, 5)).multiplyScalar(segment)); // vertex 12 -> 18

		

		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 20.5, 3)).multiplyScalar(segment)); // vertex 8' -> 19
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 23.5, 3)).multiplyScalar(segment)); // vertex 9' -> 20
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 25, 1)).multiplyScalar(segment)); // vertex 10' -> 21
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 28, 1.25)).multiplyScalar(segment)); // vertex 11' -> 22
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 29, 5)).multiplyScalar(segment)); // vertex 12' -> 23

		geometry.vertices.push((new THREE.Vector3(1, 18, 4.75)).multiplyScalar(segment)); // vertex 13 -> 24
		geometry.vertices.push((new THREE.Vector3(1, 18, 0)).multiplyScalar(segment)); // vertex 14 -> 25
		geometry.vertices.push((new THREE.Vector3(1, 11, 0)).multiplyScalar(segment)); // vertex 15 -> 26
		geometry.vertices.push((new THREE.Vector3(1, 11, 4.5)).multiplyScalar(segment)); // vertex 16 -> 27

		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 4.75)).multiplyScalar(segment)); // vertex 13' -> 28
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 0)).multiplyScalar(segment)); // vertex 14' -> 29
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 0)).multiplyScalar(segment)); // vertex 15' -> 30
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 4.5)).multiplyScalar(segment)); // vertex 16' -> 31


		geometry.vertices.push((new THREE.Vector3(0.5, 11.25, 5.5)).multiplyScalar(segment)); //vertex 17 -> 32
		geometry.vertices.push((new THREE.Vector3(0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertex 18 -> 33

		geometry.vertices.push((new THREE.Vector3(0, 16.25, 6.5)).multiplyScalar(segment)); // vertex 19 -> 34
		//changed to z do 19 de 5 para 6.5
		geometry.vertices.push((new THREE.Vector3(-1, 9.75, 8)).multiplyScalar(segment)); // vertex 20 -> 35
		geometry.vertices.push((new THREE.Vector3(0.5, 0, 5)).multiplyScalar(segment)); // vertex 21 -> 36
		geometry.vertices.push((new THREE.Vector3(0.5,4.5,5.125)).multiplyScalar(segment)); // vertex 22 -> 37

		geometry.vertices.push((new THREE.Vector3(1, 4, 0)).multiplyScalar(segment)); // vertex 23 -> 38
		geometry.vertices.push((new THREE.Vector3(1, 4, 4.25)).multiplyScalar(segment)); // vertex 24 -> 39

		

		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 4, 0)).multiplyScalar(segment)); // vertex 23' -> 40
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 4, 4.25)).multiplyScalar(segment)); // vertex 24' -> 41

		geometry.vertices.push((new THREE.Vector3(1, -4, 4.25)).multiplyScalar(segment)); // vertex 25 -> 42
		geometry.vertices.push((new THREE.Vector3(1, -4, 3.5).multiplyScalar(segment))); // vertex 26 -> 43
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -4, 3.5).multiplyScalar(segment))); // vertex 26' -> 44
		geometry.vertices.push((new THREE.Vector3(1, -5, 3)).multiplyScalar(segment)); // vertex 27 -> 45
		geometry.vertices.push((new THREE.Vector3(1, -5, 3.875)).multiplyScalar(segment)); // vertex 28 -> 46
		geometry.vertices.push((new THREE.Vector3(1, -5, 1)).multiplyScalar(segment)); // vertex 29 -> 47
		geometry.vertices.push((new THREE.Vector3(1, -3.5, 1)).multiplyScalar(segment)); // vertex 30 -> 48
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -3.5, 1)).multiplyScalar(segment)); // vertex 30' -> 49
		geometry.vertices.push((new THREE.Vector3(-1, 9.75, 8.25)).multiplyScalar(segment)); // vertex 31 -> 50
		geometry.vertices.push((new THREE.Vector3(-1 - 0.5, 9, 8.125)).multiplyScalar(segment)); // vertex 38 -> 51
		geometry.vertices.push((new THREE.Vector3(-2, 0, 5.5)).multiplyScalar(segment)); // vertex 39 -> 52
		geometry.vertices.push((new THREE.Vector3(1, 0, 4)).multiplyScalar(segment)); // vertex 40 -> 53
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 0, 4)).multiplyScalar(segment)); // vertex 40' -> 54

		/*
		1,2,3,4,5,6,7,8,
		0,2,4,5,6,7,8,14,

		9,10,11,12,
		15,16,17,18

		13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,38,39,40
		24,25,26,27,32,33,34,35,36,37,38,39,42,43,45,46,47,48,50,51,52,53*/
		// changed
		// parte frontal
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -4 , 4.35)).multiplyScalar(segment)); // vertex 25' -> 55
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 3.875)).multiplyScalar(segment)); // vertex 28' -> 56
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 3)).multiplyScalar(segment)); // vertex 27' -> 57
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 1)).multiplyScalar(segment)); // vertex 29' -> 58
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -4, 4.35)).multiplyScalar(segment)); // vertex 32 -> 59
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -5, 3.875)).multiplyScalar(segment)); // vertex 33 -> 60
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 2, 0,5.5)).multiplyScalar(segment)); // vertex 36 -> 61
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1 + 0.5, 9, 8.125)).multiplyScalar(segment)); // vertex 37 -> 62

		geometry.vertices.push((new THREE.Vector3(-1, -4, 4.25)).multiplyScalar(segment)); // vertex 34 -> 63

		geometry.vertices.push((new THREE.Vector3(-1, -5, 3.875)).multiplyScalar(segment)); // vertex 35 -> 64

		geometry.vertices.push((new THREE.Vector3(-1, -5, 3)).multiplyScalar(segment)); // vertex 41 -> 65

		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -5, 3)).multiplyScalar(segment)); // vertex 42 -> 66
		geometry.vertices.push((new THREE.Vector3(-L_frontal / 2, -3, 4.525)).multiplyScalar(segment)); // vertex 43 -> 67
		//mudei z que estaca 3.75 , mas por mais valores que ponha nd faz sentdio
		// back side
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 11.25, 5.5)).multiplyScalar(segment)); // vertex 17' -> 68
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertex 18' -> 69
		geometry.vertices.push((new THREE.Vector3(-L_frontal, 16.25, 6.5)).multiplyScalar(segment)); // vertex 19' -> 70
		// also changed z of 19'
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 0.75, 9.75, 8)).multiplyScalar(segment)); // vertex 20' -> 71
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 0,5)).multiplyScalar(segment)); // vertex 21' -> 72
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 4.5, 5.125)).multiplyScalar(segment)); // vertex 22' -> 73
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, 9.75, 8.25)).multiplyScalar(segment)); // vertex 31' -> 74
		this.createBody(geometry,radius,x,y,z);
		this.createWindow(x,y,z,radius);
		
		
		/*======================================================================
		Surfaces
		======================================================================*/

		
		
       
	}

	createBody(geometry,radius,x,y,z){
		let L_lateral = radius * 14; // chassis body width
		let bodyworkColor = new THREE.Color("silver");
		//right surface
		geometry.faces.push(new THREE.Face3(45, 47, 48,bodyworkColor));  //27,29,30
		geometry.faces.push(new THREE.Face3(43, 45, 48,bodyworkColor));//26,27,30
        geometry.faces.push(new THREE.Face3(46, 45, 43,bodyworkColor));//27,28,26
        geometry.faces.push(new THREE.Face3(43, 46, 42,bodyworkColor));//26,28,25

        geometry.faces.push(new THREE.Face3(0, 43, 48,bodyworkColor));//1,26,30
        geometry.faces.push(new THREE.Face3(0, 42, 43,bodyworkColor));//1,25,26
        geometry.faces.push(new THREE.Face3(0, 2, 53,bodyworkColor));//1,2,40
		geometry.faces.push(new THREE.Face3(0, 42, 53,bodyworkColor));//1,25,40
		/*
		1,2,3,4,5,6,7,8,
		0,2,4,5,6,7,8,14,

		9,10,11,12,
		15,16,17,18

		13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,38,39,40
		24,25,26,27,32,33,34,35,36,37,38,39,42,43,45,46,47,48,50,51,52,53
		32,36,43
*/

        geometry.faces.push(new THREE.Face3(42, 52, 53,bodyworkColor));//25,39,40
    	geometry.faces.push(new THREE.Face3(36, 52, 53,bodyworkColor));//21,39,40
        geometry.faces.push(new THREE.Face3(2, 39, 53,bodyworkColor));//2,24,40
        geometry.faces.push(new THREE.Face3(53, 39, 37,bodyworkColor));//24,40,22
       
    	geometry.faces.push(new THREE.Face3( 53, 37, 36,bodyworkColor));//22,40 ,21,
        geometry.faces.push(new THREE.Face3(2, 4, 39,bodyworkColor));//2,3,24
		geometry.faces.push(new THREE.Face3(4, 38, 39,bodyworkColor));//3,23,24
		geometry.faces.push(new THREE.Face3(5, 26, 38,bodyworkColor));
		geometry.faces.push(new THREE.Face3(4, 5, 38,bodyworkColor));

       	geometry.faces.push(new THREE.Face3(5, 6, 26,bodyworkColor));
       	geometry.faces.push(new THREE.Face3(26, 38, 39,bodyworkColor));
		geometry.faces.push(new THREE.Face3(26, 27, 39,bodyworkColor));
		
        
       
		geometry.faces.push(new THREE.Face3(27, 37, 39, bodyworkColor)); 
		geometry.faces.push(new THREE.Face3(27, 32, 37,bodyworkColor));
        geometry.faces.push(new THREE.Face3(6, 25, 26, bodyworkColor));
        geometry.faces.push(new THREE.Face3(25, 26, 27, bodyworkColor));

        geometry.faces.push(new THREE.Face3(6, 7, 26, bodyworkColor));
        geometry.faces.push(new THREE.Face3(7, 8, 25, bodyworkColor));
        geometry.faces.push(new THREE.Face3(24, 25, 27, bodyworkColor));
       	geometry.faces.push(new THREE.Face3(8, 24, 25, bodyworkColor));
        
        geometry.faces.push(new THREE.Face3(24, 32, 33, bodyworkColor));
        geometry.faces.push(new THREE.Face3(8, 14, 24, bodyworkColor));
        geometry.faces.push(new THREE.Face3(14, 15, 24, bodyworkColor));
        geometry.faces.push(new THREE.Face3(15, 18, 24, bodyworkColor));
        
        geometry.faces.push(new THREE.Face3(15, 16, 18, bodyworkColor));
        geometry.faces.push(new THREE.Face3(16, 17, 18, bodyworkColor));
        geometry.faces.push(new THREE.Face3(18, 24, 33, bodyworkColor));
       	geometry.faces.push(new THREE.Face3(18, 33, 34, bodyworkColor));
        
        geometry.faces.push(new THREE.Face3(18, 34, 50, bodyworkColor));
        geometry.faces.push(new THREE.Face3(34, 35, 50, bodyworkColor));
        geometry.faces.push(new THREE.Face3(35, 36, 50, bodyworkColor));
		geometry.faces.push(new THREE.Face3(24, 27, 32, bodyworkColor));

		geometry.faces.push(new THREE.Face3(52, 36, 50, bodyworkColor));
		
        



		// Left surface
		
		geometry.faces.push(new THREE.Face3(1, 54, 3, bodyworkColor));	// 1', 40', 2'
		geometry.faces.push(new THREE.Face3(3, 54, 41, bodyworkColor));	// 2', 40', 24'
		geometry.faces.push(new THREE.Face3(3, 41, 9, bodyworkColor));	// 2', 24', 3'
		geometry.faces.push(new THREE.Face3(1, 55, 54, bodyworkColor)); // 1', 25', 40'
		geometry.faces.push(new THREE.Face3(1, 44, 55, bodyworkColor)); // 1', 26', 25'
		geometry.faces.push(new THREE.Face3(55, 44, 56, bodyworkColor)); // 25', 26', 28'
		geometry.faces.push(new THREE.Face3(55, 44, 56, bodyworkColor)); // 25', 26', 28'
		geometry.faces.push(new THREE.Face3(44, 57, 56, bodyworkColor)); // 26', 27', 28'
		geometry.faces.push(new THREE.Face3(44, 57, 56, bodyworkColor)); // 26', 27', 28'
		geometry.faces.push(new THREE.Face3(44, 49, 57, bodyworkColor)); // 26', 30', 27'
		geometry.faces.push(new THREE.Face3(57, 49, 58, bodyworkColor)); // 27', 30', 29'
		geometry.faces.push(new THREE.Face3(1, 49, 44, bodyworkColor)); // 1', 30', 26'
		
		geometry.faces.push(new THREE.Face3(54, 55, 61, bodyworkColor)); // 40', 25', 36
		geometry.faces.push(new THREE.Face3(72, 73, 54, bodyworkColor)); // 21', 22', 40'
		geometry.faces.push(new THREE.Face3(73, 41, 54, bodyworkColor)); // 22', 24', 40'
		geometry.faces.push(new THREE.Face3(9, 41, 40, bodyworkColor)); // 3', 24', 23'
		geometry.faces.push(new THREE.Face3(9, 40, 10, bodyworkColor)); // 3', 23', 4'
		geometry.faces.push(new THREE.Face3(31, 41, 73, bodyworkColor)); // 16', 24', 22'
		geometry.faces.push(new THREE.Face3(30, 40, 41, bodyworkColor)); // 15', 23', 24'
		geometry.faces.push(new THREE.Face3(10, 40, 30, bodyworkColor)); // 4', 23', 15'
		
		geometry.faces.push(new THREE.Face3(31, 73, 68, bodyworkColor)); // 16', 22', 17'
		geometry.faces.push(new THREE.Face3(30, 41, 31, bodyworkColor)); // 15', 24', 16'
		geometry.faces.push(new THREE.Face3(10, 30, 11, bodyworkColor)); // 4', 15', 5'
		geometry.faces.push(new THREE.Face3(28, 31, 68, bodyworkColor)); // 13', 16', 17'
		
		geometry.faces.push(new THREE.Face3(29, 30, 31, bodyworkColor)); // 14', 15', 16'
		geometry.faces.push(new THREE.Face3(28, 68, 69, bodyworkColor)); // 13', 17', 18'
		geometry.faces.push(new THREE.Face3(29, 31, 28, bodyworkColor)); // 14', 16', 13'
		geometry.faces.push(new THREE.Face3(11, 30, 29, bodyworkColor)); // 5', 15', 14'
		geometry.faces.push(new THREE.Face3(11, 29, 12, bodyworkColor)); // 5', 14', 6'
		
		geometry.faces.push(new THREE.Face3(12, 29, 13, bodyworkColor)); // 6', 14', 7'
		geometry.faces.push(new THREE.Face3(13, 29, 28, bodyworkColor)); // 7', 14', 13'
		geometry.faces.push(new THREE.Face3(72, 61, 74, bodyworkColor)); // 21', 36, 31'
		geometry.faces.push(new THREE.Face3(71, 72, 74, bodyworkColor)); // 20', 21', 31'
		
		geometry.faces.push(new THREE.Face3(70, 71, 74, bodyworkColor)); // 19', 20', 31'
		geometry.faces.push(new THREE.Face3(23, 70, 74, bodyworkColor)); // 12', 19', 31'
		
		geometry.faces.push(new THREE.Face3(23, 69, 70, bodyworkColor)); // 12', 18', 19'
		geometry.faces.push(new THREE.Face3(23, 28, 69, bodyworkColor)); // 12', 13', 18'
		geometry.faces.push(new THREE.Face3(13, 28, 19, bodyworkColor)); // 7', 13', 8'
		
		geometry.faces.push(new THREE.Face3(19, 28, 20, bodyworkColor)); // 8', 13', 9'
		geometry.faces.push(new THREE.Face3(20, 28, 23, bodyworkColor)); // 9', 13', 12'
		geometry.faces.push(new THREE.Face3(20, 23, 21, bodyworkColor)); // 9', 12', 10'
		
		geometry.faces.push(new THREE.Face3(21, 23, 22, bodyworkColor)); // 10', 12', 11'
		geometry.faces.push(new THREE.Face3(72, 61,54, bodyworkColor));//21' 36 40'
		*/
		// front surface
        geometry.faces.push(new THREE.Face3(47, 45, 57, bodyworkColor)); // 29, 27, 27'
        geometry.faces.push(new THREE.Face3(47, 57, 58, bodyworkColor)); // 29,27, 29'
        geometry.faces.push(new THREE.Face3(65, 45, 64, bodyworkColor)); // 41, 27, 35 
        geometry.faces.push(new THREE.Face3(45, 64, 46, bodyworkColor)); // 27, 35, 28
        geometry.faces.push(new THREE.Face3(46, 64, 63, bodyworkColor)); // 28, 35, 34
        geometry.faces.push(new THREE.Face3(63, 46, 42, bodyworkColor)); // 34, 28, 25
        geometry.faces.push(new THREE.Face3(42, 63, 52, bodyworkColor)); // 25, 34, 39
        //geometry.faces.push(new THREE.Face3(63, 52, 51, bodyworkColor)); // 34, 39, 38
        geometry.faces.push(new THREE.Face3(52, 42, 51, bodyworkColor)); // 39, 25, 38
		geometry.faces.push(new THREE.Face3(42, 51, 50, bodyworkColor)); // 25, 38, 31
        
        geometry.faces.push(new THREE.Face3(50, 74, 51, bodyworkColor)); // 31, 31', 38
        geometry.faces.push(new THREE.Face3(62,74, 51, bodyworkColor)); // 37, 31', 38
		//geometry.faces.push(new THREE.Face3(62, 52, 51, bodyworkColor)); // 37, 39, 38 JANELA
		

		//geometry.faces.push(new THREE.Face3(62, 61, 52 , bodyworkColor)); // 37, 36, 39 JANELA
		
        geometry.faces.push(new THREE.Face3(74, 55, 62, bodyworkColor)); // 31', 25', 37
        geometry.faces.push(new THREE.Face3(62, 55, 61, bodyworkColor)); // 37 , 25', 36
        geometry.faces.push(new THREE.Face3(55, 61, 59, bodyworkColor)); // 25', 36 , 32
		geometry.faces.push(new THREE.Face3(61, 59 , 67, bodyworkColor)); // 36, 32 , 43

		//geometry.faces.push(new THREE.Face3(61, 59 , 62, bodyworkColor)); // 36, 32 , 37
		
        geometry.faces.push(new THREE.Face3(67, 59, 63, bodyworkColor)); // 43 , 32 , 34
        geometry.faces.push(new THREE.Face3(67, 63, 52, bodyworkColor)); // 43 , 34, 39
        geometry.faces.push(new THREE.Face3(55, 59, 60, bodyworkColor)); // 25', 32 , 33
        geometry.faces.push(new THREE.Face3(60, 56, 55, bodyworkColor)); // 33 , 28' , 25'
        geometry.faces.push(new THREE.Face3(56, 60, 66, bodyworkColor)); // 28' , 33 , 42
        geometry.faces.push(new THREE.Face3(56, 57, 66, bodyworkColor)); // 28' , 27', 42
        geometry.faces.push(new THREE.Face3(60, 66, 65, bodyworkColor)); // 33 , 42 , 41
        geometry.faces.push(new THREE.Face3(65, 64, 60, bodyworkColor)); // 41 , 35 , 33
        
        geometry.faces.push(new THREE.Face3(60, 59, 64 , bodyworkColor)); // 33 , 32 , 35
		geometry.faces.push(new THREE.Face3(59, 64, 63, bodyworkColor)); // 32 , 35 , 34
		geometry.faces.push(new THREE.Face3(52, 61, 67, bodyworkColor)); // 39 , 36 , 43

		//geometry.faces.push(new THREE.Face3(59, 60, 64, bodyworkColor)); // 32,33,35
		//geometry.faces.push(new THREE.Face3(59, 63, 63, bodyworkColor)); // 32 , 34 , 35

		/*
		// back surface
		geometry.faces.push(new THREE.Face3(50, 74, 23, bodyworkColor)); // 31, 31', 12'
		geometry.faces.push(new THREE.Face3(18, 50, 23, bodyworkColor)); // 12, 31, 12'
		geometry.faces.push(new THREE.Face3(18, 23, 22, bodyworkColor)); // 12, 12', 11'
		geometry.faces.push(new THREE.Face3(17, 18, 22, bodyworkColor)); // 11, 12, 11'
		*/
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();
		let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
			color: bodyworkColor,
			side: THREE.DoubleSide}));
		let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
			color: bodyworkColor ,
			side: THREE.DoubleSide}));
		
		
		let basicMat = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ 
			color: bodyworkColor,
			side: THREE.DoubleSide,
			wireframe:true
		}));
		
		phongMat.position.set(x, y, z);

		lambertMat.position.set(x, y, z);

		basicMat.position.set(x, y, z);
		// TODO: does this work?
		this.phongMesh.push(phongMat);  
		this.lambertMesh.push(lambertMat);
		this.basicMesh.push(basicMat);
		this.add(basicMat);
		

	}
	createWindow(x,y,z,radius){	
		let windowColor = new THREE.Color("rgba(0, 0, 0, 0.8)");
		let geometry = new THREE.Geometry();
		let L_lateral = radius * 14; // chassis body width
		let segment = L_lateral / 28;
		let L_frontal = 14; // length between center of front wheels
		
		//Vidro de cima


		/*
		geometry.vertices.push((new THREE.Vector3(0, 16.25, 6.5)).multiplyScalar(segment)); // vertex 19 -> 0
		//changed to z do 19 de 5 para 6.5
		geometry.vertices.push((new THREE.Vector3(0.75, 9.75, 8)).multiplyScalar(segment)); // vertex 20 -> 1
		geometry.vertices.push((new THREE.Vector3(0.5, 0, 5)).multiplyScalar(segment)); // vertex 21 -> 2

		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertex 18' -> 3
		geometry.vertices.push((new THREE.Vector3(-L_frontal, 16.25, 6.5)).multiplyScalar(segment)); // vertex 19' -> 4
	// also changed z of 19'
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 0.75, 9.75, 8)).multiplyScalar(segment)); // vertex 20' -> 5
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 0,5)).multiplyScalar(segment)); // vertex 21' -> 6
		
		geometry.vertices.push((new THREE.Vector3(-1, -5, 3.75)).multiplyScalar(segment)); // vertex 35 -> 7
		geometry.vertices.push((new THREE.Vector3(-L_frontal, -3, 4.525)).multiplyScalar(segment)); // vertex 36 -> 8
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1 + 0.5, 9, 8.125)).multiplyScalar(segment)); // vertex 37 -> 9
		geometry.vertices.push((new THREE.Vector3(-1 - 0.5, 9, 8.125)).multiplyScalar(segment)); // vertex 38 -> 10

		//farol esquerdo
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -4 , 4.35)).multiplyScalar(segment)); // vertex 25' -> 19
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -4, 4)).multiplyScalar(segment)); // vertex 32 -> 20
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -5, 3.75)).multiplyScalar(segment)); // vertex 33 -> 11
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -5, 3)).multiplyScalar(segment)); // vertex 42 -> 12
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 3.875)).multiplyScalar(segment)); // vertex 28' -> 13
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 3)).multiplyScalar(segment)); // vertex 27' -> 14

		geometry.faces.push(new THREE.Face3(19, 20, 11, windowColor)); //25' 32, 33
		geometry.faces.push(new THREE.Face3(19, 13, 11, windowColor)); //25' 28', 33

		geometry.faces.push(new THREE.Face3(14, 13, 12, windowColor)); // 27',28',42
		geometry.faces.push(new THREE.Face3(11, 13, 12, windowColor)); // 33,28',42

		//farol direito

		geometry.vertices.push((new THREE.Vector3(1, -5, 3)).multiplyScalar(segment)); // vertex 27 -> 15
		geometry.vertices.push((new THREE.Vector3(1, -5, 3.875)).multiplyScalar(segment)); // vertex 28 -> 16
		geometry.vertices.push((new THREE.Vector3(-1, -5, 3.75)).multiplyScalar(segment)); // vertex 35 -> 17
		geometry.vertices.push((new THREE.Vector3(-1, -5, 3)).multiplyScalar(segment)); // vertex 41 -> 18
		
		geometry.vertices.push((new THREE.Vector3(-1, -4, 4)).multiplyScalar(segment)); // vertex 34 -> 21
		geometry.vertices.push((new THREE.Vector3(1, -4, 4.25)).multiplyScalar(segment)); // vertex 25 -> 22

		geometry.faces.push(new THREE.Face3(16, 17, 21, windowColor)); //28 35, 34
		geometry.faces.push(new THREE.Face3(22, 16, 21, windowColor)); //25 28, 34

		geometry.faces.push(new THREE.Face3(7, 15, 18, windowColor)); // 35,27,41
		geometry.faces.push(new THREE.Face3(16, 15, 7, windowColor)); // 28,27,35
		
		//right surface
		geometry.faces.push(new THREE.Face3(4, 5, 6, windowColor)); //40
		geometry.faces.push(new THREE.Face3(3, 4, 6, windowColor));//41

		//Front surface
		geometry.vertices.push((new THREE.Vector3(0, -3, 4.525)).multiplyScalar(segment)); // vertex 39 -> 23

		geometry.faces.push(new THREE.Face3(4, 6,5, windowColor)); // 19', 21', 20'
		geometry.faces.push(new THREE.Face3(3, 6, 4, windowColor)); // 18', 21', 19'

		geometry.faces.push(new THREE.Face3(23, 8, 9, windowColor)); // 39,36,37
		geometry.faces.push(new THREE.Face3(23, 10, 9, windowColor)); // 39,38,37
		*/

		geometry.computeFaceNormals();
		geometry.computeVertexNormals();

		let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
			color: windowColor,
			side: THREE.DoubleSide}));
		let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
			color: windowColor ,
			side: THREE.DoubleSide}));
		
		
		let basicMat = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({ 
			color: windowColor,
			side: THREE.DoubleSide,
			// wireframe:true
		}));
		
		phongMat.position.set(x, y, z);

		lambertMat.position.set(x, y, z);

		basicMat.position.set(x, y, z);
		// TODO: does this work?
		this.phongMesh.push(phongMat);  
		this.lambertMesh.push(lambertMat);
		this.basicMesh.push(basicMat);
		this.add(phongMat);



	}
}