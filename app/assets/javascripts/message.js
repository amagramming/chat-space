$(function(){
  function buildHTML(message){
    console.log(message)
    if ( message.image ) {
      let html =
        `<div class="Message">
          <div class="Message-info">
            <div class="Message-info__user">
              ${message.user_name}
            </div>
            <div class="Message-info__date">
              ${message.created_at}
            </div>
          </div>
          <div class="Message-text">
            <p class="Message__content">
              ${message.content}
            </p>
            <img class="Message__image" src="${message.image}">
          </div>
        </div>`
      return html;
    } else {
      let html =
      `<div class="Message">
        <div class="Message-info">
          <div class="Message-info__user">
            ${message.user_name}
          </div>
          <div class="Message-info__date">
            ${message.created_at}
          </div>
        </div>
        <div class="Message-text">
          <p class="Message__content">
            ${message.content}
          </p>
        </div>
      </div>`
      return html;
    };
  }

  $('.Form').on('submit', function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(data){
      let html = buildHTML(data);
      $('.Message-list').append(html);      
      $('form')[0].reset();
      $('.Message-list').animate({ scrollTop: $('.Message-list')[0].scrollHeight});
      $('.submit-btn').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
    });
  });
});