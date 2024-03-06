const express = require('express');
const axios = require('axios');
const router = express.Router();

// Define SonarQube API base URL and authentication token
const sonarqubeBaseUrl = 'http://localhost:9000/admin/users';
const sonarqubeAuthToken = process.env.SONAR_TOKEN;

router.get('/', async (req, res) => {
  try {
    // Example: Fetch users from SonarQube
    const sonarqubeUsersResponse = await axios.get(`${sonarqubeBaseUrl}/users/search`, {
      headers: { Authorization: `Bearer ${sonarqubeAuthToken}` },
    });

    const sonarqubeUsers = sonarqubeUsersResponse.data.users;

    // Your application logic to process SonarQube users
    // ...

    const result = {};
    result.empId = 'EMP-123';
    result.empName = 'John';
    result.sonarqubeUsers = sonarqubeUsers;

    res.status(200).json({ success: true, data: result });
  } catch (error) {
    console.error('Error communicating with SonarQube API:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});


router.post('/users', async (req, res) => {
  const { username, password, name, email } = req.body;

  // Ensure the 'login' parameter is present in the request payload
  if (!username) {
    return res.status(400).json({ success: false, message: "The 'login' parameter is missing" });
  }

  try {
    const response = await axios.post(
      `${sonarqubeBaseUrl}/users/create`,
      {
        login: username,
        password,
        name,
        email
      } );

    res.status(201).json({ success: true, message: 'User created successfully', data: response.data });
  } catch (error) {
    console.error('Error creating SonarQube user:', error.message);

    if (error.response) {
      res.status(error.response.status).json({
        success: false,
        message: error.response.data.errors ? error.response.data.errors[0].msg : 'API request failed'
      });
    } else {
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  }
});
module.exports = router;

