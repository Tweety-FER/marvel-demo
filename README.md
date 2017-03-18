# Marvel Demo Application

A simple demo application for viewing the cool stuff made at Marvel, developed
using React and Mobx.

You can use it to view comics, characters, and the ties that bind them.

## After cloning

After cloning the application, don't forget to run

```bash
npm install
```

## Running the application in dev mode

You can run the application in development mode (and make it watch changes)
by running

```bash
npm run dev
```

## Building the application

You can build the application by running

```bash
npm run build
```

After that, the application will be available in the `/build` directory.
From that point on, you can run it by navigating there in the terminal and running
something like `http-server`, or just double-clicking on the `HTML` file.

**Note**: If it is run in such a naive way and no server is set, you will not be
able to react routes other than the base route from outside the application.
That means that you can access some router (e.g. `/characters`) from within the application,
but if you refresh you will get nothing.

If this behaviour is needed, it will either need to be run in a more complex configuration,
e.g. with node or a server rewrite config, or can be run in dev mode, described above.

### Attribution

<a href="http://marvel.com">Data provided by Marvel. © 2017 MARVEL</a>