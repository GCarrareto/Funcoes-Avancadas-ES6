//Ferramenta Console (rodar no console do browser)

console.log('Black text');
console.warn('Yellow text with alert');
console.error('Red error text');

console.trace();

console.group('My group');
console.log('Inside my group');
console.log('More info inside my group');
console.groupEnd('My group');

console.time('Log time');
setTimeout(() => {
    console.timeEnd('Log time');
});

console.table(['Gustavo Carrareto', 'Digital Innovation One']);
console.log('%c styled log', 'color: blue');
