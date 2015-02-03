file upload - multer
=================

## Installation

> `npm install`

## Running / Development

### handling file uploads by using multer module

> https://www.npmjs.org/package/multer

> Launch server `node server.js`

> Visit http://localhost:3000/signup

> Choose image "foo.jpeg" and click "Submit" button to submit form

> Result:

**server**

```
Name: Tom
Email: tom@gmail.com
{ profile_image: 
   { fieldname: 'profile_image',
     originalname: 'foo.jpeg',
     name: '285d8319649f0440065d50820334be67.jpeg',
     encoding: '7bit',
     mimetype: 'image/jpeg',
     path: 'uploads/285d8319649f0440065d50820334be67.jpeg',
     extension: 'jpeg',
     size: 2073,
     truncated: false,
     buffer: null } }
```

**browser**

```
{ profile_image: 
   { fieldname: 'profile_image',
     originalname: 'foo.jpeg',
     name: '285d8319649f0440065d50820334be67.jpeg',
     encoding: '7bit',
     mimetype: 'image/jpeg',
     path: 'uploads/285d8319649f0440065d50820334be67.jpeg',
     extension: 'jpeg',
     size: 2073,
     truncated: false,
     buffer: null } }
```
