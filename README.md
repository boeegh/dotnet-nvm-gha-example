# Example: Build .NET and node using dotnet-nvm
Simple .NET application with Tailwind built using GitHub Actions:

```yaml
name: ci

on: [push]

jobs:
  container:
    runs-on: ubuntu-latest
    container:
      image: boeegh/dotnet-nvm:latest
      volumes:
      - ${{ github.workspace }}:/app
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3      
      - name: Build with npm and dotnet
        run: |
          nvm use 18
          npm install
          npm run build
          dotnet publish -c Release -o /publish
      - name: Archive production artifacts
        uses: actions/upload-artifact@v3
        with:
          name: app
          path: |
            /publish
            !/publish/**/package.json
            !/publish/**/package-lock.json
```
The application is based on a the `ASP.NET Core Web App` template with Tailwind installed using npm. The GitHub Action uses the `boeegh/dotnet-nvm` docker image to:

* Checks out repository from GitHub
* Sets NVM to use node version 18
* Installs node packages using npm
* Runs npm build
* Runs dotnet publish
* Uploads the published website artifact to GitHub

