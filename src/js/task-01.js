const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

categories.forEach(element => {
    const elTitle = element.firstElementChild.textContent;
    const elListCount = element.lastElementChild.children.length;
    console.log('Category:', elTitle);
    console.log('Elements:', elListCount);
});
