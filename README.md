<p align="center"><img src="https://statamic.com/assets/branding/Statamic-Logo+Wordmark-Rad.svg" width="400" alt="Statamic Logo" /></p>

## TAKEPART Starterkit for Statamic

The starting point for each of our [Statamic 3](https://statamic.com/) projects. To start a project, install Statamic with the `takepart/starterkit` via CLI:

```
statamic new {sitename} takepart/starterkit
```

## Features

**Core**
- German language and date formats
- Pro Edition enabled
- User roles and groups (`Author` & `Supervisor`)

**Fieldsets**
- Custom HTML
- Image Gallery
- Text Image

**Included Addons**
- [SEO Pro](https://statamic.com/addons/statamic/seo-pro/docs)
- [Spatie Responsive Images](https://github.com/spatie/statamic-responsive-images)

**Frontend**
- Base header and footer

## Statamic

Statamic 3 is the flat-first, Laravel + Git powered CMS designed for building beautiful, easy to manage websites.

- [Statamic Main Site](https://statamic.com)
- [Statamic 3 Documentation](https://statamic.dev/)

## Contributing

To create and editable Starterkit instance locally, create a fresh Statamic installation with the Starterkit and the `--with-config`:

```
statamic new takepart-starterkit-dev takepart/starterkit --with-config
```

Export the starterkit to the desired location:

```
php please starter-kit:export {destination}
```

Please make a pull request for new features with dedicated messages what will be added, changed or removed.
Read more on <https://statamic.dev/creating-a-starter-kit>.

## Authors

- Jakob Plöns, <jploens@takepart-media.de>

© 2021 TAKEPART MEDIA
