class Car extends Component{

    constructor(x, y, z,radius) {

		super(x,y,z);
		
		let L_lateral = radius * 14; //Largura lateral
		let segment = L_lateral / 28;
        let L_frontal = 14;
       	let windowColor = new THREE.Color("rgba(0, 0, 0, 0.8)");
		let bodyworkColor = new THREE.Color("silver");
		let chassisColor = new THREE.Color("grey");
        
		let geometry = new THREE.Geometry();

		// chassis
		// chassis body
		let mainBody = new THREE.BoxGeometry(L_lateral, L_frontal + 2 * segment, 2 * segment);
		mainBody.applyMatrix4(new THREE.Matrix4().makeTranslation(-L_lateral / 2 + 3 * segment, -L_frontal / 2, 0));

		// front bumper
		let shape = new THREE.Shape();
		shape.moveTo(-segment, -segment);
		shape.lineTo(-segment, segment);
		shape.lineTo(segment, -segment);

		let frontBumper = new Component();
		frontBumper.addExtrusionGeometry(0, 0, 0, shape, L_frontal + 2 * segment, chassisColor);
		// let frontBumper = new THREE.ExtrudeGeometry(shape, {steps: 1, depth: L_frontal + 2 * segment,
		// 	bevelEnabled: false});
		// frontBumper.applyMatrix4(new THREE.Matrix4().makeTranslation(4 * segment, 0, -L_frontal - segment));
		// frontBumper.applyMatrix4(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0), -Math.PI / 2));

		// back bumper
		shape = new THREE.Shape();
		shape.moveTo(-1.5 * segment, -1.25 * segment);
		shape.lineTo(1.5 * segment, segment);
		shape.lineTo(1.5 * segment, -segment);

		let backBumper = new THREE.ExtrudeGeometry(shape, {steps: 1, depth: L_frontal + 2 * segment, bevelEnabled: false});
		backBumper.applyMatrix4(new THREE.Matrix4().makeTranslation(-L_lateral + 1.5 * segment, 0, -L_frontal - segment));
		backBumper.applyMatrix4(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, 0),
			-Math.PI / 2));

		// Wheels
		let wheelFL = new THREE.CylinderGeometry(radius, radius, 2 * segment, 16);
		wheelFL.applyMatrix4(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0),
			-Math.PI / 2));

		let wheelFR = new THREE.CylinderGeometry(radius, radius, 2 * segment, 16);
		wheelFR.applyMatrix4(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0),
			Math.PI / 2));
		wheelFR.applyMatrix4(new THREE.Matrix4().makeTranslation(0, -L_frontal, 0));

		let wheelBR = new THREE.CylinderGeometry(radius, radius, 2 * segment, 16);
		wheelBR.applyMatrix4(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0),
			Math.PI / 2));
		wheelBR.applyMatrix4(new THREE.Matrix4().makeTranslation(-L_lateral + 6 * segment, -L_frontal, 0));

		let wheelBL = new THREE.CylinderGeometry(radius, radius, 2 * segment, 16);
		wheelBL.applyMatrix4(new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(0, 1, 0),
			Math.PI / 2));
		wheelBL.applyMatrix4(new THREE.Matrix4().makeTranslation(-L_lateral + 6 * segment, 0, 0));


		//parte lateral
		geometry.vertices.push((new THREE.Vector3(1, -2, 3)).multiplyScalar(segment)); // vertice 1 -> 0
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, -2, 3)).multiplyScalar(segment)); // vertice 1' -> 1
		//mudei p -l
		geometry.vertices.push((new THREE.Vector3(1, 2, 3)).multiplyScalar(segment)); // vertice 2 -> 2
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 2, 3)).multiplyScalar(segment)); // vertice 2' -> 3

		geometry.vertices.push((new THREE.Vector3(1, 3, 1 / 2)).multiplyScalar(segment)); // vertice 3 -> 4
		geometry.vertices.push((new THREE.Vector3(1, 4, -1)).multiplyScalar(segment)); // vertice 4 -> 5
		geometry.vertices.push((new THREE.Vector3(1, 18, -1)).multiplyScalar(segment)); // vertice 5 -> 6
		geometry.vertices.push((new THREE.Vector3(1, 19, 0)).multiplyScalar(segment)); // vertice 6 -> 7
		geometry.vertices.push((new THREE.Vector3(1, 19, 1)).multiplyScalar(segment)); // vertice 7 -> 8

		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 3, 1/2)).multiplyScalar(segment)); // vertice 3' -> 9
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 4, -1)).multiplyScalar(segment)); // vertice 4' -> 10
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 18, -1)).multiplyScalar(segment)); // vertice 5' -> 11
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 19, 0)).multiplyScalar(segment)); // vertice 6' -> 12
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 19, 1)).multiplyScalar(segment)); // vertice 7' -> 13


		geometry.vertices.push((new THREE.Vector3(1, 20.5, 3)).multiplyScalar(segment)); // vertice 8 -> 14
		geometry.vertices.push((new THREE.Vector3(1, 23.5, 3)).multiplyScalar(segment)); // vertice 9 -> 15
		geometry.vertices.push((new THREE.Vector3(1, 25, 1)).multiplyScalar(segment)); // vertice 10 -> 16
		geometry.vertices.push((new THREE.Vector3(1, 28, 1.25)).multiplyScalar(segment)); // vertice 11 -> 17
		geometry.vertices.push((new THREE.Vector3(1, 29, 5)).multiplyScalar(segment)); // vertice 12 -> 18

		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 20.5, 3)).multiplyScalar(segment)); // vertice 8' -> 19
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 23.5, 3)).multiplyScalar(segment)); // vertice 9' -> 20
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 25, 1)).multiplyScalar(segment)); // vertice 10' -> 21
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 28, 1.25)).multiplyScalar(segment)); // vertice 11' -> 22
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 29, 5)).multiplyScalar(segment)); // vertice 12' -> 23

		geometry.vertices.push((new THREE.Vector3(1, 18, 3.75)).multiplyScalar(segment)); // vertice 13 -> 24
		geometry.vertices.push((new THREE.Vector3(1, 18, 0)).multiplyScalar(segment)); // vertice 14 -> 25
		geometry.vertices.push((new THREE.Vector3(1, 11, 0)).multiplyScalar(segment)); // vertice 15 -> 26
		geometry.vertices.push((new THREE.Vector3(1, 11, 4.5)).multiplyScalar(segment)); // vertice 16 -> 27

		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 3.75)).multiplyScalar(segment)); // vertice 13' -> 28
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 0)).multiplyScalar(segment)); // vertice 14' -> 29
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 0)).multiplyScalar(segment)); // vertice 15' -> 30
		geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 4.5)).multiplyScalar(segment)); // vertice 16' -> 31


		geometry.vertices.push((new THREE.Vector3(0.5, 11.25, 5.5)).multiplyScalar(segment)); //vertice 17 -> 32
		geometry.vertices.push((new THREE.Vector3(0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertice 18 -> 33

		geometry.vertices.push((new THREE.Vector3(0, 16.25, 5)).multiplyScalar(segment)); // vertice 19 -> 34
		geometry.vertices.push((new THREE.Vector3(0.75, 9.75, 8)).multiplyScalar(segment)); // vertice 20 -> 35
		geometry.vertices.push((new THREE.Vector3(0.5, 0, 5)).multiplyScalar(segment)); // vertice 21 -> 36
		geometry.vertices.push((new THREE.Vector3(0.5,4.5,5.125)).multiplyScalar(segment)); // vertice 22 -> 37

		geometry.vertices.push((new THREE.Vector3(1, 4, 0)).multiplyScalar(segment)); // vertice 23 -> 38
		geometry.vertices.push((new THREE.Vector3(1, 4, 4.25)).multiplyScalar(segment)); // vertice 24 -> 39

		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 4, 0)).multiplyScalar(segment)); // vertice 23' -> 40
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 4, 4.25)).multiplyScalar(segment)); // vertice 24' -> 41

		geometry.vertices.push((new THREE.Vector3(1, -4, 4)).multiplyScalar(segment)); // vertice 25 -> 42
		geometry.vertices.push((new THREE.Vector3(1, -4, 3.5).multiplyScalar(segment))); // vertice 26 -> 43
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -4, 3.5).multiplyScalar(segment))); // vertice 26' -> 44
		geometry.vertices.push((new THREE.Vector3(1, -5, 3)).multiplyScalar(segment)); // vertice 27 -> 45
		geometry.vertices.push((new THREE.Vector3(1, -5, 3.75)).multiplyScalar(segment)); // vertice 28 -> 46
		geometry.vertices.push((new THREE.Vector3(1, -5, 1)).multiplyScalar(segment)); // vertice 29 -> 47
		geometry.vertices.push((new THREE.Vector3(1, -3.5, 1)).multiplyScalar(segment)); // vertice 30 -> 48
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -3.5, 1)).multiplyScalar(segment)); // vertice 30' -> 49
		geometry.vertices.push((new THREE.Vector3(-1, 9.75, 8.25)).multiplyScalar(segment)); // vertice 31 -> 50
		geometry.vertices.push((new THREE.Vector3(-1 - 0.5, 9, 8.125)).multiplyScalar(segment)); // vertice 38 -> 51
		geometry.vertices.push((new THREE.Vector3(0, -3, 4.25)).multiplyScalar(segment)); // vertice 39 -> 52
		geometry.vertices.push((new THREE.Vector3(1, 0, 4)).multiplyScalar(segment)); // vertice 40 -> 53
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, 0, 4)).multiplyScalar(segment)); // vertice 40' -> 54
//MUDEI	
		//parte frontal
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -4 , 4)).multiplyScalar(segment)); // vertice 25' -> 55
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 3.75)).multiplyScalar(segment)); // vertice 28' -> 56
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 3)).multiplyScalar(segment)); // vertice 27' -> 57
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 1, -5, 1)).multiplyScalar(segment)); // vertice 29' -> 58
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -4, 4)).multiplyScalar(segment)); // vertice 32 -> 59
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -5, 3.75)).multiplyScalar(segment)); // vertice 33 -> 60
		geometry.vertices.push((new THREE.Vector3(-L_frontal, -3, 4.25)).multiplyScalar(segment)); // vertice 36 -> 61
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1 + 0.5, 9, 8.125)).multiplyScalar(segment)); // vertice 37 -> 62

		geometry.vertices.push((new THREE.Vector3(-1, -4, 4)).multiplyScalar(segment)); // vertice 34 -> 63
		geometry.vertices.push((new THREE.Vector3(-1, -5, 3.75)).multiplyScalar(segment)); // vertice 35 -> 64

		geometry.vertices.push((new THREE.Vector3(-1, -5, 3)).multiplyScalar(segment)); // vertice 41 -> 65
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, -5, 3)).multiplyScalar(segment)); // vertice 42 -> 66
		geometry.vertices.push((new THREE.Vector3(-L_frontal / 2, -5, 3.75)).multiplyScalar(segment)); // vertice 43 -> 67

		//parte traseira
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 11.25, 5.5)).multiplyScalar(segment)); // vertice 17' -> 68
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertice 18' -> 69
		geometry.vertices.push((new THREE.Vector3(-L_frontal, 16.25, 5)).multiplyScalar(segment)); // vertice 19' -> 70
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 0.75, 9.75, 8)).multiplyScalar(segment)); // vertice 20' -> 71
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 0,5)).multiplyScalar(segment)); // vertice 21' -> 72
		geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 4.5, 5.125)).multiplyScalar(segment)); // vertice 22' -> 73
		geometry.vertices.push((new THREE.Vector3(-L_frontal + 1, 9.75, 8.25)).multiplyScalar(segment)); // vertice 31' -> 74

		/*======================================================================
		Surfaces
		======================================================================*/
		
		/*1,2,3,4,5,6,7,8,
		0,2,4,5,6,7,8,14,

		9,10,11,12,
		15,16,17,18

		13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,38,39,40
		24,25,26,27,32,33,34,35,36,37,38,39,42,43,45,46,47,48,50,51,52,53*/
		/*
        geometry.faces.push(new THREE.Face3(45, 47, 48,bodyworkColor));
        geometry.faces.push(new THREE.Face3(45, 46, 48,bodyworkColor));
        geometry.faces.push(new THREE.Face3(45, 46, 48,bodyworkColor));
        geometry.faces.push(new THREE.Face3(43, 45, 46,bodyworkColor));
        geometry.faces.push(new THREE.Face3(42, 43, 46,bodyworkColor));

        geometry.faces.push(new THREE.Face3(0, 43, 48,bodyworkColor));
        geometry.faces.push(new THREE.Face3(0, 42, 43,bodyworkColor));
        geometry.faces.push(new THREE.Face3(0, 2, 53,bodyworkColor));
        geometry.faces.push(new THREE.Face3(0, 42, 53,bodyworkColor));

        geometry.faces.push(new THREE.Face3(42, 52, 53,bodyworkColor));
        geometry.faces.push(new THREE.Face3(36, 52, 53,bodyworkColor));
        geometry.faces.push(new THREE.Face3(2, 39, 53,bodyworkColor));
        geometry.faces.push(new THREE.Face3(36, 37, 39,bodyworkColor));
       
       	geometry.faces.push(new THREE.Face3(36, 37, 53,bodyworkColor));
        geometry.faces.push(new THREE.Face3(2, 4, 39,bodyworkColor));
        geometry.faces.push(new THREE.Face3(4, 38, 39,bodyworkColor));
        geometry.faces.push(new THREE.Face3(4, 5, 38,bodyworkColor));

        geometry.faces.push(new THREE.Face3(4, 5, 38,bodyworkColor));
        geometry.faces.push(new THREE.Face3(5, 26, 38,bodyworkColor));
        geometry.faces.push(new THREE.Face3(26, 38, 39,bodyworkColor));
		geometry.faces.push(new THREE.Face3(26, 27, 39,bodyworkColor));
		
        
       
		geometry.faces.push(new THREE.Face3(27, 37, 42, bodyworkColor)); 
		geometry.faces.push(new THREE.Face3(27, 32, 37,bodyworkColor));
        geometry.faces.push(new THREE.Face3(6, 25, 27, bodyworkColor));
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
        geometry.faces.push(new THREE.Face3(18, 33, 34, bodyworkColor));
        
        geometry.faces.push(new THREE.Face3(33, 34, 37, windowColor)); 
		geometry.faces.push(new THREE.Face3(34, 36, 35, windowColor)); 
		
        */
        



		// Left surface
		/*
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
		geometry.faces.push(new THREE.Face3(30, 41, 73, bodyworkColor)); // 15', 24', 16'
		geometry.faces.push(new THREE.Face3(10, 30, 11, bodyworkColor)); // 4', 15', 5'
		geometry.faces.push(new THREE.Face3(28, 31, 68, bodyworkColor)); // 13', 16', 17'
		geometry.faces.push(new THREE.Face3(29, 30, 31, bodyworkColor)); // 14', 15', 16'
		geometry.faces.push(new THREE.Face3(28, 68, 69, bodyworkColor)); // 13', 17', 18'
		geometry.faces.push(new THREE.Face3(29, 31, 28, bodyworkColor)); // 14', 16', 13'
		geometry.faces.push(new THREE.Face3(11, 30, 29, bodyworkColor)); // 5', 15', 14'
		geometry.faces.push(new THREE.Face3(11, 30, 12, bodyworkColor)); // 5', 14', 6'
		geometry.faces.push(new THREE.Face3(12, 30, 13, bodyworkColor)); // 6', 14', 7'
		geometry.faces.push(new THREE.Face3(13, 30, 28, bodyworkColor)); // 7', 14', 13'
		geometry.faces.push(new THREE.Face3(72, 61, 74, bodyworkColor)); // 21', 36, 31'
		geometry.faces.push(new THREE.Face3(61, 71, 74, bodyworkColor)); // 20', 21', 31'
		geometry.faces.push(new THREE.Face3(70, 61, 74, bodyworkColor)); // 19', 20', 31'
		geometry.faces.push(new THREE.Face3(23, 70, 74, bodyworkColor)); // 12', 19', 31'
		geometry.faces.push(new THREE.Face3(23, 69, 70, bodyworkColor)); // 12', 18', 19'
		geometry.faces.push(new THREE.Face3(23, 28, 69, bodyworkColor)); // 12', 13', 18'
		geometry.faces.push(new THREE.Face3(13, 28, 19, bodyworkColor)); // 7', 13', 8'
		geometry.faces.push(new THREE.Face3(19, 28, 20, bodyworkColor)); // 8', 13', 9'
		geometry.faces.push(new THREE.Face3(20, 28, 23, bodyworkColor)); // 9', 13', 12'
		geometry.faces.push(new THREE.Face3(20, 23, 21, bodyworkColor)); // 9', 12', 10'
		geometry.faces.push(new THREE.Face3(21, 23, 22, bodyworkColor)); // 10', 12', 11'
		geometry.faces.push(new THREE.Face3(70, 72, 61, windowColor)); // 19', 21', 20'
		geometry.faces.push(new THREE.Face3(69, 71, 70, windowColor)); // 18', 21', 19'
		*/
        // front surface
        geometry.faces.push(new THREE.Face3(47, 45, 57, bodyworkColor)); // 29, 27, 27'
        geometry.faces.push(new THREE.Face3(47, 58, 57, bodyworkColor)); // 29, 29', 27'
        geometry.faces.push(new THREE.Face3(65, 45, 64, bodyworkColor)); // 41, 27, 35 
        geometry.faces.push(new THREE.Face3(45, 64, 46, bodyworkColor)); // 27, 35, 28
        geometry.faces.push(new THREE.Face3(46, 64, 63, bodyworkColor)); // 28, 35, 34
        geometry.faces.push(new THREE.Face3(63, 46, 42, bodyworkColor)); // 34, 28, 25
        geometry.faces.push(new THREE.Face3(42, 63, 52, bodyworkColor)); // 25, 34, 39
        geometry.faces.push(new THREE.Face3(63, 52, 51, bodyworkColor)); // 34, 39, 38
        geometry.faces.push(new THREE.Face3(52, 42, 51, bodyworkColor)); // 39, 25, 38
		geometry.faces.push(new THREE.Face3(42, 51, 50, bodyworkColor)); // 25, 38, 31
        
        geometry.faces.push(new THREE.Face3(50, 74, 51, bodyworkColor)); // 31, 31', 38
        geometry.faces.push(new THREE.Face3(62,74, 51, bodyworkColor)); // 37, 31', 38
		geometry.faces.push(new THREE.Face3(62, 52, 51, bodyworkColor)); // 37, 39, 38
		

		geometry.faces.push(new THREE.Face3(62, 61, 52 , bodyworkColor)); // 37, 36, 39
		
        geometry.faces.push(new THREE.Face3(74, 55, 62, bodyworkColor)); // 31', 25', 37
        geometry.faces.push(new THREE.Face3(62, 55, 61, bodyworkColor)); // 37 , 25', 36
        geometry.faces.push(new THREE.Face3(55, 61, 59, bodyworkColor)); // 25', 36 , 32
		geometry.faces.push(new THREE.Face3(61, 59 , 67, bodyworkColor)); // 36, 32 , 43

		geometry.faces.push(new THREE.Face3(61, 59 , 62, bodyworkColor)); // 36, 32 , 37
		
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

	
		// back surface
		geometry.faces.push(new THREE.Face3(50, 74, 23, bodyworkColor)); // 31, 31', 12'
		geometry.faces.push(new THREE.Face3(18, 50, 23, bodyworkColor)); // 12, 31, 12'
		geometry.faces.push(new THREE.Face3(18, 23, 22, bodyworkColor)); // 12, 12', 11'
		geometry.faces.push(new THREE.Face3(17, 18, 22, bodyworkColor)); // 11, 12, 11'
		console.log(geometry.faces.length);
	

        geometry.computeFaceNormals();
		geometry.computeVertexNormals();
		let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({side: THREE.DoubleSide}));
		let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({side: THREE.DoubleSide}));
		let basicMat = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({wireframe:true, side: THREE.DoubleSide}));

		
		phongMat.position.set(x,y,z);

		lambertMat.position.set(x,y,z);

		basicMat.position.set(x,y,z);
		//isto resulta? 
		this.phongMesh.push(phongMat);  
		this.lambertMesh.push(lambertMat);
		this.basicMesh.push(basicMat);
		this.add(basicMat);
		
	}
}