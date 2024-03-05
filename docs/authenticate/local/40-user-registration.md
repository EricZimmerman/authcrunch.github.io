# User Registration

The following [`Caddyfile`](https://github.com/authcrunch/authcrunch.github.io/blob/main/assets/conf/local/registration/Caddyfile)
contains configuration with email-based registration.

The newly registered users will appear in the `registrations.json` file.
An administrator must manually move entries from `registrations.json`
to `users.json` file.

The parameters are:

* `dropbox`: The file path pointing to registration database.
* `code`: The registration code. A user must know what that code is to
  successfully submit a registration request.
* `require accept terms`: A user must accept terms and conditions, as well
  as privacy policy to proceed
* `disabled on`: disables user registration
* `title`: changes the title of the registration page
* `require domain mx`: forces the check of domain MX record
* `admin email`: defines the email recipients after a registrant clicked
  email confirmation link and provided valid code

This screenshot is the registration screen with default options:

![](./images/portal_registration_simple.png)

The following is the registration screen with mandatory registration
code and the acceptable of terms and conditions:

![](./images/portal_registration_terms_code.png)
