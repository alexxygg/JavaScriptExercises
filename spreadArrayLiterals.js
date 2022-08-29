let girlNames = ["Jane", "Jessica", "Janet", "Julie"];
let boyNames = ["John", "Jake", "Jay", "Jacob"];

let names = [...girlNames, ...boyNames];

const headFeatures = { hair: true, nose: 1, teeth: 32 };
const handFeatures = { fingers: 10, nails: 10, handMuscles: 34 };

const humanFeatures = { ...headFeatures, ...handFeatures };
