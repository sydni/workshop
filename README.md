# Getting started with 

![](https://cdn.rawgit.com/ahsanazim/workshop/master/img/react-native-logo.svg) 

Today we'll be introducing you to React Native, taking you from building a basic-app to whipping up one that does all sorts of amazing things. We'll also leave you with a tonne of goodies and things to keep in mind if you plan on pursuing React Native development in the future. 

Basically, this'll be your one-stop-shop to becoming an ace React Native developer ;) 

Since this document is slightly long, here's a short run down on what you'll find inside: 

1. [Setting up the environment & basic init](#setting-up-the-environment-basic-init)
2. [Building a few React Native Apps](#lets-build-a-few-react-native-apps)
   - easy peasy lemon squeezy
   - not that easy
   - kinda hard 
3. [For future reference](#for-future-reference)
	- workflow
	- debugging

4. [Add-Ons to your dev environment](#optional-add-ons-to-your-react-native-dev-environment)
   - upgrading Atom
   - need a starter kit?
4. [Final note on why you should use React native](#two-final-points-on-why-react-native-is-totally-worth-your-time)
5. [Recommended Readings](#recommended-readings)


Let's get started!

## :boom: Setting up the environment & basic init: 

### overall requirements: 

- Homebrew (needed to install `Watchman` below)
- Xcode 
- node.js
- React Native command line tools
- Watchman 

### installation: 

assuming you have `node`, `Xcode` (available from the App Store in case you don't have it), and `homebrew` (type `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` into the terminal to install it if you don't) installed, do the following:  

1. `brew install watchman` (facebook file watcher, used for rebuilding upon changes - think hot reloading)

3. `npm install -g react-native-cli` (performs a global install of the react native command line interface)

4. `react-native init GoingNative` (this will take a minute; it creates a starter project called "GoingNative" in a directory named identically)

Your directory tree should now look as follows (note that the - rather irrelevant -`img` directory is deliberately not shown in the below image): 

![]()

### run!

Now `cd` in to the `GoingNative` directory and type `react-native run-ios` in to the terminal to see a starter app/window run in an iOS simulator! Btw, it'll take a few seconds to open up for the first time - the simulator will stay on 'Loading from localhost:' for a bit.

You'll also now see another terminal window titled `React Packager` open. It'll instruct you to keep it open while you're developing the app - please follow said advice!

## :boom: let's build a few React Native apps:

### basic

How about we begin with an insanely simple app - something so straightforward you won't even have to break a sweat. Not only will you not have to write a single line of code, the app is even sitting right there, in front of you! 

Yup, if you want a truly simple app, then look no further than what you saw upon typing `react-native run-ios` into the terminal for the first time. 

Primitive though the app may be, it does present a nice oppurtunity to have a look at some basic React Native code.

Open up the app's code in Atom (type `Atom .` in to the terminal while in the `GoingNative` directory).  

Your first impression of the code will probably be one of relief - it looks remarkably similar to the usual React we've been used to. As you now know, that's intentional, and pretty much the whole point of React Native! 

Indeed, it's all there: the familiar `import` statements and `ES6 classes`, as well as the `JSX` we've been dealing with for quite a while. You have, though, probably noticed something that's familiar, but seemingly in the wrong place (CSS in the same file as javascript????? oh the horror :astonished: ).

Fear not, we'll get to that in a bit. First, though, let's have a look at what exactly the code is doing overall. At a high level, all that's happening in this file is that we're creating a new component called `GoingNative`, and *registering* it with our app (using `AppRegistry` at the bottom of our file). However large your app will be, you'll have only one `AppRegistry.registerComponent( ... )` command its function is to designate the root of your app. 
 

## :boom: For future reference: 

### a note on React Native workflow 

While most conventional iOS apps are developed exclusively through Xcode, and tested there as well, you'll probably want to take a different approach with react-native - unless, that is, you're in the truly infinitesimal minority that enjoys coding javascript in Xcode.

As we've been programming using `Atom` for a while, it's best we stick with that for actually typing our application **code**. In the future you may want to take a look at Nuclide (https://nuclide.io/docs/platforms/react-native/), which is essentially " *Atom enhanced by Facebook for React development* ". We also have a bit on it in the optional add-ons section.

To actually **run** your app, you'll do what you did previously - type the `react-native run-ios`from your project root directory. You won't have to do this multiple times - just keep the simulator running in the background when you're developing your app's core code. 

Similar to the hot-reloading* we've been using in developing our web apps, react native also allows hot-reloading - a *huge* advantage over programming apps in swift/Obj-C or java. To enable it, just go to your simulator, **press Cmd-D, and click '*Enable Hot Reloading*'**. Take note that although hot reloading will generally work stupendously well, there are a few subtleties you may want to keep in mind (https://facebook.github.io/react-native/docs/debugging.html)

That, in short, is a possible -- and decent, in our opinion :) --  react-native workflow! You'll be typing code into Atom, clicking save, and seeing the changes pop-up lightning fast in your simulator. Also take note that you'll keep the *React Package Manager* terminal window open in the background. 



*yes, we haven't *quite* been using actual, full-spec hot-reloading. In this app you will though! As an aside, we highly recommend reading up on just why hot reloading is different from the usual reloading upon saving - it's really cool! Refer to the recommended readings section for more info.


### debugging with React Native

You have a few options here, all of which thankfully avoid using Xcode's fairly off-putting debugger ;) Most are covered well at this (https://facebook.github.io/react-native/docs/debugging.html) link, but we'll provide a brief rundown: 

- **general developer menu** : `Cmd-D` from simulator; gives access to various debugging tools such as a performance monitor and in-app inspector tool. 
	- significantly, selecting `Debug JS in chrome` from here opens up a localhost chrome window than allows you to use the chrome dev tools on your react app. 
- **app console logs** : 
  - `react-native log-ios` / `react-native log-android` from terminal 
  - `Debug → Open System Log...` in the iOS Simulator

## :boom: Optional add-ons to your React Native dev environment:

### Nuclide

Nuclide is essentially a supercharged version of Atom, while still, at its simplest, being an Atom package. It was developed by Facebook, and they use it internally for all their react-native development. Suffice it to say, Nuclide is packed with useful features, and is highly recommended if you'll be doing a lot of react-native. Set it up by running 
`apm install nuclide`  from the command line. The next time you open `Atom`, you'll see everything you need! 

link: `https://nuclide.io/`

### Ignite / Snowflake / Pepperoni

Each of Ignite, Snowflake, and Pepperoni are react-native starter kits. They all provide lots of add-ons to the usual react-native dev experience, and expedite several processes that would otherwise take a relatively large amount of legwork. Which one you use really depends on personal preference; there doesn't seem to be a consensus out there yet as to which is better. We'll leave you with links to each: 

Ignite: `https://github.com/infinitered/ignite`

Snowflake: `https://github.com/bartonhammond/snowflake`

Pepperoni: `http://getpepperoni.com/`

### linting 
Since we're used to a linter, why not go back to eslint? Setting it up is easy (`https://www.npmjs.com/package/eslint-plugin-react-native`)

First, run the following from terminal: 

1. `npm install eslint`
2. `npm install eslint-plugin-react`
3. `npm install eslint-plugin-react-native`

Then configure: 

Add each of the following to the respective sections in your `package.json` : 

```javascript
{
  "plugins": [
    "react",
    "react-native"
  ]
}
```

and 


```javascript
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```
and 

```javascript
{
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
  }
}
```

## :boom: Two final points on why React Native is totally worth your time
- backed by facebook & already gained quite a bit of traction ---> won't die anytime soon
- backed by facebook & already gained quite a bit of traction & is young ---> will definitely improve beyond belief in the near-future
- it may just be the next big thing, and is in it's early stages (and you thought React was young!) ---> get in during the early stages & win big 
- in the unlikely event that it does all go up in flames, at least you've gotten a decent entry point to mobile app development. Keep in mind that many say Apple's swift looks remarkably similar to react-javascript ;)



## :boom: Recommended readings 

- the definitive react-native intro course: `https://egghead.io/courses/react-native-fundamentals`
- the official react-native docs (a little bit of rtfm goes a long way): `https://facebook.github.io/react-native/docs/getting-started.html`
- `https://github.com/jondot/awesome-react-native`
- `http://rickyreusser.com/2016/05/14/things-i-learned-the-hard-way-using-react-native/`
- `http://ruoyusun.com/2015/11/01/things-i-wish-i-were-told-about-react-native.html`
- `https://medium.com/@ilanasufrin/tips-and-tricks-for-working-with-react-native-8ed6b6a82243#.60sd6norv`
- `https://medium.com/the-react-native-log/tips-for-styling-your-react-native-apps-3f61608655eb#.a05iru4gz`
- for hot reloading read the first answer's hot-reloading relevent portion from this link: `https://forums.meteor.com/t/what-is-hot-reloading-and-code-splitting-webpack-webpack-vs-ecmascript-hot/19734`


