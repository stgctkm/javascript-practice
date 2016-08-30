function Pretax() {};

// static property
Pretax.RATE = 0.08;

Pretax.pretaxPrice = function(price) {
  return price * Pretax.RATE + price;
}

console.log(Pretax.RATE);
console.log(Pretax.pretaxPrice(100));
