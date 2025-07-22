var services = {
  "стрижка": "60 грн",
  "гоління": "80 грн",
  "Миття голови": "100 грн",

  price() {
    let total = 0;
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        total += parseFloat(this[key]);
      }
    }
    return total + " грн";
  },

  minPrice() {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        prices.push(parseFloat(this[key]));
      }
    }
    return Math.min(...prices) + " грн";
  },
  
  maxPrice() {
    let prices = [];
    for (let key in this) {
      if (typeof this[key] === "string" && this[key].includes("грн")) {
        prices.push(parseFloat(this[key]));
      }
    }
    return Math.max(...prices) + " грн";
  }
};

services["Розбити скло"] = "200 грн";

console.log("Загальна вартість:", services.price());      // 440 грн
console.log("Мінімальна ціна:", services.minPrice());     // 60 грн
console.log("Максимальна ціна:", services.maxPrice());    // 200 грн
