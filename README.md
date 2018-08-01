# Track B — Import and export of bibliographical data from BibSonomy and ingest in managed collections

In order to promote DARIAH tools, services, and initiative
collaborations, DESIR organises a series of dissemination events, one
of them is the [DESIR Code
Sprint](https://desircodesprint.sciencesconf.org/) event which will be
held from 31th July to 2nd August 2018 in Berlin. As one of the events
that is organised by the DESIR project, the code sprint this year
takes "Bibliographical metadata: Citations and References" as the main
subject. Track B focuses on constructing a demonstrator for importing
and exporting bibliographical data from sources such as BibSonomy,
ORCID, and GROBID.

# BibSonomy

[BibSonomy](https://www.bibsonomy.org/) is a social bookmarking system
that helps you to organize your scientific work. Use BibSonomy to
collect publications and bookmarks, to collaborate with your
colleagues, and to discover interesting researches for your daily
work.

# ORCID

[ORCID](https://orcid.org/) provides a persistent digital identifier
that distinguishes you from every other researcher and, through
integration in key research workflows such as manuscript and grant
submission, supports automated linkages between you and your
professional activities ensuring that your work is recognized.

# GROBID

GROBID is a machine learning library for extracting, parsing and
re-structuring raw documents, such as PDF documents, into structured
TEI-encoded ones.

# Steps
This task consists of four subtasks. Task 1 is the central task to
implement the demonstrator; the three other tasks add connectivity to
services that enable bibliographic import or export.

Task 1 [demonstrator]
- The goal is to build a web-based demonstrator that enables import and export of bibliographic metadata.
- The demonstrator interacts with the import/export modules from other the tasks (e.g., ORCID, GROBID, BibSonomy).
- We start with a discussion and selection of web frameworks (Python+Django or Java+Spring MVC - depending on skills).
- Part of this task could also be OAuth2 authentication via ORCID.

Task 2 [ORCID]
- The goal of this task is to implement a module for the import of bibliographic metadata from ORCID.
- We start with an introduction to ORCID and the [ORCID REST-API](https://members.orcid.org/api/tutorial/read-orcid-records).
- A possible extension is to add support for the export of bibliographic metadata to ORCID.

Task 3 [GROBID]
- The goal of this task is to implement a module for the import of bibliographic metadata from PDF files using GROBID.
- The main task is the implementation of the interaction with the GROBID REST-API and model2model transformation from TEI/XML to BibTeX.
- We start with an introduction to GROBID.
- GROBID REST-API: https://grobid.readthedocs.io/en/latest/Grobid-service/
- Java Library: https://grobid.readthedocs.io/en/latest/Grobid-java-library/

Task 4 [BibSonomy]
- The goal of this task is to implement a module for the export and import (or: storage and retrieval) of bibliographic metadata to BibSonomy.
- The plan is to use BibSonomy as a backend/database. Authentication will work either using the API key or using OAuth.
- We start with an introduction to BibSonomy and the BibSonomy REST-API.
- REST-API: https://bitbucket.org/bibsonomy/bibsonomy/wiki/documentation/api/REST%20API
- Java example: https://bitbucket.org/bibsonomy/bibsonomy/wiki/documentation/api/Java%20API%20Examples

# Contact
For more information, please contact us directly:
- Christoph Hube (hube@L3S.de)
- Robert Jäschke (jaeschke@L3S.de)

# Grobid WebApp Install Routine

Front WebApp for the Track B of the Desir Codesprint.


## Build Setup

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
