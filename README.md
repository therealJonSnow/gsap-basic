![npm](https://img.shields.io/npm/v/gsap-basic) ![npm (prod) dependency version](https://img.shields.io/npm/dependency-version/gsap-basic/gsap?color=green&logoColor=green) ![NPM](https://img.shields.io/npm/l/gsap-basic) ![npm bundle size](https://img.shields.io/bundlephobia/min/gsap-basic)

// *still in development*

# gsap-basic :wave:

gsap-basic is a library of simple, reusable gsap animations to save you time and keep your code dry.

Below you will find how to implement the animations and also a list of those available. Any suggestions for further animations please contact me.

## Download & Usage

## Usage

Install with npm
```
npm install gsap-basic
```
Require/Import
```
// import
import transitions from 'gsap-basic';
// or require
const transitions = require('gsap-basic');
```
Now use your animations!

## Using Animation

Syntax for using the animations is as follows:
```
transitions.{anim parent}.{anim child}(el, done)
// for instance
transitions.fade.in(el, done)
```
Where **el** is the target HTML element and **done** is the callback fired when animation is finished.

For a list of animations, and console.log to check package is working, run:
```
transitions.help()
```

## Animation List

As above animations have parents and children:
* fade 
  * in
  * out
* slideX 
  * in   
* slideY 
  * in
  * out

## Other bits 
This is just a side project I've created as I found I was reusing basic animations over and over. Any suggestions, for more animations or on structure, please get in touch.

Other than that, happy coding! :robot: