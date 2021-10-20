# TAKEPART Starterkit for Statamic

The starting point for each of our [Statamic 3](https://statamic.com/) projects. To start a project, install Statamic with the `takepartdev/starterkit` via CLI:

```
statamic new {sitename} takepartdev/starterkit
```

## Features

#### Core
- German language and date formats
- Pro Edition enabled
- User roles
    - `Access Control Panel`
    - `Edit Own Content`
    - `Edit All Content`
- User groups
    - `Author`
    - `Supervisor`

#### Fieldsets (also used within Bard field `content_blocks`)
- Custom HTML
- Image Gallery
- Text Image

#### Included Addons
- [SEO Pro](https://statamic.com/addons/statamic/seo-pro/docs)
- [Spatie Responsive Images](https://github.com/spatie/statamic-responsive-images)

#### Frontend
- Main layout file
- Default template
- Example antlers templates for all fieldsets
- Default header (with navigation) and footer (with copyright)

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
