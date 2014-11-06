Ragnarok
=================

[![Build Status](https://travis-ci.org/iamkevingreen/Ragnarok.svg?branch=master)](https://travis-ci.org/iamkevingreen/Ragnarok) [![Code Climate](https://codeclimate.com/github/iamkevingreen/Ragnarok/badges/gpa.svg)](https://codeclimate.com/github/iamkevingreen/Ragnarok)

**A Meteor based CMS with Sass & Bower**

## Setup

Navigate to `server/fixtures.js` to change the default admin settings to whatever you want for the initial user

Run `meteor` in the root to install dependencies and start the server

*No need to run bower install despite it being in the root meteor package handles that*

## Roles

Currently we only have an admin and normal user role, normal users will only be able to comment on blog posts and update there profile, additional roles may be added as needed.

#### Admnin Role

Admins have complete control, there is an admin dashboard that gives users a familar backend much like wordpress or other cms frameworks, Admins will be able to modify users, post articles, and create/edit content.

#### Coming

An editor role that's an inbetween where you will be able to toggle the things they have access to at a granular level?


## What's out of the box?

* [Bourbon mixin library](http://bourbon.io/)
* [Neat for a grid system](http://neat.bourbon.io/)
* [SASS support via meteor-scss (meteor package)](https://github.com/fourseven/meteor-scss)
* [bower support via mquandalle (meteor package)](https://github.com/mquandalle/meteor-bower)
* [s3 upload support via lepozep (meteor package)](https://github.com/Lepozepo/S3/)
* [Meteor Accounts-UI and Accounts-Password](https://docs.meteor.com/#/basic/accounts)
* [Role Management](https://github.com/alanning/meteor-roles)

*please check packages above if any issues arrive*

## Dummy Meteor App

This is a dummy app that will help you start with meteor-sass-bower

I found a lot of the support out there for doing this kind of confusing or unable. So hopefully using this as a starter will put you in a good place.

## Other

This is a simple app with mongo, it shows a list of posts, has user account functionality and the ability to CRUD items
