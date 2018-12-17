# PDF → GROBID = bibliographic metadata → BibSonomy

This tool allows to extract bibliographical metadata from PDF files
using [GROBID](https://github.com/kermitt2/grobid) and to store it in
[BibSonomy](https://www.bibsonomy.org/). The tool was developed during
the [DESIR Code Sprint](http://desircodesprint.sciencesconf.org/) in
Berlin (31.7.-2.8.2018).

## Installation and Setup

The tool consists of a Java-based backend (server) and a Node.js-based
frontend (client).

### Frontend Setup
#### Manually with npm
``` sh
# install dependencies
npm install

# serve dev version with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
#### Via asdf
First install asdf, see [installation](https://github.com/asdf-vm/asdf/blob/master/README.md)
``` sh
# install asdf plugin for nodejs
asdf plugin-add asdf-vm/asdf-nodejs
# build for production with minification
npm run build
```

### Backend Setup

GROBID can be used with a local installation or using the REST-based
web api.

For a local installation the GROBID model files must be downloaded
(e.g.,
https://dl.bintray.com/rookies/maven/org/grobid/grobid-home/0.5.1/grobid-home-0.5.3.zip)
and placed into an appropriate folder which is configured via the
option `grobid.home.path` in `application.properties`.

Copy the file `install-files/application.properties` into your
application root and set the correct paths and keys:

``` properties
grobid.home.path=/Users/YourUserName/Work/Grobid/grobid-home/
bibsonomy.api.user=YourUserName
bibsonomy.api.key=foo
```

You can get your BibSonomy API key from the [settings
page](https://www.bibsonomy.org/settings?selTab=1#selTab1). **Do not
put your API key into a public repository.**

## Starting

To start the application use
``` sh
mvn -Dspring.config.location=file:/....../DESIR-CodeSprint/trackB/backend/application.properties spring-boot:run 
```

where you replace
`file:/....../DESIR-CodeSprint/trackB/backend/application.properties`
with the path to your local configuration file.

## Usage (as a service)
### Extra configuration file
#### Install folder example: /opt/trackB/

Make a copy of the configuration template `install-files/trackB.conf`
and add it to the install folder.  This is in order to let the
`init.d` script use extra property files for your server.

### Create executable
In the build folder:
``` sh
mvn -Dspring.config.location=file:/....../DESIR-CodeSprint/trackB/backend/application.properties clean package
```
Copy the executable (`.jar`) to the installation folder.

Create a symbolic link (`ln -s`) from `/opt/trackB/trackB.jar` to
`/etc/init.d/trackB` to be able to launch the tool as a service
(usable for CentOS 6.x servers for example).

### Start the service
```service trackB start```

```service httpd restart```

The server should now listen on the port 8080 by default:

http://localhost:8080/trackB/

### Redirect from Apache HTTPD to our own Service

Here is an example of a conf file for Apache httpd using SSL and redirection from the port 443 (SSL) to our application running on port 8080.
The port 80 is also redirected to 443 and therefore to 8443 when used.
(Example using a server: trackB.dariah.eu)

```apacheconf
NameVirtualHost *:80
NameVirtualHost *:443

<VirtualHost *:443>
    SSLEngine on
    SSLProxyEngine On
    SSLCertificateFile /etc/letsencrypt/live/trackB.dariah.eu/cert.pem
    SSLCertificateKeyFile /etc/letsencrypt/live/trackB.dariah.eu/privkey.pem
    SSLCertificateChainFile /etc/letsencrypt/live/trackB.dariah.eu/chain.pem
    ServerName https://trackB.dariah.eu/
    Redirect / https://trackB.dariah.eu/trackB/
    ProxyPass /trackB/ http://localhost:8080/trackB/
    ProxyPassReverse /trackB/ http://localhost:8080/trackB/
</VirtualHost>
<VirtualHost *:80>
    ServerName http://trackB.dariah.eu/
    DocumentRoot /var/www/
    ErrorLog /var/log/httpd/trackB_error_log
    CustomLog /var/log/httpd/trackB_access_log combined
    Redirect / https://trackB.dariah.eu/
</VirtualHost>
```

## Further Information
### BibSonomy

[BibSonomy](https://www.bibsonomy.org/) is a social bookmarking system
that helps you to organize your scientific work. Use BibSonomy to
collect publications and bookmarks, to collaborate with your
colleagues, and to discover interesting researches for your daily
work.

### GROBID

[GROBID](https://github.com/kermitt2/grobid/) is a machine learning
library for extracting, parsing and re-structuring raw documents, such
as PDF documents, into structured TEI-encoded ones.

## Contributing

Contributions are welcome! Just fork and send your pull requests.

## Credits

Created at the [DESIR
CodeSprint](http://desircodesprint.sciencesconf.org/) by
[yoannspace](https://github.com/yoannspace),
[rjoberon](https://github.com/rjoberon),
[ChristophHubeL3S](https://github.com/ChristophHubeL3S),
[ctot-nondef](https://github.com/ctot-nondef), and
[schmima](https://github.com/schmima).  See
[contributors](https://github.com/DESIR-CodeSprint/trackB/graphs/contributors).

## License

This project is licensed under the Apache License 2.0 - see the
[LICENSE.md](https://github.com/DESIR-CodeSprint/trackB/blob/master/LICENSE.md)
file for details.
