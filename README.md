# A Workshop on
![](https://cdn.rawgit.com/ahsanazim/workshop/master/img/react-native-logo.svg) 


## Setting up the environment & basic init: 

### overall requirements: 

- Homebrew (needed to install `Watchman` below)
- Xcode 
- node.js
- React Native command line tools
- Watchman 

### installation: 

assuming you have `node`, `Xcode` (available from the App Store in case you don't have it), and `homebrew` (type `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` into the terminal to install it if you don't) installed, do the following:  

1. `brew install watchman` (facebook file watcher, used for rebuilding upon changes - think hot reloading)

3. `npm install -g react-native-cli` (react native command line interface)

4. `react-native init GoingNative` (this will take a minute; it creates a starter project named "AwesomeProject" in a directory named identically)

You should now have a directory titled "AwesomeProject", with contents as follows: (run `tree -L 1 -I README.md`) 
***INSERT IMAGE***

### run!

Now type `react-native run-ios` to see your basic app run in an iOS simulator!

You'll also now see another terminal window titled "React Packager" open. It'll instruct you to keep it open while you're developing any javascript projects - please follow said advice!

## let's build a (better) react-native app: 

## a note on react-native workflow 

While most conventional iOS apps are developed exclusively through Xcode, and tested there as well, you'll probably want to take a different approach with react-native - unless, that is, you're in the truly infinitesimal minority that enjoys coding javascript in Xcode.

As we've been programming using `Atom` for a while, it's best we stick with that for actually typing our application **code**. In the future you may want to take a look at Nuclide (https://nuclide.io/docs/platforms/react-native/), which is essentially " *Atom enhanced by Facebook for React development* ". We also have a bit on it in the optional add-ons section.

To actually **run** your app, you'll do what you did previously - type the `react-native run-ios`from your project root directory. You won't have to do this multiple times - just keep the simulator running in the background when you're developing your app's core code. 

Similar to the hot-reloading* we've been using in developing our web apps, react native also allows hot-reloading - a *huge* advantage over programming apps in swift/Obj-C or java. To enable it, just go to your simulator, **press Cmd-D, and click '*Enable Hot Reloading*'**. Take note that although hot reloading will generally work stupendously well, there are a few subtleties you may want to keep in mind (https://facebook.github.io/react-native/docs/debugging.html)

That, in short, is a possible -- and decent, in our opinion :) --  react-native workflow! You'll be typing code into Atom, clicking save, and seeing the changes pop-up lightning fast in your simulator. Also take note that you'll keep the *React Package Manager* terminal window open in the background. 



*yes, we haven't *quite* been using actual, full-spec hot-reloading. In this app you will though! As an aside, we highly recommend reading up on just why hot reloading is different from the usual reloading upon saving - it's really cool! Refer to the recommended readings section for more info.


## react-native debugging

You have a few options here, all of which thankfully avoid using Xcode's fairly off-putting debugger ;) Most are covered well at this (https://facebook.github.io/react-native/docs/debugging.html) link, but we'll provide a brief rundown: 

- **general developer menu** : `Cmd-D` from simulator; gives access to various debugging tools such as a performance monitor and in-app inspector tool. 
	- significantly, selecting `Debug JS in chrome` from here opens up a localhost chrome window than allows you to use the chrome dev tools on your react app. 
- **app console logs** : 
  - `react-native log-ios` / `react-native log-android` from terminal 
  - `Debug → Open System Log...` in the iOS Simulator

## Optional add-ons to your react-native development environment:

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

```
{
  "plugins": [
    "react",
    "react-native"
  ]
}
```

and 


```
{
  "ecmaFeatures": {
    "jsx": true
  }
}
```
and 

```
{
  "rules": {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
  }
}
```

## Two final points on why react-native is totally worth your time
- backed by facebook & already gained quite a bit of traction ---> won't die anytime soon
- backed by facebook & already gained quite a bit of traction & is young ---> will definitely improve beyond belief in the near-future
- it may just be the next big thing, and is in it's early stages (and you thought React was young!) ---> get in during the early stages & win big 
- in the unlikely event that it does all go up in flames, at least you've gotten a decent entry point to mobile app development. Keep in mind that many say Apple's swift looks remarkably similar to react-javascript ;)



## Recommended React Native readings 

- the definitive react-native intro course: `https://egghead.io/courses/react-native-fundamentals`
- the official react-native docs (a little bit of rtfm goes a long way): `https://facebook.github.io/react-native/docs/getting-started.html`
- `https://github.com/jondot/awesome-react-native`
- `http://rickyreusser.com/2016/05/14/things-i-learned-the-hard-way-using-react-native/`
- `http://ruoyusun.com/2015/11/01/things-i-wish-i-were-told-about-react-native.html`
- `https://medium.com/@ilanasufrin/tips-and-tricks-for-working-with-react-native-8ed6b6a82243#.60sd6norv`
- `https://medium.com/the-react-native-log/tips-for-styling-your-react-native-apps-3f61608655eb#.a05iru4gz`
- for hot reloading read the first answer's hot-reloading relevent portion from this link: `https://forums.meteor.com/t/what-is-hot-reloading-and-code-splitting-webpack-webpack-vs-ecmascript-hot/19734`