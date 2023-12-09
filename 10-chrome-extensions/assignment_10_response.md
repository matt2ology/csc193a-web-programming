# Assignment 10 Local Storage and Cookies Discussion Response

```txt
In your Senior Project or any other website you created
(could be something from this semester), show an application of how to use
local storage or cookies.  For example, saving a color scheme, or other basic
cookies application.  Show a few lines of code which would make this happen.
Share here no more than 1-2 paragraphs.
```

In our senior project we have the following:

The function starts by retrieving a token from the browser's local storage.
This token is assumed to be an authentication token used to authorize the
request to change the user's role. The function also creates a configuration
object named config with an HTTP header Authorization set to include the token.
This configuration object is likely intended to be used for making an
authenticated API request.

```javascript
/**
 * Changes the role of a user in the database to the new role specified.
 *
 * @param {string} userId The id of the user to change the role of.
 * @param {string} newRole The new role to assign to the user.
 * @returns {void}
 * @throws {Error} if the user is not an admin.
 * @throws {Error} if the user does not exist.
 * @throws {Error} if the new role is not valid.
 *
 * @example
 * // Changes the role of user with id 1234567890 to admin.
 * changeRole('1234567890', 'admin');
 *
 * @example
 * // Changes the role of user with id 1234567890 to user.
 * changeRole('1234567890', 'user');
 */
function changeRole(userId, newRole) {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
```
