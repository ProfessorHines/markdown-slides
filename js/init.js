var slideshow = remark.create({ratio: '16:9'});

// Make links open in new window
[].slice.apply(document.querySelectorAll('a'))
  .forEach(function (a) {
    a.setAttribute('target', '_blank')
  });
