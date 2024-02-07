db.createUser(
        {
            user: "sakshi",
            pwd: "sakshi",
            roles: [
                {
                    role: "readWrite",
                    db: "dap"
                }
            ]
        }
);