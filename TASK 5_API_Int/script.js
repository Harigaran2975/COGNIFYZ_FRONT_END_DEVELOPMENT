document.getElementById('loadUsers').addEventListener('click', () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const userList = document.getElementById('userList');
      userList.innerHTML = ''; // Clear previous data
      users.forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        userDiv.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        `;
        userList.appendChild(userDiv);
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
});
