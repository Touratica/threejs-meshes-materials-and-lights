'use strict';
class DirectionalLight extends Component {

  light;

  constructor(x, y, z, flag) {
    super(x, y, z);

    this.light = new THREE.DirectionalLight(0xffffff);
    this.light.intensity = 1;

    this.light.position.set(x, y, z);
    
    if (flag == 0)
    {
      this.light.target = painting.children[6];
      this.light.angle = 0.45;
      this.light.distance = 350;
    }

    else if (flag == 1)
    {
      this.light.target = painting.children[15];
      this.light.angle = 0.55;
      this.light.distance = 350;
    }
    else if (flag == 2)
    {
      this.light.target = holder.children[1];
      this.light.angle = 0.45;
    }
    else
    {
      this.light.target = holder.children[1];
      this.light.angle = 0.25;
    }

   
    scene.add(this.light);
    scene.add(this.light.target);


  }

  setPosition(x, y, z) {
    this.position.set(x, y, z);
  }

  addCone(obj, x, y, z) {
    var geometry = new THREE.ConeBufferGeometry(5, 20, 32, 1, true, 0);
    var material = new THREE.MeshBasicMaterial({
      color: 0x0000ff
    });
    var cone = new THREE.Mesh(geometry, material);
    cone.position.set(x, y, z);
    obj.add(cone);
  }

  addSphere(obj, x, y, z) {
    var geometry = new THREE.SphereGeometry(2, 32, 32);
    var material = new THREE.MeshBasicMaterial({
      color: 0xffffff
    });
    var sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    obj.add(sphere);
  }

  toggle() {
    if (this.light.intensity == 0)
    {
      this.children[0].material.color.setHex(0x0000ff);
      this.children[1].material.color.setHex(0x0000ff);
      this.light.intensity = 1;
    }
    else
    {
      this.children[0].material.color.setHex(0x00004C);
      this.children[1].material.color.setHex(0x00004C);
      this.light.intensity = 0;
    }
  }

  create(obj, x, y, z) {

    obj.addCone(obj, x, y, z);
    obj.addSphere(obj, x, y, z);
    scene.add(obj);
  }
}