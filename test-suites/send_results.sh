#!/bin/bash

ALLURE_RESULTS_DIRECTORY='allure-results'
ALLURE_SERVER='http://allure:5050'
PROJECT_ID=$PROJECT_ID

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
FILES_TO_SEND=$(ls -dp $DIR/$ALLURE_RESULTS_DIRECTORY/* | grep -v /$)
if [ -z "$FILES_TO_SEND" ]; then
  exit 1
fi

FILES=''
for FILE in $FILES_TO_SEND; do
  FILES+="-F files[]=@$FILE "
done

set -o xtrace
echo "------------------CREATE-PROJECT------------------"
curl -X POST "$ALLURE_SERVER/allure-docker-service/projects" -H 'Content-Type: application/json' -d "{\"id\": \"$PROJECT_ID\"}"

echo "------------------SEND-RESULTS------------------"
curl -X POST "$ALLURE_SERVER/allure-docker-service/send-results?project_id=$PROJECT_ID" -H 'Content-Type: multipart/form-data' $FILES -ik

echo "------------------GENERATE-REPORT------------------"
curl -X GET "$ALLURE_SERVER/allure-docker-service/generate-report?project_id=$PROJECT_ID"
