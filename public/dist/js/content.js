$(function () {
    $("#example1").DataTable();
    $('#example2').DataTable({
      "paging": true,
      "lengthChange": false,
      "searching": false,
      "ordering": true,
      "info": true,
      "autoWidth": false,
    //   "language": {
    //     "zeroRecords": false
    // });
  })
});

$('#sea').on( 'keyup', function () {
  table.search( this.value ).draw();
} );