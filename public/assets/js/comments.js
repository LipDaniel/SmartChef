function postComment(){
    var comments = $('#comments').val();
    var username = $('#username').val();
    var userid = $('#userid').val();
    var postid = $('#idpost').val();
    var currentdate = getCurrentDate();
    if(comments == ''){
        $('#alert').append("* Vui lòng nhập bình luận");
        $('#alert').addClass('text-danger fw-light fst-italic');
        return;
    }else{
        if(document.getElementById('replyAddress').checked){
            var cmt_id = $('#replyAddress').val();

            $.ajax({  
                url:'/post/' + idpost+ '/comments' ,  
                method:'post',  
                dataType:'json',  
                data:{
                    'comments': comments,
                    'userid': userid,
                    'postid' : postid,
                    'created_at': currentdate,
                    'cmt_id': cmt_id
                },  
                success:function(response){ 
                },  
                error:function(response){  
                }  
            });  
            // removeReply();
            // $('#comments').val("")
            location.reload(); 
        }else{
            $.ajax({  
                url:'/post/' + idpost+ '/comments' ,  
                method:'post',  
                dataType:'json',  
                data:{
                    'comments': comments,
                    'userid': userid,
                    'postid' : postid,
                    'created_at': currentdate,
                    'cmt_id' : 0
                },  
                success:function(response){  
                },  
                error:function(response){  
                }  
            });  
            // $('#nocomment').remove();
            // createCommentNode(username, comments, currentdate);
            // $('#comments').val("")
            location.reload();
        }

    } 
}
$('.replyCmt').click(function(){
    const list = document.getElementById("reply-group");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    }
    var comment_id = $(this).attr('data-title');
    var name = $(this).attr('data-name');
    // console.log(comment_id, name);

    const p = document.createElement('p');
    p.className = 'text-muted fs-6 fst-italic mb-0';
    p.innerHTML = 'Trả lời ' + name + ' ';
    
    const i = document.createElement('i');
    i.className = 'bi bi-reply';
    
    const button = document.createElement('button');
    button.className = 'btn btn-close btn-sm';
    button.style = "height: 0em";
    
    p.append(i, button);
    $('#reply-group').append(p);
    
    $('#replyAddress').val(comment_id)
    $('#replyAddress').prop('checked', true);
    $(button).click(function() {
        removeReply();
      });
});

function removeReply(){
    const list = document.getElementById("reply-group");
    while (list.hasChildNodes()) {
      list.removeChild(list.firstChild);
    } 
    $('#replyAddress').prop('checked', false);
}

// function createReplyNode(username, comments, createdat, cmt_id){
//     $('#horiline-'+cmt_id).remove();

//     var row = document.createElement('div');
//     row.className = 'row';

//     var md1 = document.createElement('div');
//     md1.className = 'col-md-1';

//     var md11 = document.createElement('div');
//     md11.className = 'col-md-11 border-top';

//     var card = document.createElement('div');
//     card.className = 'card-body pb-0';

//     var flex = document.createElement('div');
//     flex.className = 'd-flex flex-start align-items-center';

//     var img = document.createElement('img');
//     img.className = 'rounded-circle shadow-1-strong me-3'
//     img.src = "https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-hai-huoc-5.jpg";
//     img.width = "40";
//     img.height = "40";

//     const groupProfile = document.createElement('div');
//     const name = document.createElement('h6');
//     name.className = "fw-bold text-primary mb-1"
//     name.innerHTML = username;

//     const created = document.createElement('p');
//     created.className = "text-muted small mb-0";
//     created.innerHTML = createdat;

//     const mainMessage = document.createElement('p');
//     mainMessage.className = "mt-2 mb-0";
//     mainMessage.innerHTML = comments;

//     const hr = document.createElement('hr');
//     hr.className = 'mb-0'
//     hr.id = 'horiline-'+cmt_id;

//     groupProfile.append(name, created)
//     flex.append(img, groupProfile);
//     card.append(flex, mainMessage);
//     md11.append(card);
//     row.append(md1, md11);
//     $("#card-"+cmt_id).append(row, hr)
// }
// function createCommentNode(username, comments, createdat){
    

//     const card = document.createElement('div');
//     card.className = 'card-body pb-0';

//     const profile = document.createElement('div');
//     profile.className = 'd-flex flex-start align-items-center';

//     const img = document.createElement('img');
//     img.className = 'rounded-circle shadow-1-strong me-3'
//     img.src = "https://anhcuoiviet.vn/wp-content/uploads/2022/11/avatar-hai-huoc-5.jpg";
//     img.width = "40";
//     img.height = "40";

//     const groupProfile = document.createElement('div');
    
//     const name = document.createElement('h6');
//     name.className = "fw-bold text-primary mb-1"
//     name.innerHTML = username;

//     const created = document.createElement('p');
//     created.className = "text-muted small mb-0";
//     created.innerHTML = createdat

//     const row = document.createElement('div');
//     row.className = 'row';
//     const md9 = document.createElement('div');
//     md9.className = 'col-md-9';

//     const mainMessage = document.createElement('p');
//     mainMessage.className = "mt-2";
//     mainMessage.innerHTML = comments;

//     const groupEffect = document.createElement('div');
//     groupEffect.className = "col-md-3 small d-flex justify-content-end"

//     const likeGroup = document.createElement('a');
//     likeGroup.className = 'd-flex align-items-center me-3'
    
//     const likeIcon = document.createElement('i');
//     likeIcon.className = 'bi bi-hand-thumbs-up';

//     const likeText = document.createElement('p');
//     likeText.className = 'mb-0'
//     likeText.innerHTML = ' Thích'

//     const replyGroup = document.createElement('a');
//     replyGroup.className = 'd-flex align-items-center me-3'

//     const replyIcon = document.createElement('i');
//     replyIcon.className = 'bi bi-reply';

//     const replyText = document.createElement('p');
//     replyText.className = 'mb-0'
//     replyText.innerHTML = ' Trả lời'

//     const hr = document.createElement('hr');
//     hr.className = 'mb-0'

//     md9.append(mainMessage);
//     row.append(md9, groupEffect);
//     likeGroup.append(likeIcon, likeText);
//     replyGroup.append(replyIcon, replyText);
//     groupEffect.append(likeGroup, replyGroup);
//     groupProfile.append(name, created);
//     profile.append(img, groupProfile);
//     card.append(profile, row, hr);
//     $('#listcomment').append(card);
// }

function getCurrentDate(){
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const myDate = dd + '/' + mm + '/' + yyyy;
    return myDate;
}