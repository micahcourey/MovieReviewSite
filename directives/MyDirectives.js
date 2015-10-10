movieSite.directive("changeClass", function() {
  return function(scope, element) {
         element.bind("click", function() {
             element.parent().toggleClass(attrs.changeClass);
         });
     };
 });
