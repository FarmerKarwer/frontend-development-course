/**
 * Возвращает объект с количеством вхождений типов в переданном объекте
 * 
 * @param {Object} obj Объект
 * @returns {Object} Объект с количеством вхождений типов
 */
export const solutionFn = (obj) => {
    const result = {};

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const type = typeof obj[key];
            result[type] = (result[type] || 0) + 1;
        }
    }

    return result;
};
