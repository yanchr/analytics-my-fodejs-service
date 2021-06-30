npm install express wird vom Migros netzwerk blockiert. 

# Errors
ERROR: (gcloud.app.deploy) Error Response: [13] An internal error occurred while creating a Google Cloud Storage bucket.

# solving attemps
- gcloud config set app/use_deprecated_preparation True
- skip_files: - ^node_modules/.*$
- runtime: nodejs
- env: flex
- check if you are the owner (in gcp under IAM&Admin->IAM)
- 


