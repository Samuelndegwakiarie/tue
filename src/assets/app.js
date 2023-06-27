// JavaScript for the login button functionality
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      var name = document.getElementById("name").value;
      var age = document.getElementById("age").value;
      var height = document.getElementById("height").value;
      var weight = document.getElementById("weight").value;
      var country = document.getElementById("country").value;
      var address = document.getElementById("address").value;
  
      // Perform validation and data processing here
      // Example: You can display the collected details or send them to a server
  
      // Reset the form
      form.reset();
    });
  });
  document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform validation and login logic here
    
    // Redirect to main.html if login is successful
    window.location.href = "main.html";
  });
  document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const fileInput = document.querySelector('input[type="file"]');
      const extensionInput = document.querySelector('input[name="extension"]');
      const file = fileInput.files[0];
      const extension = extensionInput.value;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('extension', extension);

      try {
        const response = await axios.post('/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error.response.data);
      }
      
    });
  });

    window.addEventListener("DOMContentLoaded", function() {
      var fileInput = document.getElementById("fileInput");
      var preview = document.getElementById("preview");

      fileInput.addEventListener("change", function() {
        var file = this.files[0];
        var reader = new FileReader();

        reader.onloadend = function() {
          preview.style.backgroundImage = "url(" + reader.result + ")";
        };

        if (file) {
          reader.readAsDataURL(file);
        } else {
          preview.style.backgroundImage = null;
        }
      });
    });
    