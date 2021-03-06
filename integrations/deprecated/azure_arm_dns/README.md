# @datafire/azure_arm_dns

Client library for DnsManagementClient

## Installation and Usage
```bash
npm install --save @datafire/azure_arm_dns
```
```js
let azure_arm_dns = require('@datafire/azure_arm_dns').create();

azure_arm_dns.Zones_List({
  "api-version": "",
  "subscriptionId": ""
}).then(data => {
  console.log(data);
});
```

## Description

The DNS Management Client.

## Actions

### Zones_List
Lists the DNS zones in all resource groups in a subscription.


```js
azure_arm_dns.Zones_List({
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * $top `integer`: The maximum number of DNS zones to return. If not specified, returns up to 100 zones.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [ZoneListResult](#zonelistresult)

### Zones_ListByResourceGroup
Lists the DNS zones within a resource group.


```js
azure_arm_dns.Zones_ListByResourceGroup({
  "resourceGroupName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [ZoneListResult](#zonelistresult)

### Zones_Delete
Deletes a DNS zone. WARNING: All DNS records in the zone will also be deleted. This operation cannot be undone.


```js
azure_arm_dns.Zones_Delete({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * If-Match `string`: The etag of the DNS zone. Omit this value to always delete the current zone. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [ZoneDeleteResult](#zonedeleteresult)

### Zones_Get
Gets a DNS zone. Retrieves the zone properties, but not the record sets within the zone.


```js
azure_arm_dns.Zones_Get({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [Zone](#zone)

### Zones_CreateOrUpdate
Creates or updates a DNS zone. Does not modify DNS records within the zone.


```js
azure_arm_dns.Zones_CreateOrUpdate({
  "resourceGroupName": "",
  "zoneName": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * parameters **required** [Zone](#zone)
  * If-Match `string`: The etag of the DNS zone. Omit this value to always overwrite the current zone. Specify the last-seen etag value to prevent accidentally overwritting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new DNS zone to be created, but to prevent updating an existing zone. Other values will be ignored.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [Zone](#zone)

### RecordSets_ListByDnsZone
Lists all record sets in a DNS zone.


```js
azure_arm_dns.RecordSets_ListByDnsZone({
  "resourceGroupName": "",
  "zoneName": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### RecordSets_ListByType
Lists the record sets of a specified type in a DNS zone.


```js
azure_arm_dns.RecordSets_ListByType({
  "resourceGroupName": "",
  "zoneName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of record sets to enumerate.
  * $top `integer`: The maximum number of record sets to return. If not specified, returns up to 100 record sets.
  * $recordsetnamesuffix `string`: The suffix label of the record set name that has to be used to filter the record set enumerations. If this parameter is specified, Enumeration will return only records that end with .<recordSetNameSuffix>
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSetListResult](#recordsetlistresult)

### RecordSets_Delete
Deletes a record set from a DNS zone. This operation cannot be undone.


```js
azure_arm_dns.RecordSets_Delete({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set. Record sets of type SOA cannot be deleted (they are deleted when the DNS zone is deleted).
  * If-Match `string`: The etag of the record set. Omit this value to always delete the current record set. Specify the last-seen etag value to prevent accidentally deleting any concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
*Output schema unknown*

### RecordSets_Get
Gets a record set.


```js
azure_arm_dns.RecordSets_Get({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSet](#recordset)

### RecordSets_Update
Updates a record set within a DNS zone.


```js
azure_arm_dns.RecordSets_Update({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set.
  * parameters **required** [RecordSet](#recordset)
  * If-Match `string`: The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwritting concurrent changes.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSet](#recordset)

### RecordSets_CreateOrUpdate
Creates or updates a record set within a DNS zone.


```js
azure_arm_dns.RecordSets_CreateOrUpdate({
  "resourceGroupName": "",
  "zoneName": "",
  "relativeRecordSetName": "",
  "recordType": "",
  "parameters": null,
  "api-version": "",
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * resourceGroupName **required** `string`: The name of the resource group.
  * zoneName **required** `string`: The name of the DNS zone (without a terminating dot).
  * relativeRecordSetName **required** `string`: The name of the record set, relative to the name of the zone.
  * recordType **required** `string` (values: A, AAAA, CNAME, MX, NS, PTR, SOA, SRV, TXT): The type of DNS record in this record set. Record sets of type SOA can be updated but not created (they are created when the DNS zone is created).
  * parameters **required** [RecordSet](#recordset)
  * If-Match `string`: The etag of the record set. Omit this value to always overwrite the current record set. Specify the last-seen etag value to prevent accidentally overwritting any concurrent changes.
  * If-None-Match `string`: Set to '*' to allow a new record set to be created, but to prevent updating an existing record set. Other values will be ignored.
  * api-version **required** `string`: Specifies the API version.
  * subscriptionId **required** `string`: Specifies the Azure subscription ID, which uniquely identifies the Microsoft Azure subscription.

#### Output
* output [RecordSet](#recordset)



## Definitions

### ARecord
* ARecord `object`: An A record.
  * ipv4Address `string`: The IPv4 address of this A record.

### AaaaRecord
* AaaaRecord `object`: An AAAA record.
  * ipv6Address `string`: The IPv6 address of this AAAA record.

### CloudError
* CloudError `object`
  * error [CloudErrorBody](#clouderrorbody)

### CloudErrorBody
* CloudErrorBody `object`
  * code `string`
  * details `array`
    * items [CloudErrorBody](#clouderrorbody)
  * message `string`
  * target `string`

### CnameRecord
* CnameRecord `object`: A CNAME record.
  * cname `string`: The canonical name for this CNAME record.

### MxRecord
* MxRecord `object`: An MX record.
  * exchange `string`: The domain name of the mail host for this MX record.
  * preference `integer`: The preference value for this MX record.

### NsRecord
* NsRecord `object`: An NS record.
  * nsdname `string`: The name server name for this NS record.

### PtrRecord
* PtrRecord `object`: A PTR record.
  * ptrdname `string`: The PTR target domain name for this PTR record.

### RecordSet
* RecordSet `object`: Describes a DNS record set (a collection of DNS records with the same name and type).
  * etag `string`: The etag of the record set.
  * id `string`: The ID of the record set.
  * name `string`: The name of the record set.
  * properties [RecordSetProperties](#recordsetproperties)
  * type `string`: The type of the record set.

### RecordSetListResult
* RecordSetListResult `object`: The response to a record set List operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the record sets in the response.
    * items [RecordSet](#recordset)

### RecordSetProperties
* RecordSetProperties `object`: Represents the properties of the records in the record set.
  * AAAARecords `array`: The list of AAAA records in the record set.
    * items [AaaaRecord](#aaaarecord)
  * ARecords `array`: The list of A records in the record set.
    * items [ARecord](#arecord)
  * CNAMERecord [CnameRecord](#cnamerecord)
  * MXRecords `array`: The list of MX records in the record set.
    * items [MxRecord](#mxrecord)
  * NSRecords `array`: The list of NS records in the record set.
    * items [NsRecord](#nsrecord)
  * PTRRecords `array`: The list of PTR records in the record set.
    * items [PtrRecord](#ptrrecord)
  * SOARecord [SoaRecord](#soarecord)
  * SRVRecords `array`: The list of SRV records in the record set.
    * items [SrvRecord](#srvrecord)
  * TTL `integer`: The TTL (time-to-live) of the records in the record set.
  * TXTRecords `array`: The list of TXT records in the record set.
    * items [TxtRecord](#txtrecord)
  * metadata `object`: The metadata attached to the record set.

### RecordSetUpdateParameters
* RecordSetUpdateParameters `object`: Parameters supplied to update a record set.
  * RecordSet [RecordSet](#recordset)

### Resource
* Resource `object`
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### SoaRecord
* SoaRecord `object`: An SOA record.
  * email `string`: The email contact for this SOA record.
  * expireTime `integer`: The expire time for this SOA record.
  * host `string`: The domain name of the authoritative name server for this SOA record.
  * minimumTTL `integer`: The minimum value for this SOA record. By convention this is used to determine the negative caching duration.
  * refreshTime `integer`: The refresh value for this SOA record.
  * retryTime `integer`: The retry time for this SOA record.
  * serialNumber `integer`: The serial number for this SOA record.

### SrvRecord
* SrvRecord `object`: An SRV record.
  * port `integer`: The port value for this SRV record.
  * priority `integer`: The priority value for this SRV record.
  * target `string`: The target domain name for this SRV record.
  * weight `integer`: The weight value for this SRV record.

### SubResource
* SubResource `object`
  * id `string`: Resource Id.

### TxtRecord
* TxtRecord `object`: A TXT record.
  * value `array`: The text value of this TXT record.
    * items `string`

### Zone
* Zone `object`: Describes a DNS zone.
  * etag `string`: The etag of the zone.
  * properties [ZoneProperties](#zoneproperties)
  * id `string`: Resource ID.
  * location **required** `string`: Resource location.
  * name `string`: Resource name.
  * tags `object`: Resource tags.
  * type `string`: Resource type.

### ZoneDeleteResult
* ZoneDeleteResult `object`: The response to a Zone Delete operation.
  * azureAsyncOperation `string`: Users can perform a Get on Azure-AsyncOperation to get the status of their delete Zone operations.
  * requestId `string`
  * status `string` (values: InProgress, Succeeded, Failed)
  * statusCode `string` (values: Continue, SwitchingProtocols, OK, Created, Accepted, NonAuthoritativeInformation, NoContent, ResetContent, PartialContent, MultipleChoices, Ambiguous, MovedPermanently, Moved, Found, Redirect, SeeOther, RedirectMethod, NotModified, UseProxy, Unused, TemporaryRedirect, RedirectKeepVerb, BadRequest, Unauthorized, PaymentRequired, Forbidden, NotFound, MethodNotAllowed, NotAcceptable, ProxyAuthenticationRequired, RequestTimeout, Conflict, Gone, LengthRequired, PreconditionFailed, RequestEntityTooLarge, RequestUriTooLong, UnsupportedMediaType, RequestedRangeNotSatisfiable, ExpectationFailed, UpgradeRequired, InternalServerError, NotImplemented, BadGateway, ServiceUnavailable, GatewayTimeout, HttpVersionNotSupported)

### ZoneListResult
* ZoneListResult `object`: The response to a Zone List or ListAll operation.
  * nextLink `string`: The continuation token for the next page of results.
  * value `array`: Information about the DNS zones.
    * items [Zone](#zone)

### ZoneProperties
* ZoneProperties `object`: Represents the properties of the zone.
  * maxNumberOfRecordSets `integer`: The maximum number of record sets that can be created in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.
  * nameServers `array`: The name servers for this DNS zone. This is a read-only property and any attempt to set this value will be ignored.
    * items `string`
  * numberOfRecordSets `integer`: The current number of record sets in this DNS zone.  This is a read-only property and any attempt to set this value will be ignored.


