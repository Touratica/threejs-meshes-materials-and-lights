class Car {
    addCar(obj, x, y, z, color,radium) {
        var L_lateral = radium * 16; //Largura lateral
        var segment = L_lateral / 28;
        var L_frontal = 17;

        var geometry = new THREE.Geometry();
        
        //parte lateral
        geometry.vertices.push((new THREE.Vector3(1, -2, 3)).multiplyScalar(segment)); // vertice 1
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -2, 3)).multiplyScalar(segment)); // vertice 1'
        geometry.vertices.push((new THREE.Vector3(1, 2, 3)).multiplyScalar(segment)); // vertice 2
        geometry.vertices.push((new THREE.Vector3(-L-1, 2, 3)).multiplyScalar(segment)); // vertice 2

        geometry.vertices.push((new THREE.Vector3(1, 3, 1/2)).multiplyScalar(segment)); // vertice 3
        geometry.vertices.push((new THREE.Vector3(1, 4, -1)).multiplyScalar(segment)); // vertice 4
        geometry.vertices.push((new THREE.Vector3(1, 18, -1)).multiplyScalar(segment)); // vertice 5
        geometry.vertices.push((new THREE.Vector3(1, 19, 0)).multiplyScalar(segment)); // vertice 6
        geometry.vertices.push((new THREE.Vector3(1, 19, 1)).multiplyScalar(segment)); // vertice 7

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 3, 1/2)).multiplyScalar(segment)); // vertice 3'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 4, -1)).multiplyScalar(segment)); // vertice 4'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, -1)).multiplyScalar(segment)); // vertice 5'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 19, 0)).multiplyScalar(segment)); // vertice 6'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 19, 1)).multiplyScalar(segment)); // vertice 7'
    

        geometry.vertices.push((new THREE.Vector3(1, 20.5, 3)).multiplyScalar(segment)); // vertice 8
        geometry.vertices.push((new THREE.Vector3(1, 23.5, 3)).multiplyScalar(segment)); // vertice 9
        geometry.vertices.push((new THREE.Vector3(1, 25, 1)).multiplyScalar(segment)); // vertice 10
        geometry.vertices.push((new THREE.Vector3(1, 28, 1.25)).multiplyScalar(segment)); // vertice 11
        geometry.vertices.push((new THREE.Vector3(1, 29, 5)).multiplyScalar(segment)); // vertice 12

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 20.5, 3)).multiplyScalar(segment)); // vertice 8'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 23.5, 3)).multiplyScalar(segment)); // vertice 9'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 25, 1)).multiplyScalar(segment)); // vertice 10'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 28, 1.25)).multiplyScalar(segment)); // vertice 11'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 29, 5)).multiplyScalar(segment)); // vertice 12'

        geometry.vertices.push((new THREE.Vector3(1, 18, 3.75)).multiplyScalar(segment)); // vertice 13
        geometry.vertices.push((new THREE.Vector3(1, 18, 0)).multiplyScalar(segment)); // vertice 14
        geometry.vertices.push((new THREE.Vector3(1, 11, 0)).multiplyScalar(segment)); // vertice 15
        geometry.vertices.push((new THREE.Vector3(1, 11, 4.5)).multiplyScalar(segment)); // vertice 16

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 3.75)).multiplyScalar(segment)); // vertice 13
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 18, 0)).multiplyScalar(segment)); // vertice 14
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 0)).multiplyScalar(segment)); // vertice 15
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 11, 4.5)).multiplyScalar(segment)); // vertice 16


        geometry.vertices.push((new THREE.Vector3(0.5, 11.25, 5.5)).multiplyScalar(segment)); //vertice 17
        geometry.vertices.push((new THREE.Vector3(0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertice 18

        geometry.vertices.push((new THREE.Vector3(0, 16.25, 5)).multiplyScalar(segment)); // vertice 19
        geometry.vertices.push((new THREE.Vector3(0.75, 9.75, 8)).multiplyScalar(segment)); // vertice 20
        geometry.vertices.push((new THREE.Vector3(0.5, 0, 5)).multiplyScalar(segment)); // vertice 21
        geometry.vertices.push((new THREE.Vector3(0.5,4.5,5.125)).multiplyScalar(segment)); // vertice 22

        geometry.vertices.push((new THREE.Vector3(1, 4, 0)).multiplyScalar(segment)); // vertice 23
        geometry.vertices.push((new THREE.Vector3(1, 4, 4.25)).multiplyScalar(segment)); // vertice 24

        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 4, 0)).multiplyScalar(segment)); // vertice 23'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, 4, 4.25)).multiplyScalar(segment)); // vertice 24'

        geometry.vertices.push((new THREE.Vector3(1, -4, 4)).multiplyScalar(segment)); // vertice 25
        geometry.vertices.push((new THREE.Vector3(1, -4, 3.5).multiplyScalar(segment))); // vertice 26
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, -4, 3.5).multiplyScalar(segment))); // vertice 26'
        geometry.vertices.push((new THREE.Vector3(1, -5, 3)).multiplyScalar(segment)); // vertice 27
        geometry.vertices.push((new THREE.Vector3(1, -5, 3.75)).multiplyScalar(segment)); // vertice 28
        geometry.vertices.push((new THREE.Vector3(1, -5, 1)).multiplyScalar(segment)); // vertice 29
        geometry.vertices.push((new THREE.Vector3(1, -3.5, 1)).multiplyScalar(segment)); // vertice 30
        geometry.vertices.push((new THREE.Vector3(-L_frontal-1, -3.5, 1)).multiplyScalar(segment)); // vertice 30'
        geometry.vertices.push((new THREE.Vector3(-1, 9.75, 8.25)).multiplyScalar(segment)); // vertice 31
        geometry.vertices.push((new THREE.Vector3(-1, 9, 8.125)).multiplyScalar(segment)); // vertice 38
        geometry.vertices.push((new THREE.Vector3(0, -3, 4.25)).multiplyScalar(segment)); // vertice 39

        //parte frontal
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -4 , 4)).multiplyScalar(segment)); // vertice 25'
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -5, 3.75)).multiplyScalar(segment)); // vertice 28'
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -5, 3)).multiplyScalar(segment)); // vertice 27'
        geometry.vertices.push((new THREE.Vector3(L_frontal-1, -5, 1)).multiplyScalar(segment)); // vertice 29'
        geometry.vertices.push((new THREE.Vector3(L_frontal+1, -4, 4)).multiplyScalar(segment)); // vertice 32
       geometry.vertices.push((new THREE.Vector3(L_frontal+1, -5, 3.75)).multiplyScalar(segment)); // vertice 33
        geometry.vertices.push((new THREE.Vector3(L_frontal, -3, 4.25)).multiplyScalar(segment)); // vertice 36
       geometry.vertices.push((new THREE.Vector3(L_frontal+1, 9, 8.125)).multiplyScalar(segment)); // vertice 37

        //geometry.vertices.push((new THREE.Vector3(-1, -4, 4)).multiplyScalar(segment)); // vertice 34
        geometry.vertices.push((new THREE.Vector3(-1, -5, 3.75)).multiplyScalar(segment)); // vertice 35
        
        //parte traseira
        geometry.vertices.push((new THREE.Vector3(-L_frontal-0.5, 11.25, 5.5)).multiplyScalar(segment)); // vertice 17'
        geometry.vertices.push((new THREE.Vector3(-L_frontal-0.5, 16.5, 5.75)).multiplyScalar(segment)); // vertice 18'
        geometry.vertices.push((new THREE.Vector3(-L_frontal, 16.25, 5)).multiplyScalar(segment)); // vertice 19'
        geometry.vertices.push((new THREE.Vector3(-L_frontal + 0.75, 9.75, 8)).multiplyScalar(segment)); // vertice 20' 
        geometry.vertices.push((new THREE.Vector3(-L_frontal -0.5, 0,5)).multiplyScalar(segment)); // vertice 21'
        geometry.vertices.push((new THREE.Vector3(-L_frontal - 0.5, 4.5, 5.125)).multiplyScalar(segment)); // vertice 22'
        geometry.vertices.push((new THREE.Vector3(-L_frontal+ 1, 9.75, 8.25)).multiplyScalar(segment)); // vertice 31'

        
        


        




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