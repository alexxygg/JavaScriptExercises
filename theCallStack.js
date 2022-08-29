//Formula of a squared triangle.
//a sqaured + b squared = c squared

function square(x) {
  return x * x;
}

function squaredTriangleChecker(x, y, z) {
  return square(x) + square(y) === square(z);
}
