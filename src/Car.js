import * as THREE from "three";
import Component from "./Component";

export default class Car extends Component {
  constructor(x, y, z, radius) {
    super(x, y, z);
    let L_lateral = radius * 11; // chassis body width
    let segment = L_lateral / 28; // unity
    let L_frontal = 14; // length between center of front wheels
    let chassisColor = new THREE.Color("rgb(3, 4, 6)");
    let wheelsColor = new THREE.Color("rgb(10, 11, 15)");

    let geometry = new THREE.Geometry();

    // chassis
    this.chassis = new Component();

    // chassis body
    this.mainBody = new Component();
    this.mainBody.addCuboid(
      0,
      0,
      0,
      L_lateral,
      2 * segment,
      (L_frontal - 2) * segment,
      chassisColor
    );
    this.chassis.addComponent(
      this.mainBody,
      -(L_frontal / 2 + 1) * segment,
      L_lateral / 2 - 3 * segment,
      0
    );

    // front bumper
    let shape = new THREE.Shape();
    shape.moveTo(-segment, segment);
    shape.lineTo(segment, segment);
    shape.lineTo(segment, -segment);

    this.frontBumper = new Component();
    this.frontBumper.addHorizontalExtrusion(
      0,
      0,
      0,
      shape,
      (L_frontal + 2) * segment,
      chassisColor
    );
    this.chassis.addComponent(this.frontBumper, -L_frontal, -4 * segment, 0);

    // back bumper
    shape = new THREE.Shape();
    shape.moveTo(-segment, -1.5 * segment);
    shape.lineTo(1.25 * segment, 1.5 * segment);
    shape.lineTo(segment, -1.5 * segment);

    this.backBumper = new Component();
    this.backBumper.addHorizontalExtrusion(
      0,
      0,
      0,
      shape,
      (L_frontal + 2) * segment,
      chassisColor
    );
    this.chassis.addComponent(
      this.backBumper,
      -L_frontal,
      L_lateral - 1.5 * segment,
      0
    );

    // Wheels
    this.wheelFL = new Component();
    this.wheelFL.addCylinderHorizontal(
      0,
      0,
      0,
      2 * radius,
      2 * radius,
      2 * segment,
      wheelsColor
    );
    this.chassis.addComponent(this.wheelFL, 0, 0, 0);

    this.wheelFR = new Component();
    this.wheelFR.addCylinderHorizontal(
      0,
      0,
      0,
      2 * radius,
      2 * radius,
      2 * segment,
      wheelsColor
    );
    this.chassis.addComponent(this.wheelFR, -L_frontal * segment, 0, 0);

    this.wheelBR = new Component();
    this.wheelBR.addCylinderHorizontal(
      0,
      0,
      0,
      2 * radius,
      2 * radius,
      2 * segment,
      wheelsColor
    );
    this.chassis.addComponent(
      this.wheelBR,
      -L_frontal * segment,
      L_lateral - 6 * segment,
      0
    );

    this.wheelBL = new Component();
    this.wheelBL.addCylinderHorizontal(
      0,
      0,
      0,
      2 * radius,
      2 * radius,
      2 * segment,
      wheelsColor
    );
    this.chassis.addComponent(this.wheelBL, 0, L_lateral - 6 * segment, 0);

    this.set_chassis();
    this.addComponent(this.chassis, x, y, z);

    // right and left sides
    geometry.vertices.push(new THREE.Vector3(1, -2, 3).multiplyScalar(segment)); // vertex 1 -> 0
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -2, 3).multiplyScalar(segment)
    ); // vertex 1' -> 1

    geometry.vertices.push(new THREE.Vector3(1, 2, 3).multiplyScalar(segment)); // vertex 2 -> 2
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 2, 3).multiplyScalar(segment)
    ); // vertex 2' -> 3

    geometry.vertices.push(
      new THREE.Vector3(1, 3, 1 / 2).multiplyScalar(segment)
    ); // vertex 3 -> 4
    geometry.vertices.push(new THREE.Vector3(1, 4, -1).multiplyScalar(segment)); // vertex 4 -> 5
    geometry.vertices.push(
      new THREE.Vector3(1, 18, -1).multiplyScalar(segment)
    ); // vertex 5 -> 6
    geometry.vertices.push(new THREE.Vector3(1, 19, 0).multiplyScalar(segment)); // vertex 6 -> 7
    geometry.vertices.push(new THREE.Vector3(1, 19, 1).multiplyScalar(segment)); // vertex 7 -> 8

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 3, 1 / 2).multiplyScalar(segment)
    ); // vertex 3' -> 9
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 4, -1).multiplyScalar(segment)
    ); // vertex 4' -> 10
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 18, -1).multiplyScalar(segment)
    ); // vertex 5' -> 11
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 19, 0).multiplyScalar(segment)
    ); // vertex 6' -> 12
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 19, 1).multiplyScalar(segment)
    ); // vertex 7' -> 13

    geometry.vertices.push(
      new THREE.Vector3(1, 20.5, 3).multiplyScalar(segment)
    ); // vertex 8 -> 14
    geometry.vertices.push(
      new THREE.Vector3(1, 23.5, 3).multiplyScalar(segment)
    ); // vertex 9 -> 15
    geometry.vertices.push(new THREE.Vector3(1, 25, 1).multiplyScalar(segment)); // vertex 10 -> 16
    geometry.vertices.push(
      new THREE.Vector3(1, 28, 1.25).multiplyScalar(segment)
    ); // vertex 11 -> 17
    geometry.vertices.push(new THREE.Vector3(1, 29, 5).multiplyScalar(segment)); // vertex 12 -> 18

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 20.5, 3).multiplyScalar(segment)
    ); // vertex 8' -> 19
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 23.5, 3).multiplyScalar(segment)
    ); // vertex 9' -> 20
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 25, 1).multiplyScalar(segment)
    ); // vertex 10' -> 21
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 28, 1.25).multiplyScalar(segment)
    ); // vertex 11' -> 22
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 29, 5).multiplyScalar(segment)
    ); // vertex 12' -> 23

    geometry.vertices.push(
      new THREE.Vector3(1, 18, 4.75).multiplyScalar(segment)
    ); // vertex 13 -> 24
    geometry.vertices.push(new THREE.Vector3(1, 18, 0).multiplyScalar(segment)); // vertex 14 -> 25
    geometry.vertices.push(new THREE.Vector3(1, 11, 0).multiplyScalar(segment)); // vertex 15 -> 26
    geometry.vertices.push(
      new THREE.Vector3(1, 11, 4.5).multiplyScalar(segment)
    ); // vertex 16 -> 27

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 18, 4.75).multiplyScalar(segment)
    ); // vertex 13' -> 28
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 18, 0).multiplyScalar(segment)
    ); // vertex 14' -> 29
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 11, 0).multiplyScalar(segment)
    ); // vertex 15' -> 30
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 11, 4.5).multiplyScalar(segment)
    ); // vertex 16' -> 31

    geometry.vertices.push(
      new THREE.Vector3(0.5, 11.25, 5.5).multiplyScalar(segment)
    ); // vertex 17 -> 32
    geometry.vertices.push(
      new THREE.Vector3(0.5, 16.5, 5.75).multiplyScalar(segment)
    ); // vertex 18 -> 33

    geometry.vertices.push(
      new THREE.Vector3(0, 16.25, 6.5).multiplyScalar(segment)
    ); // vertex 19 -> 34

    geometry.vertices.push(
      new THREE.Vector3(-1, 9.75, 8).multiplyScalar(segment)
    ); // vertex 20 -> 35
    geometry.vertices.push(
      new THREE.Vector3(0.5, 0, 5).multiplyScalar(segment)
    ); // vertex 21 -> 36
    geometry.vertices.push(
      new THREE.Vector3(0.5, 4.5, 5.125).multiplyScalar(segment)
    ); // vertex 22 -> 37

    geometry.vertices.push(new THREE.Vector3(1, 4, 0).multiplyScalar(segment)); // vertex 23 -> 38
    geometry.vertices.push(
      new THREE.Vector3(1, 4, 4.25).multiplyScalar(segment)
    ); // vertex 24 -> 39

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 4, 0).multiplyScalar(segment)
    ); // vertex 23' -> 40
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 4, 4.25).multiplyScalar(segment)
    ); // vertex 24' -> 41

    geometry.vertices.push(
      new THREE.Vector3(1, -4, 4.25).multiplyScalar(segment)
    ); // vertex 25 -> 42
    geometry.vertices.push(
      new THREE.Vector3(1, -4, 3.5).multiplyScalar(segment)
    ); // vertex 26 -> 43
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -4, 3.5).multiplyScalar(segment)
    ); // vertex 26' -> 44
    geometry.vertices.push(new THREE.Vector3(1, -5, 3).multiplyScalar(segment)); // vertex 27 -> 45
    geometry.vertices.push(
      new THREE.Vector3(1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 28 -> 46
    geometry.vertices.push(new THREE.Vector3(1, -5, 1).multiplyScalar(segment)); // vertex 29 -> 47
    geometry.vertices.push(
      new THREE.Vector3(1, -3.5, 1).multiplyScalar(segment)
    ); // vertex 30 -> 48
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -3.5, 1).multiplyScalar(segment)
    ); // vertex 30' -> 49
    geometry.vertices.push(
      new THREE.Vector3(-1, 9.75, 8.25).multiplyScalar(segment)
    ); // vertex 31 -> 50
    geometry.vertices.push(
      new THREE.Vector3(-1 - 0.5, 9, 8.125).multiplyScalar(segment)
    ); // vertex 38 -> 51
    geometry.vertices.push(
      new THREE.Vector3(-2, 0, 5.5).multiplyScalar(segment)
    ); // vertex 39 -> 52
    geometry.vertices.push(new THREE.Vector3(1, 0, 4).multiplyScalar(segment)); // vertex 40 -> 53
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, 0, 4).multiplyScalar(segment)
    ); // vertex 40' -> 54

    // front side
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -4, 4.35).multiplyScalar(segment)
    ); // vertex 25' -> 55
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 28' -> 56
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -5, 3).multiplyScalar(segment)
    ); // vertex 27' -> 57
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -5, 1).multiplyScalar(segment)
    ); // vertex 29' -> 58
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, -4, 4.35).multiplyScalar(segment)
    ); // vertex 32 -> 59
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 33 -> 60
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 2, 0, 5.5).multiplyScalar(segment)
    ); // vertex 36 -> 61
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1 + 0.5, 9, 8.125).multiplyScalar(segment)
    ); // vertex 37 -> 62

    geometry.vertices.push(
      new THREE.Vector3(-1, -4, 4.25).multiplyScalar(segment)
    ); // vertex 34 -> 63

    geometry.vertices.push(
      new THREE.Vector3(-1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 35 -> 64

    geometry.vertices.push(
      new THREE.Vector3(-1, -5, 3).multiplyScalar(segment)
    ); // vertex 41 -> 65

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, -5, 3).multiplyScalar(segment)
    ); // vertex 42 -> 66
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal / 2, -3, 4.525).multiplyScalar(segment)
    ); // vertex 43 -> 67
    // back side
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 0.5, 11.25, 5.5).multiplyScalar(segment)
    ); // vertex 17' -> 68
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 0.5, 16.5, 5.75).multiplyScalar(segment)
    ); // vertex 18' -> 69
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal, 16.25, 6.5).multiplyScalar(segment)
    ); // vertex 19' -> 70
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 0.75, 9.75, 8).multiplyScalar(segment)
    ); // vertex 20' -> 71
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 0.5, 0, 5).multiplyScalar(segment)
    ); // vertex 21' -> 72
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 0.5, 4.5, 5.125).multiplyScalar(segment)
    ); // vertex 22' -> 73

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, 9.75, 8.25).multiplyScalar(segment)
    ); // vertex 31' -> 74

    this.createBody(geometry, radius, x, y, z);
    this.createWindow(x, y, z, radius);
    this.currentMesh = this.basicMesh;
    this.lastMesh = this.lambertMesh;
  }

  /* Creates the body of the car */

  createBody(geometry, radius, x, y, z) {
    let bodyworkColor = new THREE.Color("rgb(99, 112, 123)");

    //right surface
    geometry.faces.push(new THREE.Face3(45, 47, 48, bodyworkColor)); // 27, 29, 30
    geometry.faces.push(new THREE.Face3(43, 45, 48, bodyworkColor)); // 26, 27, 30

    geometry.faces.push(new THREE.Face3(0, 43, 48, bodyworkColor)); // 1, 26, 30
    geometry.faces.push(new THREE.Face3(0, 42, 43, bodyworkColor)); // 1, 25, 26
    geometry.faces.push(new THREE.Face3(0, 2, 53, bodyworkColor)); // 1, 2, 40
    geometry.faces.push(new THREE.Face3(53, 42, 0, bodyworkColor)); // 40, 25, 1

    geometry.faces.push(new THREE.Face3(42, 53, 36, bodyworkColor)); // 25, 40, 21
    geometry.faces.push(new THREE.Face3(2, 39, 53, bodyworkColor)); // 2, 24, 40
    geometry.faces.push(new THREE.Face3(37, 53, 39, bodyworkColor)); // 22, 24, 40

    geometry.faces.push(new THREE.Face3(37, 36, 53, bodyworkColor)); //22, 21, 40

    geometry.faces.push(new THREE.Face3(2, 4, 39, bodyworkColor)); // 2, 3, 24
    geometry.faces.push(new THREE.Face3(4, 38, 39, bodyworkColor)); // 3, 23, 24
    geometry.faces.push(new THREE.Face3(5, 26, 38, bodyworkColor)); // 4, 15, 23
    geometry.faces.push(new THREE.Face3(4, 5, 38, bodyworkColor)); // 3, 4, 23

    geometry.faces.push(new THREE.Face3(5, 6, 26, bodyworkColor)); // 4, 5, 15
    geometry.faces.push(new THREE.Face3(39, 38, 26, bodyworkColor)); // 23, 24, 15
    geometry.faces.push(new THREE.Face3(26, 27, 39, bodyworkColor)); // 15, 16, 24

    geometry.faces.push(new THREE.Face3(27, 37, 39, bodyworkColor)); // 16, 22, 24
    geometry.faces.push(new THREE.Face3(32, 37, 27, bodyworkColor)); // 17, 22, 16
    geometry.faces.push(new THREE.Face3(6, 25, 26, bodyworkColor)); // 5, 14, 15
    geometry.faces.push(new THREE.Face3(27, 26, 25, bodyworkColor)); // 15, 16, 14

    geometry.faces.push(new THREE.Face3(6, 7, 26, bodyworkColor)); // 5, 6, 15
    geometry.faces.push(new THREE.Face3(7, 8, 25, bodyworkColor)); // 6, 7, 14
    geometry.faces.push(new THREE.Face3(27, 25, 24, bodyworkColor)); // 14, 16, 13
    geometry.faces.push(new THREE.Face3(8, 24, 25, bodyworkColor)); // 7, 13, 14

    geometry.faces.push(new THREE.Face3(33, 32, 24, bodyworkColor)); // 18, 17, 13
    geometry.faces.push(new THREE.Face3(8, 14, 24, bodyworkColor)); // 7, 8, 13
    geometry.faces.push(new THREE.Face3(14, 15, 24, bodyworkColor)); // 8, 9, 13
    geometry.faces.push(new THREE.Face3(15, 18, 24, bodyworkColor)); // 9, 12, 13

    geometry.faces.push(new THREE.Face3(15, 16, 18, bodyworkColor)); // 9, 10 ,12
    geometry.faces.push(new THREE.Face3(16, 17, 18, bodyworkColor)); // 10, 11, 12
    geometry.faces.push(new THREE.Face3(33, 24, 18, bodyworkColor)); // 18, 13, 12
    geometry.faces.push(new THREE.Face3(34, 33, 18, bodyworkColor)); // 19, 18, 12

    geometry.faces.push(new THREE.Face3(50, 34, 18, bodyworkColor)); // 31, 19, 12
    geometry.faces.push(new THREE.Face3(50, 35, 34, bodyworkColor)); // 31, 20, 19
    geometry.faces.push(new THREE.Face3(35, 50, 36, bodyworkColor)); // 20 , 31, 21
    geometry.faces.push(new THREE.Face3(32, 27, 24, bodyworkColor)); //17, 16, 13

    geometry.faces.push(new THREE.Face3(42, 36, 50, bodyworkColor)); //25, 21, 31

    // Left surface

    geometry.faces.push(new THREE.Face3(1, 54, 3, bodyworkColor)); // 1', 40', 2'
    geometry.faces.push(new THREE.Face3(54, 41, 3, bodyworkColor)); // 54', 24', 2'
    geometry.faces.push(new THREE.Face3(3, 41, 9, bodyworkColor)); // 2', 24', 3'
    geometry.faces.push(new THREE.Face3(55, 54, 1, bodyworkColor)); // 25', 40', 1'
    geometry.faces.push(new THREE.Face3(1, 44, 55, bodyworkColor)); // 1', 26', 25'
    geometry.faces.push(new THREE.Face3(44, 49, 57, bodyworkColor)); // 27', 30', 26'

    geometry.faces.push(new THREE.Face3(57, 49, 58, bodyworkColor)); // 27', 30', 29'
    geometry.faces.push(new THREE.Face3(44, 1, 49, bodyworkColor)); // 40', 1', 30'

    geometry.faces.push(new THREE.Face3(72, 73, 54, bodyworkColor)); // 21', 22', 40'
    geometry.faces.push(new THREE.Face3(73, 41, 54, bodyworkColor)); // 22', 24', 40'
    geometry.faces.push(new THREE.Face3(41, 40, 9, bodyworkColor)); // 24', 23', 3'
    geometry.faces.push(new THREE.Face3(9, 40, 10, bodyworkColor)); // 4', 23', 3'
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
    geometry.faces.push(new THREE.Face3(54, 55, 72, bodyworkColor)); //40' 25' 21'
    geometry.faces.push(new THREE.Face3(55, 74, 72, bodyworkColor)); //25' , 31' ,21'

    // front surface
    geometry.faces.push(new THREE.Face3(47, 45, 57, bodyworkColor)); // 29, 27, 27'
    geometry.faces.push(new THREE.Face3(47, 57, 58, bodyworkColor)); // 29,27, 29'
    geometry.faces.push(new THREE.Face3(52, 63, 42, bodyworkColor)); // 39, 34, 25
    geometry.faces.push(new THREE.Face3(52, 42, 51, bodyworkColor)); // 39, 25, 38
    geometry.faces.push(new THREE.Face3(50, 51, 42, bodyworkColor)); // 31, 38, 25

    geometry.faces.push(new THREE.Face3(50, 74, 51, bodyworkColor)); // 31, 31', 38
    geometry.faces.push(new THREE.Face3(51, 74, 62, bodyworkColor)); // 38, 31', 37

    geometry.faces.push(new THREE.Face3(74, 55, 62, bodyworkColor)); // 31', 25', 37
    geometry.faces.push(new THREE.Face3(62, 55, 61, bodyworkColor)); // 37 , 25', 36
    geometry.faces.push(new THREE.Face3(59, 61, 55, bodyworkColor)); // 32, 36 , 25'
    geometry.faces.push(new THREE.Face3(61, 59, 67, bodyworkColor)); // 36, 32 , 43

    geometry.faces.push(new THREE.Face3(67, 59, 63, bodyworkColor)); // 43 , 32 , 34
    geometry.faces.push(new THREE.Face3(67, 63, 52, bodyworkColor)); // 43 , 34, 39
    geometry.faces.push(new THREE.Face3(60, 66, 65, bodyworkColor)); // 33 , 42 , 41
    geometry.faces.push(new THREE.Face3(65, 64, 60, bodyworkColor)); // 41 , 35 , 33

    geometry.faces.push(new THREE.Face3(64, 59, 60, bodyworkColor)); // 35 , 32 , 33
    geometry.faces.push(new THREE.Face3(59, 64, 63, bodyworkColor)); // 32 , 35 , 34
    geometry.faces.push(new THREE.Face3(52, 61, 67, bodyworkColor)); // 39 , 36 , 43

    // back surface
    geometry.faces.push(new THREE.Face3(74, 50, 23, bodyworkColor)); // 31, 31', 12'
    geometry.faces.push(new THREE.Face3(50, 18, 23, bodyworkColor)); // 12, 31, 12'
    geometry.faces.push(new THREE.Face3(23, 18, 22, bodyworkColor)); // 12, 12', 11'
    geometry.faces.push(new THREE.Face3(18, 17, 22, bodyworkColor)); // 11, 12, 11'

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    let phongMat = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({
        color: bodyworkColor,
        specular: 0x424849,
        side: THREE.DoubleSide,
      })
    );
    let lambertMat = new THREE.Mesh(
      geometry,
      new THREE.MeshLambertMaterial({
        color: bodyworkColor,
        side: THREE.DoubleSide,
      })
    );
    let basicMat = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        color: bodyworkColor,
        side: THREE.DoubleSide,
      })
    );

    phongMat.position.set(x, y, z);

    lambertMat.position.set(x, y, z);

    basicMat.position.set(x, y, z);

    this.phongMesh.push(phongMat);
    this.lambertMesh.push(lambertMat);
    this.basicMesh.push(basicMat);
    this.add(basicMat);
  }
  createWindow(x, y, z, radius) {
    let windowColor = new THREE.Color("rgb(11, 10, 15)");
    let geometry = new THREE.Geometry();

    let L_lateral = radius * 11; // chassis body width
    let segment = L_lateral / 28;
    let L_frontal = 14; // length between center of front wheels

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1 + 0.5, 9, 8.125).multiplyScalar(segment)
    ); // vertex 37 -> 0

    geometry.vertices.push(
      new THREE.Vector3(-1 - 0.5, 9, 8.125).multiplyScalar(segment)
    ); // vertex 38 -> 1

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 2, 0, 5.5).multiplyScalar(segment)
    ); // vertex 36 -> 2

    geometry.vertices.push(
      new THREE.Vector3(-2, 0, 5.5).multiplyScalar(segment)
    ); // vertex 39 -> 3

    geometry.vertices.push(
      new THREE.Vector3(1, -4, 4.25).multiplyScalar(segment)
    ); // vertex 25 -> 4
    geometry.vertices.push(
      new THREE.Vector3(1, -4, 3.5).multiplyScalar(segment)
    ); // vertex 26 -> 5
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -4, 3.5).multiplyScalar(segment)
    ); // vertex 26' -> 6
    geometry.vertices.push(new THREE.Vector3(1, -5, 3).multiplyScalar(segment)); // vertex 27 -> 7
    geometry.vertices.push(
      new THREE.Vector3(1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 28 -> 8

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -4, 4.35).multiplyScalar(segment)
    ); // vertex 25' -> 9
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 28' -> 10
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 1, -5, 3).multiplyScalar(segment)
    ); // vertex 27' -> 11

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, -4, 4.35).multiplyScalar(segment)
    ); // vertex 32 -> 12
    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 33 -> 13

    geometry.vertices.push(
      new THREE.Vector3(-1, -5, 3.875).multiplyScalar(segment)
    ); // vertex 35 -> 14

    geometry.vertices.push(
      new THREE.Vector3(-1, -4, 4.25).multiplyScalar(segment)
    ); // vertex 34 -> 15

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 1, -5, 3).multiplyScalar(segment)
    ); // vertex 42 -> 16

    geometry.vertices.push(
      new THREE.Vector3(-1, -5, 3).multiplyScalar(segment)
    ); // vertex 41 -> 17

    geometry.vertices.push(
      new THREE.Vector3(0.5, 16.5, 5.75).multiplyScalar(segment)
    ); // vertex 18 -> 18

    geometry.vertices.push(
      new THREE.Vector3(0, 16.25, 6.5).multiplyScalar(segment)
    ); // vertex 19 -> 19

    geometry.vertices.push(
      new THREE.Vector3(-1, 9.75, 8).multiplyScalar(segment)
    ); // vertex 20 -> 20

    geometry.vertices.push(
      new THREE.Vector3(0.5, 0, 5).multiplyScalar(segment)
    ); // vertex 21 -> 21

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 0.5, 16.5, 5.75).multiplyScalar(segment)
    ); // vertex 18' -> 22

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal, 16.25, 6.5).multiplyScalar(segment)
    ); // vertex 19' -> 23

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal + 0.75, 9.75, 8).multiplyScalar(segment)
    ); // vertex 20' -> 24

    geometry.vertices.push(
      new THREE.Vector3(-L_frontal - 0.5, 0, 5).multiplyScalar(segment)
    ); // vertex 21' -> 25

    // Left window

    geometry.faces.push(new THREE.Face3(19, 20, 21, windowColor)); // 19, 20 , 21
    geometry.faces.push(new THREE.Face3(18, 19, 21, windowColor)); // 18, 19 , 21

    //Vidro Direito

    geometry.faces.push(new THREE.Face3(25, 24, 23, windowColor)); // 21', 20' , 19'
    geometry.faces.push(new THREE.Face3(25, 23, 22, windowColor)); // 21', 19' , 18'

    // windshield

    geometry.faces.push(new THREE.Face3(3, 0, 2, windowColor)); // 39, 37 , 36
    geometry.faces.push(new THREE.Face3(3, 1, 0, windowColor)); // 39, 38 , 37

    // Left headlight

    geometry.faces.push(new THREE.Face3(10, 9, 6, windowColor)); // 28', 26', 25'
    geometry.faces.push(new THREE.Face3(10, 6, 11, windowColor)); // 27', 26', 28'

    geometry.faces.push(new THREE.Face3(13, 12, 9, windowColor)); // 33, 32 , 25'
    geometry.faces.push(new THREE.Face3(10, 13, 9, windowColor)); // 28' , 33 , 25'
    geometry.faces.push(new THREE.Face3(10, 16, 13, windowColor)); // 28' , 33 , 42
    geometry.faces.push(new THREE.Face3(16, 10, 11, windowColor)); // 42' , 28', 27'

    // Right headlight

    geometry.faces.push(new THREE.Face3(5, 8, 7, windowColor)); // 26, 28, 27
    geometry.faces.push(new THREE.Face3(5, 4, 8, windowColor)); // 26, 25, 28

    geometry.faces.push(new THREE.Face3(17, 7, 14, windowColor)); // 41, 27, 35
    geometry.faces.push(new THREE.Face3(7, 8, 14, windowColor)); // 27, 35, 28
    geometry.faces.push(new THREE.Face3(8, 15, 14, windowColor)); // 28, 34, 35
    geometry.faces.push(new THREE.Face3(15, 8, 4, windowColor)); // 34, 28, 25

    geometry.computeFaceNormals();
    geometry.computeVertexNormals();

    let phongMat = new THREE.Mesh(
      geometry,
      new THREE.MeshPhongMaterial({ color: windowColor, specular: 0x424849 })
    );
    let lambertMat = new THREE.Mesh(
      geometry,
      new THREE.MeshLambertMaterial({
        color: windowColor,
        side: THREE.DoubleSide,
      })
    );
    let basicMat = new THREE.Mesh(
      geometry,
      new THREE.MeshBasicMaterial({
        color: windowColor,
        side: THREE.DoubleSide,
      })
    );

    phongMat.position.set(x, y, z);

    lambertMat.position.set(x, y, z);

    basicMat.position.set(x, y, z);
    this.phongMesh.push(phongMat);
    this.lambertMesh.push(lambertMat);
    this.basicMesh.push(basicMat);
    this.add(basicMat);
  }

  set_chassis() {
    this.frontBumper.currentMesh = this.frontBumper.basicMesh;
    this.frontBumper.lastMesh = this.frontBumper.lambertMesh;

    this.wheelBL.currentMesh = this.wheelBL.basicMesh;
    this.wheelBL.lastMesh = this.wheelBL.lambertMesh;

    this.wheelBR.currentMesh = this.wheelBR.basicMesh;
    this.wheelBR.lastMesh = this.wheelBR.lambertMesh;

    this.wheelFL.currentMesh = this.wheelFL.basicMesh;
    this.wheelFL.lastMesh = this.wheelFL.lambertMesh;

    this.wheelFR.currentMesh = this.wheelFR.basicMesh;
    this.wheelFR.lastMesh = this.wheelFR.lambertMesh;

    this.backBumper.currentMesh = this.backBumper.basicMesh;
    this.backBumper.lastMesh = this.backBumper.lambertMesh;

    this.mainBody.currentMesh = this.mainBody.basicMesh;
    this.mainBody.lastMesh = this.mainBody.lambertMesh;
  }

  changeMesh(flag) {
    super.changeMesh(flag);
    this.frontBumper.changeMesh(flag);

    this.wheelBL.changeMesh(flag);

    this.wheelBR.changeMesh(flag);

    this.wheelFL.changeMesh(flag);

    this.wheelFR.changeMesh(flag);

    this.backBumper.changeMesh(flag);

    this.mainBody.changeMesh(flag);
  }
}
