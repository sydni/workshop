# Getting started with 

![](https://cdn.rawgit.com/ahsanazim/workshop/master/img/react-native-logo.svg) 

Today we'll be introducing you to React Native, taking you from building a basic-app to whipping up one that does all sorts of amazing things. We'll also leave you with a tonne of goodies and things to keep in mind if you plan on pursuing React Native development in the future. 

Basically, this'll be your one-stop-shop to becoming an ace React Native developer ;) 

Since this document is slightly long, here's a short run down on what you'll find inside: 

1. [Setting up the environment & basic init](#boom-setting-up-the-environment-basic-init)
2. [Building a few React Native Apps](#boom-lets-build-a-few-react-native-apps)
   - hello world!
   - a pretty simple app
   - a not-that-simple app
3. [For future reference](#boom-for-future-reference)
	- workflow
	- debugging

4. [Add-Ons to your dev environment](#boom-optional-add-ons-to-your-react-native-dev-environment)
   - upgrading Atom
   - need a starter kit?
4. [Final note on why you should use React native](#boom-two-final-points-on-why-react-native-is-totally-worth-your-time)
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

### a bit of cleaning up

Before we begin coding up a few apps, let's firstly get rid of the default 'app' that the React Native folks have left in for us. Through the terminal,`cd` to the `GoingNative` directory, and type `Atom .`

Once in Atom, go to the `index.ios.js` file; this is the js file that produced the page you saw when running `react-native run-ios` for the first time. Go ahead and take a peek - there's no harm in having a quick look at it :). 

If you do so, then your first impression of the code will probably be one of relief - it looks remarkably similar to the usual React we've been used to. As you now know, that's intentional, and pretty much the whole point of React Native! 

Indeed, it's all there: the familiar `import` statements, `render` calls,`ES6 classes`, as well as the `JSX` we've been dealing with for quite a while. You have, though, probably noticed something that's familiar, but seemingly in the wrong place (`CSS` in the same file as `javascript`????? oh the horror :astonished: ).

Fear not, we'll get to that in a bit. First, though, :rotating_light: **clear the page**. We want a blank `index.ios.js` file to work off of. No cheating here ;)

### Hello World!

In accordance with the ancient traditions of our people, we must first build an app that does nothing except say "Hello world".*

Here's how you'd do so: 

First, you'll need to import a few things - namely `React`,`Component`,`Text`, and `AppRegistry`. Two of the previous four items should catch your eye - we've been importing `React` and `Component` an untold number of times over the past few weeks. `Text` and `AppRegistry` are, well, native to React Native, so we'll talk about them in a bit. 

:rotating_light: Basically, the following goes at the top of your file: 

```javascript
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';
```
Now, if we were doing vanilla react, and all we wanted to display was a 'hello world' message, we'd probably put that in a render function inside a component, right? Same here. 

Just create a class `GoingNative` that extends `Component` (familiar, is it not?), and put in the usual `render` call inside it. Same style and syntax as vanilla React.

You'll need to return something in the render, though, right? The text "Hello World!" would seem a like a good idea, but we need something to put it in - maybe a div? 

Wrong. That won't work in React Native; instead, you'll wrap your `Hello World!` inside a starting (`<Text>`) and ending (`</Text>`) UI component called Text. This brings us to an aside on *Native UI Components* in general - they're best understood as native UI widgets, necessary and crucial in facilitating making stuff appear and interact on your page in proper ways. Clearly, the `<Text>` component is for displaying text. You have a corresponding `<Image>` component for images, and more complex ones for things such as maps (the`<MapView>` component!). Just as we'd been using components in our React code, think of these as analagous to them in React Native, except for the fact that they're *native* to it. 

Btw, in case there's any confusion: you can define normal components in React Native as well, and import/export/use them just as we did in React. In fact, our `GoingNative` class is a component in itself, and can be used accordingly. The above was just to emphasise the use of native UI components in React Native.

:rotating_light: With the above addition, your class hopefully ends up looking like this: 

```javascript
class GoingNative extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}
```
Are we going to see stuff pop up yet? Nope - the final step before we see vaunted Hello World message is *registering* our app. 

Fortunately, this kind of registration doesn't involve any bureacracy or paperwork - you just make a call to the `registerComponent()` function, passing in the name of the class, and an anonymous function that simply gets the component (the latter parameter is literally called `getComponentFunc`). 

:rotating_light: Like so: 

```javascript
AppRegistry.registerComponent('GoingNative', () => GoingNative);
```

One think to keep in mind is that however large your app will be, you'll usually have only one `AppRegistry.registerComponent( ... )` call; its function is to designate the root of your app. A crucial bit of boilerplate! 

Finally done! Go and reload (`Cmd-R`) the simulator (if you've still got it running), or do `react-native run-ios` from the command line if you haven't.

Simple enough, right! One thing though - you'll notice that your Hello World! message is obscured by the carrier info. Just to make clear that our Hello World message really did work, why not add a newline in front of the `Hello World!` text. Take care of JSX syntax though! 

:rotating_light: Although this is just for aesthetics, you can basically switch out `<Text>Hello world!</Text>` for `<Text>{"\n"}Hello world!</Text>`. 

`Cmd-R` and you'll now see the Hello World message appear within clear view! 

:rotating_light: There you have it - a simple React Native Hello World App. If you look over the overall code, it's miniscule: 

```javascript 
import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

class GoingNative extends Component {
  render() {
    return (
      <Text>{"\n"}Hello world!</Text>
    );
  }
}

AppRegistry.registerComponent('GoingNative', () => GoingNative);
```

All we really did was create a `GoingNative` component and register it with our app. The component contains text, "Hello World!", and that's what appears on our screen.

*that line was blatantly stolen from facebook's react-native page (it was just too good to pass up). Apologies to facebook.

### Styling

Before we move on and develop another app, let's take a moment to talk about something we pointed out in the starter app - styling in React Native. 

A few basic things to keep in mind about styling in React Native:

-  styling is done via javascript, in a syntax usually identical to CSS (with certain exceptions - e.g. names are written like `backgroundColor` instead of like `background-color`)

- all core components (e.g. `<Text>` from above) accept a prop named `style`. The prop is usually a simple javascript object. This clearly encourages us to pass in a style object, and thus through it choose which style to apply to which component (although note that inline styles are possible). 

- Usually, several styles are defined at once - for this, use the `StyleSheet.create(...)` function, instead of nesting a plain javascript object. 

Now, let's style our `Hello World!` app. 

Let's start of with some very, very basic styling - changing the color of our text to red.

We'll make use of the `style` prop here: simply pass in an object that has style rule(s) - defined in CSS syntax - to change text color to red.

You could have done this multiple ways, but in the end you should end up with one of the following:  


```javascript 

// inline style - NOT RECOMMENDED

// in its usual place
<Text style={{color: 'red'}}>{"\n"}Hello world!</Text>


######################### OR ################################

// Passing in an object

// in its usual place
<Text style={redStyle}>{"\n"}Hello world!</Text>

// after class definition but before registering app ...
const redStyle = {
  color: 'red'
}

```




## :boom: For future reference: 

### a note on React Native workflow 

While most conventional iOS apps are developed exclusively through Xcode, and tested there as well, you'll probably want to take a different approach with react-native - unless, that is, you're in the truly infinitesimal minority that enjoys coding javascript in Xcode.

As we've been programming using `Atom` for a while, it's best we stick with that for actually typing our application **code**. In the future you may want to take a look at Nuclide (https://nuclide.io/docs/platforms/react-native/), which is essentially " *Atom enhanced by Facebook for React development* ". We also have a bit on it in the optional add-ons section.

To actually **run** your app, you'll do what you did previously - type the `react-native run-ios`from your project root directory. You won't have to do this multiple times - just keep the simulator running in the background when you're developing your app's core code. 

Similar to the hot-reloading* we've been using in developing our web apps, react native also allows hot-reloading - a *huge* advantage over programming apps in swift/Obj-C or java. To enable it, just go to your simulator, **press Cmd-D, and click '*Enable Hot Reloading*'**. Take note that although hot reloading will generally work stupendously well, there are a few subtleties you may want to keep in mind (https://facebook.github.io/react-native/docs/debugging.html)

That, in short, is a possible -- and decent, in our opinion :) --  react-native workflow! You'll be typing code into Atom, clicking save, and seeing the changes pop-up lightning fast in your simulator. Also take note that you'll keep the *React Package Manager* terminal window open in the background. 


*yes, we haven't quite been using actual, full-spec hot-reloading. In this React Native you can/will though! As an aside, we highly recommend reading up on just why hot reloading is different from the usual reloading upon saving - it's really cool! Refer to the recommended readings section for more info.


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


