#!/bin/sh

exit_with_missing()
{
    echo "Missing $1, please check if volumes are mounted correctly.";
    exit 1;
}

if ! [ -d /app/project ]; then
    exit_with_missing "project";
fi

cd /app/project;

if ! [ -d src/ ]; then
    exit_with_missing "src/ directory";
fi

if ! [ -d public/ ]; then
    exit_with_missing "public/ directory";
fi

if ! [ -f tsconfig.json ]; then
    exit_with_missing "tsconfig.json file";
fi

npm ci --silent;
npm install;

npm start;
