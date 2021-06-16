const btn = document.querySelector('#copy-result');

if (btn) {
  btn.addEventListener('click', () => {
    const input = document.querySelector('.resultURL');
    input.select();
    if (document.execCommand('copy')) {
      document.execCommand('copy');
      const div = document.querySelector('.result')
      if (document.querySelector('.copyNote')) {
        return
      } else {
        const span = document.createElement('span')
        div.appendChild(span)
        span.classList = "copyNote"
        span.innerHTML = "copy successful"
      }
    }
  })
}