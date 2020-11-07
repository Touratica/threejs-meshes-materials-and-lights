'use strict';
class SpotLight extends Component {

  light;

  constructor(x, y, z, index) {
    
    super(x, y, z);
  

    this.light = new THREE.SpotLight(0xffffff);
    this.light.intensity = 1;

    this.light.position.set(x, y, z);

    if (index == 0) //luz 1
    {
      this.light.target = platform.children[0];
      //this.light.lookAt(platform.x,0,0);
      this.light.angle = 0.45;
      this.light.distance = 350;
    }

    else if (index == 1)//luz 2
    {
      this.light.target = platform.children[0];
      //this.light.lookAt(0,platform.y,0);
      this.light.angle = 0.55;
      this.light.distance = 350;
    }
   /* else if (index == 2)
    {
      this.light.target = holder.children[1];
      this.light.angle = 0.45;
    }*/
    else //luz 3
    {
      this.light.target = platform.children[0];
     // this.light.lookAt(0,0,platform.z);
      this.light.angle = 0.25;
    }

   
    scene.add(this.light);
    scene.add(this.light.target);


    this.addCone(x, y, z);
    this.addSphere(x, y, z);
    scene.add(this);

  }

  setPosition(x, y, z) {
    this.position.set(x, y, z);
  }

  addCone( x, y, z) {
    var geometry = new THREE.ConeBufferGeometry(5, 20, 32, 1, true, 0);
    
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000ff
    });
    var cone = new THREE.Mesh(geometry, material);
    cone.position.set(x, y, z);
    this.add(cone);
  }

  addSphere(x, y, z) {
    var geometry = new THREE.SphereGeometry(2, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      color: "rgb(241, 202, 1)"
    });

    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    this.add(sphere);
  }

  OnnOff() {
    if (this.light.visible == true)
    {
      //this.children[0].material.color.setHex(0x0000ff);
      //this.children[1].material.color.setHex(0x0000ff);
      this.light.visible = false;
    }
    else
    {
      //this.children[0].material.color.setHex(0x00004C);
      //this.children[1].material.color.setHex(0x00004C);
      this.light.visible = true;
    }
  }

  /*create(obj, x, y, z) {

    obj.addCone(obj, x, y, z);
    obj.addSphere(obj, x, y, z);
    scene.add(obj);
  }*/
}