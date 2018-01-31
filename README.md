# oauth

This project is generated using [express-generator](https://expressjs.com/en/starter/generator.html) and its purpose was to learn more in depth about [Pluralsight Jon Mills' course about oauth](https://app.pluralsight.com/player?course=oauth-passport-securing-application&author=jonathan-mills&name=oauth-passport-securing-application-m4&clip=5&mode=live). Except I used Pug (Jade) and used ES6 syntax, also added linkedin and github.

Start by running `npm start` - works for Linux/Mac, add 'set' for windows in package.json (`npm run start-win`)

I have set up social login:

* [facebook](https://developers.facebook.com/apps/)
* [twitter](https://apps.twitter.com/)
* [linkedin](https://www.linkedin.com/developer/apps)
* [github](https://github.com/settings/developers)
* [google+](https://console.developers.google.com/)

For this to work I had to fiddle around with my hosts file to fool the browser, because localhost was not my machine, but my raspberry pi. 

Just for the record, I have disabled all apps on above platform, so the appkeys won't work.

The app saves the user to the database and merges all social accounts.

An example:

![Screenshot of the application](screenshot.PNG "Screenshot of the application")