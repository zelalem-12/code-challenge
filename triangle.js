function pointsBelong(x1, y1, x2, y2, x3, y3, xp, yp, xq, yq) {
  const ab = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  const bc = Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
  const ac = Math.sqrt(Math.pow(x1 - x3, 2) + Math.pow(y1 - y3, 2));

  if (ab + bc <= ac || ab + ac <= bc || bc + ac <= ab) return 0;

  const getArea = (x1, y1, x2, y2, x3, y3) =>
    Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)) / 2);

  const Area_abc = getArea(x1, y1, x2, y2, x3, y3);

  const Area_abp = getArea(x1, y1, x2, y2, xp, yp);
  const Area_apc = getArea(x1, y1, xp, yp, x3, y3);
  const Area_pbc = getArea(xp, yp, x2, y2, x3, y3);

  const Area_abq = getArea(x1, y1, x2, y2, xq, yq);
  const Area_aqc = getArea(x1, y1, xq, yq, x3, y3);
  const Area_qbc = getArea(xq, yq, x2, y2, x3, y3);

  const isPInside = Area_abc === Area_abp + Area_apc + Area_pbc;
  const isqInside = Area_abc === Area_abq + Area_aqc + Area_qbc;

  if (isPInside && !isqInside) return 1;
  if (!isPInside && isqInside) return 2;
  if (isPInside && isqInside) return 3;
  if (!isPInside && !isqInside) return 4;
}

// example
console.log(pointsBelong(2, 2, 7, 2, 5, 4, 4, 3, 7, 4));

// test case 0
console.log(pointsBelong(0, 0, 2, 0, 4, 0, 2, 0, 4, 0));

// test case 1
console.log(pointsBelong(3, 1, 7, 1, 5, 5, 3, 1, 0, 0));

// test case 2
console.log(pointsBelong(3, 1, 7, 1, 5, 5, 1, 1, 4, 3));

// test case 3
console.log(pointsBelong(3, 1, 7, 1, 5, 5, 5, 2, 6, 3));

// test case 4
console.log(pointsBelong(3, 1, 7, 1, 5, 5, 1, 1, 2, 2));
