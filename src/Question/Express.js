export const Questions = [
  {
    id: 1,
    Q: 'What is the difference between Authentication and Authorization?',
    A: 'Authentication verifies who the user is (e.g., login). Authorization controls what the user can access (e.g., admin vs user access).',
  },
  {
    id: 2,
    Q: 'What is JWT (JSON Web Token)?',
    A: 'A compact token used for stateless authentication. It contains a header, payload (user info), and signature to verify data integrity.',
  },
  {
    id: 3,
    Q: 'How is JWT more secure than traditional sessions?',
    A: 'JWTs are stored on the client-side and signed with a secret. Unlike sessions, they don’t require server-side storage, making them scalable and tamper-evident.',
  },
  {
    id: 4,
    Q: 'Whats the difference between Cookies and LocalStorage?',
    A: 'Cookies: Automatically sent with each HTTP request, smaller in size, can be HttpOnly. LocalStorage: Larger, persists longer, not sent with requests (manual access only).',
  },
];
