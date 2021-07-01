npm install express gets blocked by the Migros network.
Go to your own network and install it there.  

# Errors while deploying app (`gcloud app deploy`)
- ERROR 1: ERROR: (gcloud.app.deploy) Error Response: [13] An internal error occurred while creating a Google Cloud Storage bucket.
- ERROR 2: ERROR: (gcloud.app.deploy) NOT_FOUND: Unable to retrieve P4SA: [service-540357255650@gcp-gae-service.iam.gserviceaccount.com] from GAIA. Could be GAIA propagation delay or request  from deleted apps.

## Error1: solution
1. Create a bucket in gcp your Project
2. check if your buckets exists with `gsutil ls` > :warning: **If you get an AccessDeniedException Error**: Maby you have to try this on an ubuntu console - worked for me :)
3. `gcloud app deploy --bucket=gs://[your-bucket-name]`

## Error1: solving attemps
- gcloud config set app/use_deprecated_preparation True
- gcloud config set app/stop_previous_version true
- in app.yaml:
    - skip_files: - ^node_modules/.*$
    - runtime: nodejs
    - env: flex
- check if you are the owner (in gcp under IAM&Admin->IAM)



### creating a bucket in gui
    - https://cloud.google.com/sdk/gcloud/reference/app/deploy
    - Cloud storage -> create bucket
    - location type: Multi-region
    - location: eu
    - default storage class: Standart
    - enforce public acces prevention on this bucket (yes)
    - Access control: Uniform

### creating a bucket with gsutil
  `gsutil mb -p PROJECT_ID -c STORAGE_CLASS -l BUCKET_LOCATION -b on gs://BUCKET_NAME`

    To see your bucket in the console type `gsutil ls`
    > :warning: **If you are using the mgb network**: You have to connect to the vm instance first ortherwise you'll get this error:
    AccessDeniedException: 403 Request is prohibited by organization's policy. vpcServiceControlsUniqueIdentifier: vQeeOpy3XGe3WLNxUJ1CCZJqkPNp_5Yr9FB-1jgbyWTyxaJ_wTcP0A

#### changed proxisettings for git in vm from gcp becaus i got an Failed to connect to github.com port 443: Connection timed out
if your password or username have an @ change the @ -> %40
`git config --global http.proxy http[s]://userName(encoded):password(encoded)@proxyaddress:port` <br>
`git config --global http.proxy http[s]://[username]:[password]@127.0.0.1:8087` <br>
`git config --global http.proxy 127.0.0.1:1080` <br>
Unset Proxy: `git config --global --unset core.gitproxy` <br>