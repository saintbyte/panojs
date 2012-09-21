function showdarkbox()
{
closedarkbox()
var dbox = $('<div id="darkbox" class="darkbox opacity50"></div>');
dbox.css({'height':$(document).height()+'px'});
var lg = $('<div class="darkbox_i"></div>');
lg.css({'height':$(document).height()+'px'});
dbox.append(lg); 
$(document.body).append(dbox);

}
function closedarkbox()
{
if ($('#darkbox')) {         $('#darkbox').remove(); }
}