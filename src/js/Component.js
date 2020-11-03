class Component extends THREE.Object3D {
    constructor(x, y, z) {
        super();
        this.create(this, x, y, z);//careful here! xD
        //nao apagues, poe so em comentario xD
    }
    addCuboid(obj, x, y, z, w, h, d, colour) {
        let geometry = new THREE.BoxGeometry(d, h, w);

        let basicMat = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({ color: colour }));
        
      /* ew THREE.MeshPhongMaterial 
            (
                {color: "rgb(55, 52, 67)" }
      ));*/

      let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({ color: colour}));
        
       let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: colour
          }));

        basicMat.position.set(x,y,z);
        phongMat.position.set(x,y,z);
        
        lambertMat.position.set(x,y,z);
        
        obj.phongMesh.push(phongMat);
        obj.lambertMesh.push(lambertMat);
        obj.basicMesh.push(basicMat);
        obj.add(basicMat); 

    
    
    }
    
    addCylinderHorizontal(obj, x, y, z, baseD, baseU,height,colour) {
        let geometry = new THREE.CylinderGeometry(baseD / 2, baseU / 2 , height, 16, 1);
        let basicMat = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({ color: colour }));
        let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
        color: colour }));
        let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: colour
          }));

        basicMat.position.set(x,y,z);
        phongMat.position.set(x,y,z);
        lambertMat.position.set(x,y,z);
        
        obj.phongMesh.push(phongMat);
        obj.lambertMesh.push(lambertMat);
        obj.basicMesh.push(basicMat);
        obj.add(phongMat); 
        return phongMat;
    }
    addCylinderVertical(obj, x, y, z, base, height,colour) { //problema com a cor 
        let geometry = new THREE.CylinderGeometry(base / 2, base / 2, height, 16, 1);
    
        let basicMat = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({
            color: colour
          }));


        let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({color: colour}));
        console.log(phongMat.material.color);

        let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: colour
          }));
        basicMat.position.set(x,y,z);
        phongMat.position.set(x,y,z);
        lambertMat.position.set(x,y,z);

        basicMat.rotateX(Math.PI / 2);
        phongMat.rotateX(Math.PI / 2);
        lambertMat.rotateX(Math.PI / 2);
        
        
        obj.phongMesh.push(phongMat);
         obj.lambertMesh.push(lambertMat);
        obj.basicMesh.push(basicMat);
        obj.add(basicMat); 

    }

    addSphere(obj, x, y,z, radius,colour)
    {
        var geometry = new THREE.SphereGeometry( radius, 32, 32);
        let basicMat = new THREE.Mesh(geometry,new THREE.MeshBasicMaterial({
            color: colour
          }));
        let phongMat = new THREE.Mesh(geometry, new THREE.MeshPhongMaterial({
            color: colour
          }));
        let lambertMat = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({
            color: colour
          }));

        basicMat.position.set(x,y,z);
        phongMat.position.set(x,y,z);
        lambertMat.position.set(x,y,z);
        
        obj.phongMesh.push(phong);
        obj.lambertMesh.push(lambert);
        obj.basicMesh.push(basic);
        obj.add(phongMat); 

        return phongMat;
    }
    
    addComponent(comp, x, y, z) {
        this.add(comp);
        comp.position.set(x, y, z);
    }

    position_set(x,y,z){
        this.position.set(x,y,z);
    }

    changeMesh(obj, flag ) { //muda o tipo de mesh, consoante a flag passada
        //obj pode ser do tipo carro ou palanquete
        /*removeMesh*/ 
        /*addMesh*/
        

    }
    
    addMesh(obj, meshVector) { //meshVector tem todos os objetos da cena com esse tipo de mesh
        //assim, muda automaticamente a mesh para todos
        for (var i = 0; i < meshVector.length; i++) {
          obj.add(mesh[i]);
        }
    }
    
    //tira a mesh presente de todos os os objetos presentes em meshVector 
    removeMesh(obj, meshVector) { 
        for (var i = 0; i < meshVector.length; i++) {
          obj.remove(mesh[i]);
        }
      }
    
}