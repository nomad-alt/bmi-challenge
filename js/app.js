$(document).ready(function(){
$(':button').on('click', function() {
    $(this).toggle('slow');
    $(this).show('slow');
  });
});
