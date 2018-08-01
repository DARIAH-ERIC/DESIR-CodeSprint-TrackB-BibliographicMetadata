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

Create a file called application.properties and configure it like this
``` bash 
grobid.home.path=/Users/YourUserName/Work/Grobid/grobid-home/
grobid.server.url=http://traces1.inria.fr/grobid/
bibsonomy.api.url=https://www.bibsonomy.org/api/
bibsonomy.api.user=YourUserName
bibsonomy.api.key=foo
```

You can get your BibSonomy API key from the [settings page](https://www.bibsonomy.org/settings?selTab=1#selTab1). **Do not put your API key into a public repository.**

To start the application use
``` bash 
mvn -Dspring.config.location=file:/Users/YourUserName/DESIR-CodeSprint/trackB/application.properties spring-boot:run 
```

# BibSonomy

[BibSonomy](https://www.bibsonomy.org/) is a social bookmarking system
that helps you to organize your scientific work. Use BibSonomy to
collect publications and bookmarks, to collaborate with your
colleagues, and to discover interesting researches for your daily
work.

# GROBID

GROBID is a machine learning library for extracting, parsing and
re-structuring raw documents, such as PDF documents, into structured
TEI-encoded ones.

# Contributing

Placeholder

# Credits

Placeholder

# License

Placeholder
