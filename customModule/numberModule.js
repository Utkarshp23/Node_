exports.isPrime = (n) => {
  if (n < 2) return false;

  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
  }

  return true;
};

exports.calcFact = (n) => {
  var ans = 1;
  while (n > 0) {
    ans *= n;
    n--;
  }
  return ans;
};

exports.isPerfect = (n) => {
  var sum = 0;
  for (i = 1; i <= n / 2; ++i) {
    sum += n % i == 0 ? i : 0;
  }

  var ans = sum == n ? true : false;

  return ans;
};
// exports.prime();
