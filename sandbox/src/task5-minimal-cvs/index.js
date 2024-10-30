
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
export const getMinimalCVS = (initialCommit) => {
    // Массив для хранения истории версий
    const versions = [initialCommit.slice()]; // Создаём копию initialCommit

    return {
        // head - возвращает последнюю версию массива
        head: () => versions[versions.length - 1],

        // history - возвращает все версии массива
        history: () => versions.slice(),

        // push - добавляет новый элемент и сохраняет версию
        push: (element) => {
            const newVersion = versions[versions.length - 1].slice(); // Копия последней версии
            newVersion.push(element); // Добавляем элемент в копию
            versions.push(newVersion); // Сохраняем новую версию
        },

        // pop - удаляет последний элемент, сохраняет новую версию и возвращает удалённый элемент
        pop: () => {
            const newVersion = versions[versions.length - 1].slice(); // Копия последней версии
            const removedElement = newVersion.pop(); // Удаляем последний элемент
            versions.push(newVersion); // Сохраняем новую версию
            return removedElement; // Возвращаем удалённый элемент
        }
    };
};
