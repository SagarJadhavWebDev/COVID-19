if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
  .then(function(registration) {
   
    alert('Registration successful, scope is:', registration.scope);
  })
  .catch(function(error) {
    alert(error);
  });
}
