document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded.');
  
  /* Get URL of active tab. */
  $(document).ready( () => {
    const queryInfo = {
      active: true,
      currentWindow: true
    }

    chrome.tabs.query( queryInfo, tabs => {
      const tab = tabs[0];
      const url = tab.url;
      /* DOM operations */
      document.getElementById('urlInput').value = url;
    });
  });

  /* When ENTER key down, hidden input and show code. */
  $(document).on('keydown', e => {
    const txt = $('textarea#codesInput').val().trim();
    if(e.which === 13 && txt) {
      $('pre#pre').removeClass('hidden');
      $('code#code').text(txt);
      $('textarea#codesInput').addClass('hidden');
    }    
  });

  /* When code dbclicked, hidden code and show input. */
  $('pre#pre').on('dblclick', e => {
    $('pre#pre').addClass('hidden');
    $('textarea#codesInput').removeClass('hidden');
  });

  /* When button clicked, SUBMIT/POST data to server. */
  $('#submit').on('click', function() {
    const paras = {
      'url': $('#urlInput').val(),
      'comments': $('#commentsInput').val(),
      'codes': $('textarea#codesInput').val()
    }
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:8000/',
      data: paras,
      success: function(d) {
        console.log(JSON.stringify(d));
      },
      error: function(e) {
        alert(JSON.stringify(e));
      }
    });
  });
}, false);
