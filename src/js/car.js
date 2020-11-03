class Car {
    addCar(obj, x, y, z, color,radium) {
        var L_lateral = radium * 16; //Largura lateral
        var segment = L_lateral / 28;
        var L_frontal = 17;

        var geometry = new THREE.Geometry();
        
        //parte lateral
        geometry.vertices.push((new THREE.Vector3(1, -2, 3)).multiplyScalar(segment)); // vertice 1 -> 0
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -2, 3)).multiplyScalar(segment)); // vertice 1' -> 1
        geometry.vertices.push((new THREE.Vector3(1, 2, 3)).multiplyScalar(segment)); // vertice 2 -> 2
        geometry.vertices.push((new THREE.Vector3(-L-1, 2, 3)).multiplyScalar(segment)); // vertice 2 -> 3

        geometry.vertices.push((new THREE.Vector3(1, 3, 1/2)).multiplyScalar(segment)); // vertice 3 -> 4
        geometry.vertices.push((new THREE.Vector3(1, 4, -1)).multiplyScalar(segment)); // vertice 4 -> 5
        geometry.vertices.push((new THREE.Vector3(1, 18, -1)).multiplyScalar(segment)); // vertice 5 -> 6
        geometry.vertices.push((new THREE.Vector3(1, 19, 0)).multiplyScalar(segment)); // vertice 6 -> 7
        geometry.vertices.push((new THREE.Vector3(1, 19, 1)).multiplyScalar(segment)); // vertice 7 -> 8

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 3, 1/2)).multiplyScalar(segment)); // vertice 3' -> 9
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 4, -1)).multiplyScalar(segment)); // vertice 4' -> 10
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, -1)).multiplyScalar(segment)); // vertice 5' -> 11
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 19, 0)).multiplyScalar(segment)); // vertice 6' -> 12
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 19, 1)).multiplyScalar(segment)); // vertice 7' -> 13
    

        geometry.vertices.push((new THREE.Vector3(1, 20.5, 3)).multiplyScalar(segment)); // vertice 8 -> 14
        geometry.vertices.push((new THREE.Vector3(1, 23.5, 3)).multiplyScalar(segment)); // vertice 9 -> 15
        geometry.vertices.push((new THREE.Vector3(1, 25, 1)).multiplyScalar(segment)); // vertice 10 -> 16
        geometry.vertices.push((new THREE.Vector3(1, 28, 1.25)).multiplyScalar(segment)); // vertice 11 -> 17
        geometry.vertices.push((new THREE.Vector3(1, 29, 5)).multiplyScalar(segment)); // vertice 12 -> 18

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 20.5, 3)).multiplyScalar(segment)); // vertice 8' -> 19
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 23.5, 3)).multiplyScalar(segment)); // vertice 9' -> 20
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 25, 1)).multiplyScalar(segment)); // vertice 10' -> 21
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 28, 1.25)).multiplyScalar(segment)); // vertice 11' -> 22
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 29, 5)).multiplyScalar(segment)); // vertice 12' -> 23

        geometry.vertices.push((new THREE.Vector3(1, 18, 3.75)).multiplyScalar(segment)); // vertice 13 -> 24
        geometry.vertices.push((new THREE.Vector3(1, 18, 0)).multiplyScalar(segment)); // vertice 14 -> 25
        geometry.vertices.push((new THREE.Vector3(1, 11, 0)).multiplyScalar(segment)); // vertice 15 -> 26
        geometry.vertices.push((new THREE.Vector3(1, 11, 4.5)).multiplyScalar(segment)); // vertice 16 -> 27

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 3.75)).multiplyScalar(segment)); // vertice 13 -> 28
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 0)).multiplyScalar(segment)); // vertice 14 -> 29
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 0)).multiplyScalar(segment)); // vertice 15 -> 30
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 4.5)).multiplyScalar(segment)); // vertice 16 -> 31


        geometry.vertices.push((new THREE.Vector3(0.5, 11.25, 5.5)).multiplyScalar(segment)); //vertice 17 -> 32
        geometry.vertices.push((new THREE.Vector3(0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertice 18 -> 33

        geometry.vertices.push((new THREE.Vector3(0, 16.25, 5)).multiplyScalar(segment)); // vertice 19 -> 34
        geometry.vertices.push((new THREE.Vector3(0.75, 9.75, 8)).multiplyScalar(segment)); // vertice 20 -> 35
        geometry.vertices.push((new THREE.Vector3(0.5, 0, 5)).multiplyScalar(segment)); // vertice 21 -> 36
        geometry.vertices.push((new THREE.Vector3(0.5,4.5,5.125)).multiplyScalar(segment)); // vertice 22 -> 37

        geometry.vertices.push((new THREE.Vector3(1, 4, 0)).multiplyScalar(segment)); // vertice 23 -> 38
        geometry.vertices.push((new THREE.Vector3(1, 4, 4.25)).multiplyScalar(segment)); // vertice 24 -> 39

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 4, 0)).multiplyScalar(segment)); // vertice 23' -> 40
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 4, 4.25)).multiplyScalar(segment)); // vertice 24' -> 41

        geometry.vertices.push((new THREE.Vector3(1, -4, 4)).multiplyScalar(segment)); // vertice 25 -> 42
        geometry.vertices.push((new THREE.Vector3(1, -4, 3.5).multiplyScalar(segment))); // vertice 26 -> 43
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, -4, 3.5).multiplyScalar(segment))); // vertice 26' -> 44
        geometry.vertices.push((new THREE.Vector3(1, -5, 3)).multiplyScalar(segment)); // vertice 27 -> 45
        geometry.vertices.push((new THREE.Vector3(1, -5, 3.75)).multiplyScalar(segment)); // vertice 28 -> 46
        geometry.vertices.push((new THREE.Vector3(1, -5, 1)).multiplyScalar(segment)); // vertice 29 -> 47
        geometry.vertices.push((new THREE.Vector3(1, -3.5, 1)).multiplyScalar(segment)); // vertice 30 -> 48
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, -3.5, 1)).multiplyScalar(segment)); // vertice 30' -> 49
        geometry.vertices.push((new THREE.Vector3(-1, 9.75, 8.25)).multiplyScalar(segment)); // vertice 31 -> 50
        geometry.vertices.push((new THREE.Vector3(-1, 9, 8.125)).multiplyScalar(segment)); // vertice 38 -> 51
        geometry.vertices.push((new THREE.Vector3(0, -3, 4.25)).multiplyScalar(segment)); // vertice 39 -> 52
        geometry.vertices.push((new THREE.Vector3(1, 0, 4)).multiplyScalar(segment)); // vertice 40 -> 53
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, 0, 4)).multiplyScalar(segment)); // vertice 40' -> 54

        //parte frontal
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -4 , 4)).multiplyScalar(segment)); // vertice 25' -> 55
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -5, 3.75)).multiplyScalar(segment)); // vertice 28' -> 56
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -5, 3)).multiplyScalar(segment)); // vertice 27' -> 57
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -5, 1)).multiplyScalar(segment)); // vertice 29' -> 58
        geometry.vertices.push((new THREE.Vector3(L_frontal+1, -4, 4)).multiplyScalar(segment)); // vertice 32 -> 59
       geometry.vertices.push((new THREE.Vector3(L_frontal+1, -5, 3.75)).multiplyScalar(segment)); // vertice 33 -> 60
        geometry.vertices.push((new THREE.Vector3(L_frontal, -3, 4.25)).multiplyScalar(segment)); // vertice 36 -> 61
       geometry.vertices.push((new THREE.Vector3(L_frontal+1, 9, 8.125)).multiplyScalar(segment)); // vertice 37 -> 62

        //geometry.vertices.push((new THREE.Vector3(-1, -4, 4)).multiplyScalar(segment)); // vertice 34 -> 63
        geometry.vertices.push((new THREE.Vector3(-1, -5, 3.75)).multiplyScalar(segment)); // vertice 35 -> 64

        geometry.vertices.push((new THREE.Vector3(-1, -5, 3)).multiplyScalar(segment)); // vertice 41 -> 65
        geometry.vertices.push((new THREE.Vector3(-L_frontal+ 1, -5, 3)).multiplyScalar(segment)); // vertice 42 -> 66
        geometry.vertices.push((new THREE.Vector3(-L_frontal/2, -5, 3.75)).multiplyScalar(segment)); // vertice 43 -> 67
        
        //parte traseira
        geometry.vertices.push((new THREE.Vector3(-L_frontal-0.5, 11.25, 5.5)).multiplyScalar(segment)); // vertice 17' -> 68
        geometry.vertices.push((new THREE.Vector3(-L_frontal-0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertice 18' -> 69
        geometry.vertices.push((new THREE.Vector3(-L_frontal, 16.25, 5)).multiplyScalar(segment)); // vertice 19' -> 70
        geometry.vertices.push((new THREE.Vector3(-L_frontal + 0.75, 9.75, 8)).multiplyScalar(segment)); // vertice 20' -> 71
        geometry.vertices.push((new THREE.Vector3(-L_frontal -0.5, 0,5)).multiplyScalar(segment)); // vertice 21' -> 72
        geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 4.5, 5.125)).multiplyScalar(segment)); // vertice 22' -> 73
        geometry.vertices.push((new THREE.Vector3(-L_frontal+ 1, 9.75, 8.25)).multiplyScalar(segment)); // vertice 31' -> 74

        
        


        




//ignorar isto aqui em baixo - template
		/*geometry.faces.push(new THREE.Face3(9, 7, 0));
		
        



		geometry.computeFaceNormals();
		geometry.computeVertexNormals();
		var phong = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
			color: color,
			specular: color
		}));
		var lambert = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
			color: color,
			specular: color
		}));
		var basic = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
			color: color,
			specular: color
		}));

		phong.position.x = x;
		phong.position.y = y;
		phong.position.z = z;

		lambert.position.x = x;
		lambert.position.y = y;
		lambert.position.z = z;

		basic.position.x = x;
		basic.position.y = y;
		basic.position.z = z;

		obj.phongMesh.push(phong);
		obj.lambertMesh.push(lambert);
		obj.basicMesh.push(basic);
		obj.add(phong);*/
	}
}