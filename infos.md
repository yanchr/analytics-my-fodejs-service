npm install express wird vom Migros netzwerk blockiert. 

# Errors
ERROR: (gcloud.app.deploy) Error Response: [13] An internal error occurred while creating a Google Cloud Storage bucket.

# solving attemps
- gcloud config set app/use_deprecated_preparation True
- skip_files: - ^node_modules/.*$
- runtime: nodejs
- env: flex
- check if you are the owner (in gcp under IAM&Admin->IAM)
- gcloud config set app/stop_previous_version true
- # creating a bucket 
    https://cloud.google.com/sdk/gcloud/reference/app/deploy
    - Cloud storage -> create bucket
    - location type: Multi-region
    - location: eu
    - default storage class: Standart
    - enforce public acces prevention on this bucket (yes)
    - Access control: Uniform
    To see your bucket in the console type gsutil ls
    > :warning: **If you are using the mgb network**: You have to connect to the vm instance first ortherwise you'll get this error:
    AccessDeniedException: 403 Request is prohibited by organization's policy. vpcServiceControlsUniqueIdentifier: vQeeOpy3XGe3WLNxUJ1CCZJqkPNp_5Yr9FB-1jgbyWTyxaJ_wTcP0A

