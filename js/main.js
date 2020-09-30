var ul = document.querySelector('ul.cringeyGrid');
for (var i = ul.children.length; i >= 0; i--) {
    ul.appendChild(ul.children[Math.random() * i | 0]);
}

$('li').click( function() {
  $(this).toggleClass("clicked");
} );

textFit(document.querySelector(".innerText"));