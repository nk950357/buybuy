var feedback = function(res) {
    if (res.success === true) {
        var get_link = res.data.link.replace(/^http:\/\//i, 'https://');
        //document.querySelector('.status').classList.add('bg-success');
        document.getElementById('photo').value = get_link;
        document.getElementById('pic-modal').innerHTML = "";
        
        var tempmodal =
        "<div class=" + '"' + "modal fade " + "myModal" + '"' + "tabindex=" + '"' + "-1" + '"' + "role=" +
        '"' + "dialog" + '"' + "aria-labelledby=" + '"' + "myModal" + '"' + "aria-hidden=" + '"' + "true" +
        '"' + "id=" + '"' +
        "myModal" + '"' + ">" + "<div class=" + '"modal-dialog modal-dialog-centered "' + ">" +
        "<div class=" +
        '"modal-content"' + ">" + "<div class=" + '"modal-header"' + ">" + "<h3 class=" +
        '"modal-title"' + ">" + "照片預覽</h3>" + "</div>" + "<div class=" + '"modal-body"' + '><img class="img" style = "width:100%; max-width:500px " alt="Imgur-Upload" src=\"' + get_link + '\"/>'+
         "</div>" + '<div class="modal-footer">' + '<button type="button" class="btn btn-primary" data-dismiss="modal">確定</button>' + 
         '<button type="button" class="btn btn-secondary" data-dismiss="modal" onclick = "clearimgur()">取消</button>' + 
       '</div>' +"</div></div>";
         document.getElementById('pic-modal').innerHTML = tempmodal;
         $('#myModal').modal('show');
    }
};

function clearimgur() {
    document.getElementById('photo').value = "";
}
new Imgur({
    clientid: '4409588f10776f7', //You can change this ClientID
    callback: feedback
});