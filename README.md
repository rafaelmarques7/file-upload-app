# File upload app

This is a sample project to experiment with file uploading using React and S3.

---

## S3 setup and CORS

* This project requires access to an S3 bucket, so please create it 

* For the file upload to work (and assuming you are using `localhost` for local development), this will require the following CORS policy on the S3 bucket:
    ```json
    [
        {
            "AllowedHeaders": [
                "*"
            ],
            "AllowedMethods": [
                "GET",
                "HEAD",
                "PUT",
                "POST"
            ],
            "AllowedOrigins": [
                "*"
            ],
            "ExposeHeaders": [],
            "MaxAgeSeconds": 3000
        }
    ]
    ```

---

## AWS Authentication

* This project uses a very naive way to authenticate with S3.
* It requires an ACCESS_KEY AND SECRET_KEY, to an AWS IAM user with privileges to write to the respective S3 bucket.
* These values should be stored in a `src/secrets.js` file. 
  * this file is `.gitignore`'d.
  * in any case, **this is a somewhat unsafe** way of doing this, so **do it at your own risk**. 
  
