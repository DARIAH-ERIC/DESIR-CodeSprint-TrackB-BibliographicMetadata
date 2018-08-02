# BibImp - Import of bibliographical data using GROBID and BibSonomy

This tool allows to extract bibliographical data from data generated with GROBID 
(e.g. from a pdf file) and to store this data in BibSonomy. The tool was 
developed during the DESIR Code Sprint event in Berlin (31.7. - 2.8.2018).


# Grobid WebApp Install Routine

Front WebApp for the Track B of the Desir Codesprint.


# Build Setup

``` bash
# install dependencies
npm install

# serve dev version with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

# Usage

The Grobid model files must be downloaded (e.g., https://dl.bintray.com/rookies/maven/org/grobid/grobid-home/0.5.1/grobid-home-0.5.1.zip) and placed into an appropriate folder which is configured via an option in application.properties. 

Copy the file install-files/application.properties in your application root and set the correct paths and keys:
``` bash 
grobid.home.path=/Users/YourUserName/Work/Grobid/grobid-home/
bibsonomy.api.user=YourUserName
bibsonomy.api.key=foo
```

You can get your BibSonomy API key from the [settings page](https://www.bibsonomy.org/settings?selTab=1#selTab1). **Do not put your API key into a public repository.**

To start the application use
``` bash 
mvn -Dspring.config.location=file:/....../DESIR-CodeSprint/trackB/backend/application.properties spring-boot:run 
```

# Usage (as a service)
## Extra configuration file
### Install folder example: /opt/trackB/

Make a copy of the configuration template install-files/trackB.conf and add it to the install folder.
This is in order to let the init.d script use extra property files for your server.

## Create executable
In the build folder:
``` bash
mvn -Dspring.config.location=file:/....../DESIR-CodeSprint/trackB/backend/application.properties clean package
```
Copy the executable (.jar) to the installation folder.

Create a symbolic link (ln -s) from /opt/trackB/trackB.jar to /etc/init.d/trackB to be able to launch the tool as a service 
(usable for centos 6.x servers for example).

## Start the service
```service trackB start```

```service httpd restart```

The server should now listen on the port 8080 by default:

http://localhost:8080/trackB/

## Redirect from Apache HTTPD to our own Service
Here is an example of a conf file for apache httpd using SSL and redirection from the port 443 (SSL) to our application running on port 8080.
The port 80 is also redirected to 443 and therefore to 8443 when used.
(Example using a server: trackB.dariah.eu)

```xml
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

# BibSonomy

[BibSonomy](https://www.bibsonomy.org/) is a social bookmarking system
that helps you to organize your scientific work. Use BibSonomy to
collect publications and bookmarks, to collaborate with your
colleagues, and to discover interesting researches for your daily
work.

# GROBID

[GROBID](https://github.com/kermitt2/grobid/) is a machine learning library for extracting, parsing and
re-structuring raw documents, such as PDF documents, into structured
TEI-encoded ones.

# Contributing

Placeholder

# Credits

Placeholder

# License

This project is licensed under the Apache License 2.0 - see the [LICENSE.md](https://github.com/DESIR-CodeSprint/trackB/blob/master/LICENSE.md) file for details.
