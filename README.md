# Openlab Static Site Generator?

## Installing

`npm install`, make sure gulp and the template dependency is installed. If something fails please let me know (Alex). Pretty sure you just need `gulp` and `gulp-template-html` modules.

### Build Process

Just run `gulp` to run the script in `gulpfile.js`. The script takes all the 'content' body from `public/content` and then uses the various templates you configure it to use to generate static html files in `dist`.

## Markup

Example markup for content:
```
<!-- build:title -->Home<!-- /build:title -->
<!-- build:header -->Openlab<!-- /build:header -->
<!-- build:content -->
<div> CONTENT </div>
<!-- /build:content -->
<!-- build:footer -->
<div> FOOTER </div>
<!-- /build:footer -->
```

Example markup for template:
```
<head>
  <title><!-- build:title --></title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="../public/assets/css/main.css" />
</head>
<body>
<hr><!-- build:header --></hr>
<!-- build:content -->
</body>
```

## Deployment

You already know how to view static html locally. I assume this will be served statically via nginx.

## Built With

* Gulp
* https://github.com/grit96/gulp-template-html
