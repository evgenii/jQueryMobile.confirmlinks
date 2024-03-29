/*
* jQuery mobile ConfirmLinks plugin
* author: evgenii.s.semenchuk
* github: github.com/evgenii/jQueryMobile.confirmlinks
*/

(function( $, undefined ) {
  $( document ).bind( "pagecreate create", function( e ){
    $( e.target ).find( 'a[data-confirm]' ).live( 'click', function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var link = $(this);
      if( confirm( link.attr('data-confirm') ) ){
        link.removeAttr( 'data-confirm' ); 
        link.click();
      }
    });
  });
})( jQuery );

