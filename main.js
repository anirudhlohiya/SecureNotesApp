const API_URL = 'http://localhost:5000';

// Register
document.getElementById('registerForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const displayName = document.getElementById('displayName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ displayName, email, password })
        });
        const data = await response.json();
        alert(data.message || 'Registration successful!');
        document.getElementById('registerForm').reset(); // Clear form
    } catch (error) {
        alert('Error registering: ' + error.message);
    }
});

// Login
document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });
        const data = await response.json();
        if (data.token) {
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            document.getElementById('notesSection').style.display = 'block';
            document.getElementById('loginForm').reset(); // Clear form
            loadNotes();
        } else {
            alert(data.message || 'Login failed');
        }
    } catch (error) {
        alert('Error logging in: ' + error.message);
    }
});

// Create Note
document.getElementById('noteForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API_URL}/notes`, {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ title, content })
        });
        const data = await response.json();
        alert(data.message || 'Note created!');
        document.getElementById('noteForm').reset(); // Clear form
        loadNotes();
    } catch (error) {
        alert('Error creating note: ' + error.message);
    }
});

// Load Notes
async function loadNotes() {
    const token = localStorage.getItem('token');
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';

    try {
        const response = await fetch(`${API_URL}/notes`, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const notes = await response.json();
        notes.forEach(note => {
            const li = document.createElement('li');
            li.textContent = `${note.title}: ${note.content}`;
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.onclick = () => deleteNote(note._id);
            li.appendChild(deleteBtn);
            notesList.appendChild(li);
        });
    } catch (error) {
        alert('Error loading notes: ' + error.message);
    }
}

// Delete Note
async function deleteNote(id) {
    const token = localStorage.getItem('token');

    try {
        const response = await fetch(`${API_URL}/notes/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        alert(data.message || 'Note deleted!');
        loadNotes();
    } catch (error) {
        alert('Error deleting note: ' + error.message);
    }
}