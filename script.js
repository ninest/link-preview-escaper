let list = [
  {
    id: 0,
    url: 'https://www.youtube.com/watch?v=XqZsoesa55w&t=26s'
  },
  {
    id: 1,
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  },
  {
    id: 3,
    url: 'https://www.youtube.com/watch?v=XqZsoesa55w&t=26s',
  }
]

let linkClicker = document.getElementById('link_click');

window.onload = window.onfocus = () => {
  let size = list.length;
  let theChosenOne = Math.round(Math.random()*size);
  console.log(theChosenOne);
  let theChosenLink = list[theChosenOne].url;
  console.log(theChosenLink);
  this.document.location.href = theChosenLink;
}