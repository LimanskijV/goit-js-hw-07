const listCategories = document.querySelector('#categories')

const li = listCategories.querySelectorAll('li.item')

console.log(`Number of categories: ${li.length}`)

li.forEach(li => {
  const h2Text = li.querySelector('h2').textContent;
  const list = li.querySelectorAll('ul > li').length;
  console.log(h2Text);
  console.log(`Elements: ${list}`);
});
