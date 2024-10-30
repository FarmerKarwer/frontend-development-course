
/**
 * Возвращает одноразрядное число, полученное в результате итеративного перемножения всех цифр числа
 * 
 * @param {Number} num
 * @returns {Number}
 */
export const solutionFn = (num) => {
    // Проверяем, что число является натуральным
    if (num < 10) return num; 

    let product = num;

    while (product >= 10) {
        product = String(product) 
            .split('') 
            .map(Number) 
            .reduce((acc, digit) => acc * digit, 1); 
    }

    return product;
};
