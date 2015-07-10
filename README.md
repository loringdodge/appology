UpNest Mobile App
==================================
Welcome to the Upnest Mobile App. Hopefully this will provide a complete overview of how to
get started, how to use the workflow, and how to make good contributions.

How to get started?
-------------

##1. Installing npm, bower, and cordova/ionic
Once the repository has been forked and cloned, the first thing is to
install all dependencies using npm and bower.

Note: If you already have all of these installed, go ahead and skip to step #2.

First, install npm (node package manager).

```
$ sudo npm install npm -g
```

Next, install bower via npm.

```
$ npm install -g bower
```

Lasty, install cordova and ionic.
```
$ npm install -g cordova ionic
```

##2. Install all dependencies
We have npm, bower, and cordova/ionic but the app has several dependencies
that need to be installed in order for the app to function.

From the root of the folder,

```
$ cd mobile
$ npm install
// get stuff
$ gulp install
// get stuff via bower
```

##3. Run the app
All the dependencies should now be installed, and it's time to bring it alive on screen.
There are three ways to test the app as you're working 1) in the browser 2) in the emulator 3) on a mobile device.
We'll only be covering the first two for now.

To get the app working in the browser, type the following into the command line
(a new tab will pop up in your default browser):

```
$ ionic serve
```

Getting the app to work in the emulator is more tedious and is dependent on
which operating system you're using.

#Mac (Recommended)

If you're using a mac, emulating the ios app is incredibly easy, but in order to get android emulator
you'll have to install the Java Runtime Environment and Android SDK.

#Windows

If you're using a windows OS, the process if similar for installing the Java Runtime Envinronment
and Android SDK, but the process is much more tedious for emulating the ios app.
The reason is that ios apps can only be emulated while a Mac OS such as Yosemite (the most current version).
This means you'll likely need to get a program called Parallels, which allows users to switch
between Windows and Mac without rebooting. It currently costs $79.99 for a license.

Once you have everything running, you get back into the command line and run the following to emulate the app

```
// Launch ios
$ ionic emulate ios
// Launch android
$ ionic emulate android
// Same as $ ionic emulate ios but using gulp
$ gulp ion
```

What's a good workflow?
-------------

Ionic offers several utilities out-of-the-box to improve the development process.

Ideally, you will end up having 3 windows open:


[gulp-watch](./screenshots/console-gulp-watch.png)

[ionic-serve](./screenshots/console-ionic-serve.png)

[node-server](./screenshots/console-node-server.png)

