define({
  "api": [{
      "type": "post",
      "url": "/account/",
      "title": "create a new account",
      "name": "create",
      "group": "Account",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "firstName",
              "description": "<p>First name of the account creator.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "lastName",
              "description": "<p>Last name of the account creator.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "email",
              "description": "<p>Email of the account.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "dietaryRestrictions",
              "description": "<p>Any dietary restrictions for the user. 'None' if there are no restrictions</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "shirtSize",
              "description": "<p>Size of the shirt that the user will receive.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "passowrd",
              "description": "<p>The password of the account.</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Account object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Account creation successful\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Account already exists\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/account.js",
      "groupTitle": "Account",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/account/"
      }]
    },
    {
      "type": "get",
      "url": "/account/:id",
      "title": "gets information from an account with mongoid ':id'",
      "name": "getAccount",
      "group": "Account",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>MongoId of an account</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Account object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Account found by user id\", \n               \"data\": {AccountObject}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Account not found\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/account.js",
      "groupTitle": "Account",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/account/:id"
      }]
    },
    {
      "type": "get",
      "url": "/account/self",
      "title": "get information about own account",
      "name": "self",
      "group": "Account",
      "version": "0.0.8",
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Account object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Account found by user email\", \n               \"data\": {AccountObject}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Account not found\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/account.js",
      "groupTitle": "Account",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/account/self"
      }]
    },
    {
      "type": "patch",
      "url": "/account/:id",
      "title": "update an account's information",
      "name": "updateOneUser",
      "group": "Account",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "firstName",
              "description": "<p>First name of the account creator.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "lastName",
              "description": "<p>Last name of the account creator.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "email",
              "description": "<p>Email of the account.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "dietaryRestrictions",
              "description": "<p>Any dietary restrictions for the user. 'None' if there are no restrictions</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "shirtSize",
              "description": "<p>Size of the shirt that the user will receive.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "passowrd",
              "description": "<p>The password of the account.</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Account object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Changed account information\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Error while updating account\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/account.js",
      "groupTitle": "Account",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/account/:id"
      }]
    },
    {
      "type": "post",
      "url": "/auth/confirm/:token",
      "title": "confirm account using the JWT in :token",
      "name": "confirmAccount",
      "group": "Authentication",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "Parameter": [{
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "JWT",
            "description": "<p>for confirming the account</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response:",
          "content": "{\"message\": \"Successfully confirmed account\", \"data\": {}}",
          "type": "json"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Invalid token for confirming account, \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/auth.js",
      "groupTitle": "Authentication",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/auth/confirm/:token"
      }]
    },
    {
      "type": "post",
      "url": "/auth/password/forgot",
      "title": "forgot password route",
      "name": "forgotPassword",
      "group": "Authentication",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "Parameter": [{
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>the email address of the account</p>"
          }]
        },
        "examples": [{
          "title": "Request-Example:",
          "content": "{ \"email\": \"myemail@mchacks.ca\" }",
          "type": "json"
        }]
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\"message\": \"Sent reset email\", \"data\": {}}",
          "type": "json"
        }]
      },
      "permission": [{
        "name": ": public"
      }],
      "filename": "routes/api/auth.js",
      "groupTitle": "Authentication",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/auth/password/forgot"
      }]
    },
    {
      "type": "post",
      "url": "/auth/login",
      "title": "login to the service",
      "name": "login",
      "group": "Authentication",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "Parameter": [{
              "group": "Parameter",
              "type": "string",
              "optional": false,
              "field": "email",
              "description": "<p>Account email</p>"
            },
            {
              "group": "Parameter",
              "type": "string",
              "optional": false,
              "field": "password",
              "description": "<p>Account password</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\"message\": \"Successfully logged in\", \"data\": {}}",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Invalid email or password\", \"data\": {}}",
          "type": "object"
        }]
      },
      "permission": [{
        "name": ": public"
      }],
      "filename": "routes/api/auth.js",
      "groupTitle": "Authentication",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/auth/login"
      }]
    },
    {
      "type": "get",
      "url": "/auth/logout",
      "title": "logout of service",
      "name": "logout",
      "group": "Authentication",
      "version": "0.0.8",
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\"message\": \"Successfully logged out\", \"data\": {}}",
          "type": "object"
        }]
      },
      "permission": [{
        "name": ": public"
      }],
      "filename": "routes/api/auth.js",
      "groupTitle": "Authentication",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/auth/logout"
      }]
    },
    {
      "type": "post",
      "url": "/auth/password/reset",
      "title": "reset password",
      "name": "resetPassword",
      "group": "Authentication",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "Parameter": [{
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>the password of the account</p>"
          }]
        },
        "examples": [{
          "title": "Request-Example:",
          "content": "{ \"password\": \"hunter2\" }",
          "type": "json"
        }]
      },
      "header": {
        "fields": {
          "Header": [{
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authentication",
            "description": "<p>the token that was provided in the reset password email</p>"
          }]
        },
        "examples": [{
          "title": "Header-Example:",
          "content": "{\n  \"X-Reset-Token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\"\n}",
          "type": "json"
        }]
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\"message\": \"Successfully reset password\", \"data\": {}}",
          "type": "json"
        }]
      },
      "permission": [{
        "name": ": must have authentication token"
      }],
      "filename": "routes/api/auth.js",
      "groupTitle": "Authentication",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/auth/password/reset"
      }]
    },
    {
      "type": "post",
      "url": "/hacker/",
      "title": "create a new hacker",
      "name": "createHacker",
      "group": "Hacker",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
              "group": "body",
              "type": "MongoID",
              "optional": false,
              "field": "accountId",
              "description": "<p>ObjectID of the respective account</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "school",
              "description": "<p>Name of the school the hacker goes to</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "gender",
              "description": "<p>Gender of the hacker</p>"
            },
            {
              "group": "body",
              "type": "Boolean",
              "optional": false,
              "field": "needsBus",
              "description": "<p>Whether the hacker requires a bus for transportation</p>"
            },
            {
              "group": "body",
              "type": "Json",
              "optional": false,
              "field": "application",
              "description": "<p>The hacker's application. Resume and jobInterest fields are required.</p>"
            }
          ]
        },
        "examples": [{
          "title": "application: ",
          "content": "{\n    \"portfolioURL\": {\n        \"resume\": \"...\"\n        \"github\": \"...\",\n        \"dropler\": \"...\",\n        \"personal\": \"...\",\n        \"linkedIn\": \"...\",\n        \"other\": \"...\"\n    },\n    \"jobInterest\": \"...\",\n    \"skills\": [id1, id2],    \n    \"comments\": \"...\",\n    \"essay\": \"...\",\n    \"team\": [id1, id2],\n}",
          "type": "Json"
        }]
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Hacker object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n    \"message\": \"Hacker creation successful\", \n    \"data\": {...}\n}",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Error while creating hacker\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/hacker.js",
      "groupTitle": "Hacker",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/hacker/"
      }]
    },
    {
      "type": "get",
      "url": "/hacker/:id",
      "title": "get a hacker's information",
      "name": "getHacker",
      "group": "Hacker",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>a hacker's unique mongoID</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>Sponsor object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Successfully retrieved hacker information\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Hacker not found\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/hacker.js",
      "groupTitle": "Hacker",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/hacker/:id"
      }]
    },
    {
      "type": "get",
      "url": "/hacker/:id/resume",
      "title": "get the resume for a hacker.",
      "name": "getHackerResume",
      "group": "Hacker",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Hacker id</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Success message</p>"
          }]
        },
        "examples": [{
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK \n{ \n    message: \"Downloaded resume\", \n    data: { \n        id: \"507f191e810c19729de860ea\", \n        resume: [Buffer] \n    } \n}",
          "type": "json"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>&quot;Resume does not exist&quot;</p>"
          }]
        },
        "examples": [{
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 \n{ \n    message: \"Resume not found\", \n    data: {} \n}",
          "type": "json"
        }]
      },
      "permission": [{
        "name": "Must be logged in, and the account id must be linked to the hacker."
      }],
      "filename": "routes/api/hacker.js",
      "groupTitle": "Hacker"
    },
    {
      "type": "patch",
      "url": "/hacker/:id",
      "title": "update a hacker's information",
      "name": "patchHacker",
      "group": "Hacker",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
              "group": "body",
              "type": "MongoID",
              "optional": true,
              "field": "accountId",
              "description": "<p>ObjectID of the respective account</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "status",
              "description": "<p>Status of the hacker's application</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "school",
              "description": "<p>Name of the school the hacker goes to</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "gender",
              "description": "<p>Gender of the hacker</p>"
            },
            {
              "group": "body",
              "type": "Boolean",
              "optional": true,
              "field": "needsBus",
              "description": "<p>Whether the hacker requires a bus for transportation</p>"
            },
            {
              "group": "body",
              "type": "Json",
              "optional": true,
              "field": "application",
              "description": "<p>The hacker's application</p>"
            }
          ]
        },
        "examples": [{
          "title": "application: ",
          "content": "{\n    \"portfolioURL\": {\n        \"resume\": \"...\"\n        \"github\": \"...\",\n        \"dropler\": \"...\",\n        \"personal\": \"...\",\n        \"linkedIn\": \"...\",\n        \"other\": \"...\"\n    },\n    \"jobInterest\": \"...\",\n    \"skills\": [id1, id2],    \n    \"comments\": \"...\",\n    \"essay\": \"...\",\n    \"team\": [id1, id2],\n}",
          "type": "Json"
        }]
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Hacker object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n    \"message\": \"Changed hacker information\", \n    \"data\": {...}\n}",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Error while updating hacker\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/hacker.js",
      "groupTitle": "Hacker",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/hacker/:id"
      }]
    },
    {
      "type": "post",
      "url": "/hacker/resume/:id",
      "title": "upload or update resume for a hacker.",
      "name": "postHackerResume",
      "group": "Hacker",
      "version": "0.0.8",
      "description": "<p><b>NOTE: This must be sent via multipart/form-data POST request</b></p>",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>Hacker id</p>"
          }],
          "body": [{
            "group": "body",
            "type": "File",
            "optional": false,
            "field": "resume",
            "description": "<p>The uploaded file.</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>Location in the bucket that the file was stored.</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "HTTP/1.1 200 OK\n{\n    message: \"Uploaded resume\", \n    data: {\n        filename: \"resumes/1535032624768-507f191e810c19729de860ea\"\n    }\n}",
          "type": "json"
        }]
      },
      "permission": [{
        "name": "Must be logged in, and the account id must be linked to the hacker."
      }],
      "filename": "routes/api/hacker.js",
      "groupTitle": "Hacker",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/hacker/resume/:id"
      }]
    },
    {
      "type": "get",
      "url": "/",
      "title": "version",
      "version": "0.0.8",
      "name": "index",
      "group": "Index",
      "permission": [{
        "name": "public"
      }],
      "filename": "routes/index.js",
      "groupTitle": "Index",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/"
      }]
    },
    {
      "type": "get",
      "url": "/search/:model",
      "title": "provide a specific query for any defined model",
      "name": "search",
      "group": "Search",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>the model to be searched</p>"
          }],
          "query": [{
            "group": "query",
            "type": "Array",
            "optional": false,
            "field": "q",
            "description": "<p>the query to be executed. For more information on how to format this, please see https://hackerapi.mchacks.ca/architecture/</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>Results</p>"
            }
          ]
        },
        "examples": [{
            "title": "Success-Response:",
            "content": "{\n               \"message\": \"Successfully executed query, returning all results\",\n               \"data\": [\n                   {...}\n               ]\n           }",
            "type": "object"
          },
          {
            "title": "Success-Response:",
            "content": "{\n               \"message\": \"No results found.\",\n               \"data\": {}\n           }",
            "type": "object"
          }
        ]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response:",
          "content": "{\"message\": \"Validation failed\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/search.js",
      "groupTitle": "Search",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/search/:model"
      }]
    },
    {
      "type": "post",
      "url": "/sponsor/",
      "title": "create a new sponsor",
      "name": "createSponsor",
      "group": "Sponsor",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
              "group": "body",
              "type": "MongoID",
              "optional": false,
              "field": "accountId",
              "description": "<p>ObjectID of the respective account.</p>"
            },
            {
              "group": "body",
              "type": "Number",
              "optional": false,
              "field": "tier",
              "description": "<p>Tier of the sponsor, from 0 to 5. 0 is lowest tier, and 5 is the custom tier.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "company",
              "description": "<p>Name of the company.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "contractURL",
              "description": "<p>URL link to the contract with the company.</p>"
            },
            {
              "group": "body",
              "type": "MongoID[]",
              "optional": false,
              "field": "nominees",
              "description": "<p>Array of accounts that the company wish to nominate as hackers.</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>Sponsor object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Sponsor creation successful\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Error while creating sponsor\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/sponsor.js",
      "groupTitle": "Sponsor",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/sponsor/"
      }]
    },
    {
      "type": "get",
      "url": "/sponsor/:id",
      "title": "get a sponsor's information",
      "name": "getSponsor",
      "group": "Sponsor",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>a sponsor's unique mongoID</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>Sponsor object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Successfully retrieved sponsor information\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Sponsor not found\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/sponsor.js",
      "groupTitle": "Sponsor",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/sponsor/:id"
      }]
    },
    {
      "type": "post",
      "url": "/team/",
      "title": "create a new team",
      "name": "createTeam",
      "group": "Team",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "name",
              "description": "<p>Name of the team.</p>"
            },
            {
              "group": "body",
              "type": "MongoID[]",
              "optional": true,
              "field": "members",
              "description": "<p>Array of members in team.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": true,
              "field": "devpostURL",
              "description": "<p>Devpost link to hack. Once the link is sent, the hack will be considered to be submitted.</p>"
            },
            {
              "group": "body",
              "type": "String",
              "optional": false,
              "field": "projectName",
              "description": "<p>Name of the team.</p>"
            }
          ]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Team object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Team creation successful\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Error while creating team\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/team.js",
      "groupTitle": "Team",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/team/"
      }]
    },
    {
      "type": "get",
      "url": "/team/:id",
      "title": "get a team's information",
      "name": "getTeam",
      "group": "Team",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "param": [{
            "group": "param",
            "type": "ObjectId",
            "optional": false,
            "field": "id",
            "description": "<p>a team's unique mongoId</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>Sponsor object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Successfully retrieved team information\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "String",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "Object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Team not found\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/team.js",
      "groupTitle": "Team",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/team/:id"
      }]
    },
    {
      "type": "post",
      "url": "/volunteer/",
      "title": "create a new volunteer",
      "name": "createVolunteer",
      "group": "Volunteer",
      "version": "0.0.8",
      "parameter": {
        "fields": {
          "body": [{
            "group": "body",
            "type": "MongoID",
            "optional": false,
            "field": "accountId",
            "description": "<p>MongoID of the account of the volunteer</p>"
          }]
        }
      },
      "success": {
        "fields": {
          "Success 200": [{
              "group": "Success 200",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Success message</p>"
            },
            {
              "group": "Success 200",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>Volunteer object</p>"
            }
          ]
        },
        "examples": [{
          "title": "Success-Response: ",
          "content": "{\n               \"message\": \"Volunteer creation successful\", \n               \"data\": {...}\n           }",
          "type": "object"
        }]
      },
      "error": {
        "fields": {
          "Error 4xx": [{
              "group": "Error 4xx",
              "type": "string",
              "optional": false,
              "field": "message",
              "description": "<p>Error message</p>"
            },
            {
              "group": "Error 4xx",
              "type": "object",
              "optional": false,
              "field": "data",
              "description": "<p>empty</p>"
            }
          ]
        },
        "examples": [{
          "title": "Error-Response: ",
          "content": "{\"message\": \"Error while creating volunteer\", \"data\": {}}",
          "type": "object"
        }]
      },
      "filename": "routes/api/volunteer.js",
      "groupTitle": "Volunteer",
      "sampleRequest": [{
        "url": "https://mchacks.ca/api/volunteer/"
      }]
    }
  ]
});