/* 
'number' + 3 + 3
 Step 1: 'number' + 3 → 'number3' (рядок + число = рядок)
 Step 2: 'number3' + 3 → 'number33'
 Result: 'number33'
*/

console.log('number' + 3 + 3); // 'number33'

/*
 null + 3
 null перетворюється на 0 → 0 + 3
 Result: 3
*/

console.log(null + 3); // 3

/*
 5 && "qwerty"
 && повертає перше "фальшиве" значення або останнє, якщо всі правдиві
 5 — це "правда", "qwerty" — теж "правда"
 Result: "qwerty"
*/

console.log(5 && "qwerty"); // 'qwerty'

/*
 +'40' + +'2' + "hillel"
 +'40' → 40 унарний плюс перетворює рядок на число
 +'2' → 2
 40 + 2 = 42
 42 + 'hillel' = '42hillel' число + рядок = рядок
*/

console.log(+'40' + +'2' + "hillel"); // '42hillel'

/*
 '10' - 5 === 6
 '10' - 5 → 10 - 5 = 5 рядок перетворюється в число
 5 === 6 → false
*/

console.log('10' - 5 === 6); // false

/*
 true + false
 true → 1, false → 0
 1 + 0 = 1
*/

console.log(true + false); // 1

/*
 '4px' - 3
 '4px' не можна перетворити в число → NaN
 NaN - 3 = NaN
*/

console.log('4px' - 3); // NaN

/*
 '4' - 3
 '4' → 4, 4 - 3 = 1
*/

console.log('4' - 3); // 1

/*
 '6' + 3 ** 0
  3 ** 0 → 1 (3 в нульовому ступені)
 '6' + 1 → '61' рядок + число = рядок
*/

console.log('6' + 3 ** 0); // '61'

/*
 12 / '6'
 '6' → 6
 12 / 6 = 2
*/

console.log(12 / '6'); // 2

/*
 '10' + (5 === 6)
 5 === 6 → false
 '10' + false → '10false' рядок + булеве = рядок
*/

console.log('10' + (5 === 6)); // '10false'

/*
 null == ''
 null не дорівнює порожньому рядку, == не конвертує в цьому випадку
 Result: false
*/

console.log(null == ''); // false

/*
 3 ** (9 / 3)
 9 / 3 = 3
 3 ** 3 = 27
*/

console.log(3 ** (9 / 3)); // 27

/*
 !!'false' == !!'true'
 !! — подвійне заперечення, перетворює в булеве значення
 !!'false' → true непорожній рядок → true
 !!'true' → теж true
 true == true → true
*/

console.log(!!'false' == !!'true'); // true

/*
 0 || '0' && 1
 '0' && 1 → 1 обидва значення правдиві → повертається останнє
 0 || 1 → 1 (0 — хибне, 1 — правдиве)
*/

console.log(0 || '0' && 1); // 1

/*
 (+null == false) < 1
 +null → 0, false → 0 → 0 == 0 → true
 true < 1 → 1 < 1 → false
*/

console.log((+null == false) < 1); // false

/*
 false && true || true
 false && true → false
 false || true → true
*/

console.log(false && true || true); // true

/*
 false && (false || true);
 (false || true) → true
 false && true → false
*/

console.log(false && (false || true)); // false

/*
 (+null == false) < 1 ** 5
 +null → 0, false → 0 → 0 == 0 → true
 1 ** 5 = 1
 true < 1 → 1 < 1 → false
*/

console.log((+null == false) < 1 ** 5); // false


/*
Prompt:

+ перед рядком (наприклад, +'2') перетворює рядок у число

== — порівнює зі спробою привести типи

=== — порівняння без перетворення типів

&& — повертає перше хибне значення або останнє, якщо всі правдиві

|| — повертає перше правдиве значення

!! — перетворює значення у булевий тип

*/