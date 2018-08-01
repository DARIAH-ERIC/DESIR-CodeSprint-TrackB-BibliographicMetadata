# Helpers

Helper mixin for functions completing multiple tasks throughout the application as well as a single configuration point for API-endpoints.


## Config

The config-object contains information for the different APIs used in this application. the full object is found below.

The method <code>buildFetchers</code> builds an object using `axios.create` to create callable functions for each of the endpoints.
this Object is then saved as APIS in data.
So the call:
<code>APIS.ARCHE.ORGANISATIONS.get('OEAW')</code> is like calling a get on: https://fedora.hephaistos.arz.oeaw.ac.at/browser/api/organisations/OEAW?_format=json.
This is only used inside this helper index. Outside of it, the functions of this Mixin should be used. If a functionality is needed but not provided by any of the functions, just write a new function.

``` config
const CONFIG = {
  ARCHE: {
    BASEURL: 'https://fedora.hephaistos.arz.oeaw.ac.at/browser/api/',
    ENDPOINTS: {
      PERSONS: 'persons/',
      BASE: '',
      ORGANISATIONS: 'organisations/',
      PLACES: 'places/',
      CONCEPTS: 'concepts/',
      PUBLICATIONS: 'publications/',
      METADATA: 'getMetadata/',
    },
    TIMEOUT: 1000,
    PARAMS: {
      _format: 'json',
    },
    HEADERS: {},
  },
  VIAF: {
    BASEURL: 'https://www.viaf.org/viaf/',
    ENDPOINTS: {
      BASE: '',
      SEARCH: 'search',
    },
    TIMEOUT: 5000,
    PARAMS: {
      httpAccept: 'application/json',
    },
    HEADERS: {},
  },
};
```

## Methods
Methods used by outside Components.

### getMetadataByType

Receives a metadata-schema for a given type. Can be used to automatically create a form out of it.  

#### Used by

* [FormFromSchema](/#FormFromSchema)


#### Parameters

| Param | Type | Description |
| --- | --- | --- |
| type | <code>String</code> | The type of metadata-schema you want to receive. |


#### How to call it

``` FormFromSchema
this.getMetadataByType(this.type).then((res) => {
  this.setSchema({ name: this.type, schema: res });
  this.loading = false;
});
```
Real example from [FormFromSchema](/components#FormFromSchema) where it is used on create to get the corresponding schema to build a form for it.
The [setSchema]()


### getViafByID

Receives data from (https://viaf.org) for a given id (Promise.resolve). If the request fails, an Error is returned.(Promise.reject).

Returns a Promise in every case.

the functions calls APIS.VIAF.BASE.get(id).

Note: this function might currently not work. See issue [10823](https://redmine.acdh.oeaw.ac.at/issues/10823) for the current status of the issue.

#### Used by

* [FundamentEntity](/#FundamentEntity)


#### Parameters

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code>  | The viaf id from which you want to get viaf-data. |


#### How to call it

``` FundamentEntity
this.getViafByID(this.uri.substr(this.uri.lastIndexOf('/')))
.then((res) => {
  this.entity.title = `${res['ns1:mainHeadings']['ns1:data'][0]['ns1:text'] ?
  res['ns1:mainHeadings']['ns1:data'][0]['ns1:text'] : res['ns1:mainHeadings']['ns1:data']['ns1:text']}`;

  this.entity.desc = `Born: ${res['ns1:birthDate']},
                      Died: ${res['ns1:deathDate']},
                      Nationality: ${res['ns1:nationalityOfEntity']['ns1:data']['ns1:text']},`;
  this.entity.type = 'VIAF';
});
```
real example from [FundamentEntity](/#FundamentEntity), where it is used to receive viaf-data of a received viaf-url from arche. This data is displayed as a bootstrap card (currently doesn't render).



### getArcheByID

Receives data of a given type for a given id from arche (Promise.resolve). if the Request fails, an Error is returned (Promise.reject).

Returns a Promise in every case.

for that it calls `APIS.ARCHE.[type].get(id)`.
`type` and `id` being your specified parameters.

#### Used by

* [FundamentEntity](/#FundamentEntity)
* [AutocompArche](/#AutocompArche)


#### Parameters

| Param | Type | Description |
| --- | --- | --- |
| id | <code>String</code> | The identifier from wich you want to receive data from Arche.<br> NOT NECESSARILY AN ID-NUMBER: In the case of PERSON, you would type a name. |
| type | <code>String</code> | The type of which your identifier is. Possible types are found [here](#Possible-types). |

#### How to call it

``` AutocompArche
vm.getArcheByID(escape(search), vm.type)
.then((res) => {
  /* eslint no-console: ["error", { allow: ["log"] }] */
  if (Array.isArray(res)) vm.options = res;
  else vm.options = [];
  loading(false);
});
```
real example from [AutocompArche](/#AutocompArche) where it is used to update the selectable options using the typed input from the user. (Note: in this example 'vm' is, what usually will be 'this'. Here it is 'vm' because the code-section is wrapped in a debounce function to only update when the user stops typing.)





### setInitialData
This function can be used to set data to any key to vm (this). Also usable to set an error to this.error. The function currently is never used.


#### Params

| Param | Type | Description |
| --- | --- | --- |
| err | Since the display of this Error is not implemented yet, a type has also yet to be specified.  | An ERROR you want to display to your users. only if not equal to true, the other parameters become relevant. |
| key | `String` | The key for whatever you specify in your post-param.  |
| post | `anything`| whatever you want to add to the vm. |

#### How to call it

``` Example

this.setInitialData(null, 'hello', 'Hello World!');

//now this.hello -> 'hello World!''

```

### filterModelBeforeUpload

This function is for cleaning up models before they can be used in [objectToStore](/store#objectToStore)
It is specific for Objects from [FormFromSchema](/components#FormFromSchema) that use any component, which v-model returns an object. In our case it is the [AutocompArche-component](/components#AutocompArche).

it loops through all the key value pairs and if it finds an object it redefines the key to only the ARCHE identifier of the object using [filterForArcheID](#filterForArcheID)


#### Params

| Param | Type | Description |
| --- | --- | --- |
| model | `Object` [from FormFromSchema]  | looks like this: [Example obj parameter](/store#Example-obj-parameter) |

#### How it is called
``` FormFromSchema
this.objectToStore({ obj: this.filterModelBeforeUpload(this.model),
  schema: this.schema[this.type] });
```
Real Example from FormFromSchema's [submit](/components#submit) function  


### filterForArcheID

Short helper function to find an Arche-Identifier inside an Object.
used in [filterModelBeforeUpload](#filterModelBeforeUpload).

since it only a one liner, here is the code:

 ``` helpers
 filterForArcheID(obj) {
   return obj.identifiers.filter(str => str.indexOf('https://id.acdh.oeaw.ac.at') > -1)[0];
 },
 ```



#### Params

| Param | Type | Description |
| --- | --- | --- |
| obj | Object | Object returned from an [getArcheByID](#getArcheByID) |
