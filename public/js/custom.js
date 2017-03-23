function notif(status,message) {
  var notif = document.getElementById("notif");
  var data = '<div class="container"><div class="alert alert-'+status+'"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>'+message+'</div></div>';

  notif.innerHTML = data;
}
