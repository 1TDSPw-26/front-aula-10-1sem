// Fetch tratativas.css from professor's branch (main)
fetch('https://raw.githubusercontent.com/1TDSPw-26/front-aula-07-1sem/main/css/tratativas.css')
  .then(response => response.text())
  .then(css => {
    console.log('CSS content:', css);
    // Optionally, apply the CSS to the page
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  })
  .catch(error => console.error('Error fetching CSS:', error));

// Fetch login.html from professor's branch (main)
fetch('https://raw.githubusercontent.com/1TDSPw-26/front-aula-07-1sem/main/login.html')
  .then(response => response.text())
  .then(html => {
    console.log('HTML content:', html);
    // Optionally, display the HTML in a div or something
    // document.getElementById('content').innerHTML = html;
  })
  .catch(error => console.error('Error fetching HTML:', error));