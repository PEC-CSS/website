<h1 align="center">
  <b>ACM Rebrand</b>
</h1>

A social event to rebrand the pec acm css as the whole.

We ll start with the website and rebrand everything that comes in the way.

## Tech Stack

-   NextJs
-   Material UI
-   CSS3
-   SpringBoot API [Backend](https://github.com/PEC-CSS/acm-website-backend)

## Target

Target is to build a whole new brand of the computer science society.

## Local setup

1. If you are added as a contributor, clone the repository directly. Otehrwise, fork the repo and clone it.
2. Install dependencies: `yarn i`. DO NOT USE NPM.
    > You should have `docker` installed.
3. Run `docker compose up`, or if you have backend setup on your device, run the backend parallely on port `8080`
4. To start the application : `yarn dev`.

    > Periodically take pull of the latest docker image (using `docker pull pecacm/acm-website`), as the versions of backend keep on upgrading.

5. Copy the `.env.example` into `.env.local` and add the values of variables, you can leave the spreadheet envs and fill the rest.
6. Register a new user from ui and verify from email. OR you can use pre existing user in your database, if you have local backend setup.
7. Have fun with coding :)

## Contributors

<a href="https://github.com/PEC-CSS/website/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=PEC-CSS/website" />
</a>
