// const axios = require('axios');

// const sonarqubeUrl = 'http://localhost:9000/tutorials?id=Node_demo_sonhrqube';
// const apiToken = 'sqp_f8adee6fd9dcbe307c46a8b4bb73ec8ad50f8197';

// const axiosInstance = axios.create({
//   baseURL: `${sonarqubeUrl}/api`,
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${apiToken}`,
//   },
// });

// // // Example: Get list of projects
// // async function getProjects() {
// //   try {
// //     const response = await axiosInstance.get('/projects/search');
// //     console.log(response.data);
// //   } catch (error) {
// //     console.error('Error fetching projects:', error.message);
// //   }
// // }

// // // Example: Get list of users
// // async function getUsers() {
// //   try {
// //     const response = await axiosInstance.get('/users/search');
// //     console.log(response.data);
// //   } catch (error) {
// //     console.error('Error fetching users:', error.message);
// //   }
// // }

// // Example: Create a user (requires admin privileges)
// async function createUser(username, password, name) {
//   try {
//     const response = await axiosInstance.post('/users/create', {
//       login: username,
//       password: password,
//       name: name,
//     });
//     console.log(response.data);
//   } catch (error) {
//     console.error('Error creating user:', error.message);
//   }
// }

// createUser('newuser', 'password123', 'New User');


const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'http://localhost:9000/tutorials?id=Node_demo_sonhrqube',
    token: 'sqp_f8adee6fd9dcbe307c46a8b4bb73ec8ad50f8197',
    options: {
      'sonar.projectName': 'Node_demo_sonhrqube',
      'sonar.projectDescription': 'Description for "My App" project...',
      'sonar.sources': 'src',
      'sonar.tests': 'test',
    },
  },
  () => process.exit(),
);
