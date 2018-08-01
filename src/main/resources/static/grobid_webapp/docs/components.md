# Components

## App

### Imports

* [FundamentNav](#fundamentnav)
* [FundamentFooter](#fundamentfooter)
* [HELPERS](/helpers#helpers)

### Description

This is the main Component. It is used to add the three visible parts of the site to the application:
* the navbar
* the content
* the footer.

It also commits [setOntology](/store#setOntology) to set the owl ontology.


## AutocompArche

This component is used to create an autocomplete form for searching entries in the [ARCHE Repository](https://arche.acdh.oeaw.ac.at).
You can specify which endpoint in the api you want to search and also the label standing before the select.
The user can type and every time he stops, a request to ARCHE using [getArcheByID](/helpers#getarchebyid) is made.
The received options are seen as selectable option in the select. Upon selecting an item an input event is fired. (it is not yet bound to v-model! only way to receive is to listen for events on it. Issue is already filed).

### Imports

* debounce (for handeling a delay of actions)
* [HELPERS](/helpers#HELPERS)

### Props


| Prop | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | type of what is looked for. needs to be in Capslock. Valid types and mappings are listed below   |
| name | <code>String</code> | label of v-Select |


#### type to endpoint Mappings
``` https://fedora.hephaistos.arz.oeaw.ac.at/browser/api/
PERSONS: 'persons/',
BASE: '',
ORGANISATIONS: 'organisations/',
PLACES: 'places/',
CONCEPTS: 'concepts/',
PUBLICATIONS: 'publications/',
METADATA: 'getMetadata/',
```

### Methods

#### onSearch

calls the [search-function](#search) and is from the setup pretty similar to the documentation of v-select found [here](https://sagalbot.github.io/vue-select/docs/Advanced/Ajax.html). It is called in the v-Select.

the function sets loading(true) and then just calls this.search(loading, search, this);

##### Parameters

| Param | Type | Description |
| --- | --- | --- |
| search | <code>String</code> | The search text typed by the user. |
| loading | <code>Function</code> | Function for triggering the loading class. inside it it is called with<code>true</code>|

##### How to call it

``` template
<v-select label="name" :filterable="false" :options="options" @search="onSearch">...
```
The params come directly from the v-select, no need to write them manually.

#### search

This function calls (350 milliseconds after it was last called) the [getArcheByID](/helpers#getArcheByID)-function with the given search and the specified type-prop. on a positve result, the returned search-results are saved to the options-array that is also displayed an the select's options.


##### Parameters

| Param | Type | Description |
| --- | --- | --- |
| loading | <code>Funciton</code> |  Function for triggering the loading class. inside it it is called with<code>false</code> |
|  search | <code>String</code> | text that is searched for |
|  vm | <code>Object</code> | Vue-Object |

##### How to call it

``` inFunction
this.search(loading, search, this);
```

### How to use the Component

``` template
<AutocompArche type='PERSONS' name='Person'></AutocompArche>
```
``` script
import AutocompArche from './AutocompArche';
```

## ClearCacheModal

A Modal which gives you the option to clear your local store, it is opened by pressing the 'Clear Store' Button.

### Imports
* [HELPERS](/helpers#helpers)

### Used In
* [Modals](#Modals)

## Create

A content-level component containing the functionality to write new meta data entries to the triple store of the application and in the future to also upload those to the server. for that reason it contains the [FormFromSchema](#FormFromSchema)-component.

### Imports

* [FundamentEntity](#fundamentnav) (never called)
* [AutocompArche](#AutocompArche) (currently for testing, won't be needed here in the future)
* [FormFromSchema](#FormFromSchema)
* [HELPERS](/helpers#helpers)



## Entities

Display-component to show the entities that are in the [n3-store-module](/store#n3).

### Imports

* [HELPERS](/helpers#helpers)


### Methods
* [onFileChange](#onFileChange)
* [loadTtl](#loadTtl)

### Uses Foreign Methods
* [StringToStore](store#StringToStore)


## Entitytable

Displays a reactive table of search results from jowl-data.
Currently not in use, so it is uncertain if described behavior is correct.

### Props

| Props | Type | Description |
| --- | --- | --- |
| uri | <code>String</code>| the query that is searched for. each time it changes, the table is updated. |

### Imports

* [HELPERS](/helpers#helpers)

### Data

* <code>tabledata: []</code> -> array of objects in form of <code>{name: '', type: '', range: ''}</code>.
Its content gets displayed in the table.

### Methods

#### getProps

This is a watcher-function of the uri-prop.
it clears the tabledata-object, then calls [fetchPropertiesByURI](/store#fetchPropertiesByURI) and pushes the returned data with proper attribute names to the tabledata-object.  

##### Parameters

| Param | Type | Description |
| --- | --- | --- |
| newClass | <code>String</code> | uri to be fetched from |



### Uses Foreign Methods
* from [JOWL store module](/store#JOWL)
  * [fetchClasses](/store#fetchClasses)
  * [fetchSubClassOf](/store#fetchSubClassOf)
  * [fetchPropertiesByURI](/store#fetchPropertiesByURI)
  * [getQuery](/store#getQuery)


## FormFromSchema

This component renders a full form from a given type.
On created it calls [getMetadataByType](/helpers#getMetadataByType) with the as a param specified type. The returned schema is  stored in the [JSONschema module](/store#JSONschema), which is also mapped to the state of this component. the schema is used as the param schema for form-schema, which is the imported component that actually does the rendering of the form.

Validation rules and specific mappings of schema-elements to form-elements can be described in the sript part. (in the future, when the api returns typing, we will improve the current version to support other types then String.)


### Used in

* [Create](#create)

### Imports


* [FormSchema](https://github.com/formschema) (external component)
* [AutocompArche](#AutocompArche)
* [HELPERS](/helpers#HELPERS)


### Props


| Prop | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | type of the form you want to render. this is directly used as a parameter for calling [getMetadataByType](/helpers#getMetadataByType) |


#### Possible types
* person
* organisation
* place
* concept
* publication

### Components

* [FormSchema](https://github.com/formschema)
* [AutocompArche](#AutocompArche)
* [StoreStats](#StoreStats)



### Uses Foreign Stuff

#### Methods
* [setSchema](/store#setSchema)
* [setEntry](/store#setEntry)
* [objectToStore](/store#objectToStore)
* [getMetadataByType](/store#getMetadataByType)

#### Data

| Name | Type  | Description |
|--|--|--|
| model | `Object` | bound to the model-prop of [FormSchema](https://github.com/formschema/native#props) |
| loading | `Boolean`| set to true only after [getMetadataByType](/helpers#getMetadataByType) receives a valid schema. |

#### Mapped State
* [schema](/store#JSONschema)

### Methods

#### submit

called without parameters after the submit-button at the end of the form is clicked.
it calls [objectToStore](/store#objectToStore) with the model from [FormSchema](https://github.com/formschema) and schema of from the [JSONschema](/store#JSONschema) of the specified type.

##### Parameters

none

### How to call it

``` template
<FormFromSchema type="person"></FormFromSchema>
```
instead of person you can type any other of the possible [types](#Possible-types).


## FundamentEntity

Dispalys a bootstrap card of an entity from a given uri, type and format.
TODO: I think it is relevant for searching the api and instantly loading data from eg. viaf.

It does all it's functionallity in created, so it is not reactive after the content has loaded.

!!!! ------------------------------- More info is needed---------------------------------!!!


### Used in

* [Create](#create) (only imported, never called)
* [Entities](#Entities)
* [Load](#load)

### Imports

* [HELPERS](/helpers#HELPERS)


### Props




| Prop | Type | Description |
| --- | --- | --- |
| uri | <code>String</code> | the address from where you want to display additional data. eg (viaf.org/something). posible uris are (viaf.org and id.acdh.oeaw.ac.at)  |
|type | <code>String</code> | as far as I can tell only relevant, if the address is (id.acdh.oeaw.ac.at). then it is one of the types shown [here](#possible-types-1).  |
|format | <code>String</code> | is not used in the code. |


### Components

none



### Uses Foreign Stuff

#### Methods
* [setSchema](/store#setSchema)
* [extractHostname](#extractHostname)
* [getViafByID](/helpers#getViafByID)
* [getArcheByID](/helpers#getArcheByID)

### Data
* <Code>entity: { title: 'loading', desc: 'loading', type: '' }</Code>
* <Code>loading: true</Code>

### How to call it

``` exampleFromEnteties
<FundamentEntity v-if='entity.type == "acdh:Person;"'
  :uri='entity["acdh:hasIdentifier"][0]'
  type='PERSONS'>
 </FundamentEntity>
```
instead of acdh:Person you can use any other of the possible [types](#Possible-types) similarly as well as <Code>type='PERSON'</Code>.

## FundamentFooter
Located at the bottom of every page, the FundamentFooter component contains some legal information as well as some links.

## FundamentNav
The header of the website, you can use it to navigate between different pages.

## Load
This Component is used to load .ttl files into the scope. Once you select a file, it is auto loaded and you can immediately select a new file to be loaded into the scope.

### Imports
* [HELPERS](/helpers#helpers)
* [tripleCount](#tripleCount)
* [StringToStore](#StringToStore)

## Modals
A component which contains all the used modals.

### Imports
* [ClearCacheModal](#ClearCacheModal)
* [StoreModal](#StoreModal)

### Used in
* [App](#App)

## Propertytable
A simple table which shows all properties of a given ontology.

### Imports
* [HELPERS](/helpers#helpers)
* [fetchClasses](#fetchClasses)
* [fetchSubClassOf](#fetchSubClassOf)
* [fetchPropertiesByURI](#fetchPropertiesByURI)
* [getQuery](#getQuery)

### Watchers

#### getProps

Loops through all given properties and adds them to the table.

##### Parameters
| Param | Type | Description |
| --- | --- | --- |
| newClass | <code>String</code> | URI of the new Ontolgy you want to load into the store |

## Schema
Schema helps you explore your ontology by showing you the properties of every class in your schema.

### Used in

TODO: where is the component called?


### How to call it

TODO: how is the Component called?


### Imports
* [Propertytable](#Propertytable)
* [HELPERS](/helpers#helpers)
* [fetchClasses](#fetchClasses)
* [fetchSubClassOf](#fetchSubClassOf)
* [fetchPropertiesByURI](#fetchPropertiesByURI)

### Props

| Prop | Type | Description |
| --- | --- | --- |
| uri | <code>String</code> | URI of the ontology that is to be used. |

### Components
* [Propertytable](#Propertytable)

### Methods
#### getClasses
Returns the classes from your ontology if the Base URI matches 'https://vocabs.acdh.oeaw.ac.at/schema#'

##### How to call it

``` template
<option v-for="cl in getClasses()" :value="cl['?x'].URI">{{ cl['?x'].name }}</option>
```

TODO: more context (in what kind of select would you use it, what is its purpose?)


### Computed
#### getOntology
Retrieves the ontology out of the store, fetches the classes if your store is not read yet.

TODO: copy what it receives and also what exactly happens in the 'fetches the classes if your store is not read yet.'-case


## Start

Acts as the landing page of the MetaDataEditor. You can use it to navigate through the whole website.

## Store

This component is used to load external .ttl files into the store. You can upload any .ttl file as long as its structure is supported. The assigned methods will automatically be called upon selecting your file and the content of it will be stored.
### Imports
* [Load](#load)
* [Entities](#entities)
* [HELPERS](/helpers#helpers)
* [tripleCount](#tripleCount)
* [StringToStore](#StringToStore)

### Components
* [Load](#load)
* [Entities](#entities)
* [StoreStats](#StoreStats)

### Methods
#### onFileChange
This function is called as soon as a file gets selected, it checks if the used file is valid and then calls [loadTtl](#loadTtl).

TODO: PARAMS, HOW TO CALL.

#### loadTtl

Loads and reads valid .ttl files, then loads them into the store.

TODO: PARAMS, HOW TO CALL.

##### Parameters
| Param | Type | Description |
| --- | --- | --- |
| file | <code>file</code> | The file loaded into the scope. |
#### removeTtl
Removes the .ttl file from your scope. the whole Website.

## StoreModal

This Modal can be used to restore your previous session. You can also choose to discard all changes to the store made in your local store.

### Imports
* [HELPERS](/helpers#helpers)

### Data

| Name | Type  | Description |
|--|--|--|
| modalShow | `Boolean` | Shows and hides the modal |
| latestSession | `Object`| On creation, if there is an old session in your local store, it will get loaded into this object |
| date | `string`| Used to tell the user when the last session was created |

### Methods

#### discard
Deletes old session, which might be in your local store. Closes the modal.

#### restore
Loads the store of an old session to your current store, deletes the old session and closes the modal. Reloads the scope.

## StoreStats

StoreStats displays how many triples and subjects have been loaded into the store. It also provides a helpful download button, used to convert the whole store into a single .ttl file.

### Imports
* [HELPERS](/helpers#helpers)

### Methods
#### downloadBlob

Since there is no clean way to create and download a file in Vue, this function creates a new DOM 'a' element, sets its attributes to the ones needed and simulates a click, triggering the download Sequence.

### Data

| Name | Type  | Description |
|--|--|--|
| blob | `blob` | The blob to be downloaded, every time the download button is pressed it gets updated |

Continue reading with [Helpers](/Helpers#helpers)
