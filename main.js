// Добавляем проверку логина
const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');
const successPopup = document.getElementById('successPopup');

// Правильные учетные данные
const validUsername = 'admin';
const validPassword = '12345';

loginForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === validUsername && password === validPassword) {
    // Успешный вход
    successPopup.style.opacity = '1'; // Показываем всплывающее окно
    setTimeout(() => {
      successPopup.style.display = 'none'; // Скрываем через 3 секунды
      window.location.href = 'main.html'; // Перенаправляем на главную страницу
    }, 3000);
  } else {
    // Неверные данные
    errorMessage.classList.remove('hidden');
  }
});
  function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const messageText = messageInput.value.trim();

    // Если введено сообщение
    if (messageText) {
        const messageBox = document.getElementById('message-box');
        
        // Создаем новое сообщение
        const newMessage = document.createElement('div');
        newMessage.classList.add('message', 'sent'); // добавляем класс 'sent' для отправленного сообщения
        
        newMessage.innerHTML = `
            <img src="радя.jpg" alt="Avatar" class="avatar">
            <span class="message-text">${messageText}</span>
        `;
        
        // Добавляем сообщение в чат
        messageBox.appendChild(newMessage);
        
        // Прокручиваем чат вниз
        messageBox.scrollTop = messageBox.scrollHeight;

        // Очищаем поле ввода
        messageInput.value = '';
    }
}
function handleCredentialResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);

    // Раскодируем токен JWT для отображения информации о пользователе
    const userInfo = parseJwt(response.credential);
    console.log(userInfo);

    // Отобразим имя и email
    const userInfoDisplay = document.getElementById('user-info');
    userInfoDisplay.innerHTML = `
        <p><strong>Имя:</strong> ${userInfo.name}</p>
        <p><strong>Email:</strong> ${userInfo.email}</p>
        <img src="${userInfo.picture}" alt="Avatar" style="border-radius: 50%; width: 100px; height: 100px;">
    `;
}

// Вспомогательная функция для декодирования JWT
function parseJwt(token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}
    