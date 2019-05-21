import THREE from "../../vendor/three";
import { addIsHelperFlag } from "./utils";

export default class GridHelper extends THREE.GridHelper {
  constructor() {
    super(30, 30, 0x444444, 0x888888);

    this.name = "GridHelper";

    // Add more emphasized major grid lines
    const array = this.geometry.attributes.color.array;

    for (let i = 0; i < array.length; i += 60) {
      for (let j = 0; j < 12; j++) {
        array[i + j] = 0.9;
      }
    }

    this.layers.enable(3);

    addIsHelperFlag(this);
  }
}
