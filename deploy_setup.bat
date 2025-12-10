@echo off
echo Initializing Git repository...
git init

echo Configuring remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/04606-thakoon/I-am-professional.

echo Switching to main branch...
git branch -M main

echo Staging files...
git add .

echo Committing files...
git commit -m "Initial project setup for GitHub Pages (Corrected URL)"

echo Pushing to GitHub...
git push -u origin main

echo Deploying to GitHub Pages...
call npm run deploy

echo Done!
echo Done!
