# @datafire/gov_bc_ca_open511
This API is DriveBC's implementation of the Open511 specification.  It provides information about known road events (traffic accidents, construction, etc.) in British Columbia, Canada.

## Operation: areas.get
Lists the geographical areas (e.g. districts) that can be used to filter events.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "The format of the response",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: events.get
The events resource provides information about road events (e.g. accidents, construction, special events). The response is a list of event elements matching the filtering parameters if any are provided. 

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "The format of the response",
      "enum": [
        "json",
        "xml"
      ]
    },
    "status": {
      "type": "string",
      "description": "Limits the response to events having a given status.",
      "enum": [
        "ALL",
        "ACTIVE",
        "ARCHIVED"
      ]
    },
    "severity": {
      "type": "string",
      "description": "Limits the response to events tagged with one of the listed severity values. The possible values are: [MINOR, MODERATE, MAJOR].  Multiple values may be listed, and should be separated by a comma. The default is to return events of any severity."
    },
    "jurisdiction": {
      "type": "string",
      "description": "Limits the response to events reported by a given jurisdiction. The value given must be specified as the ID of a jurisdiction returned by the /jurisdiction resource. The default is to return events from all jurisdictions."
    },
    "event_type": {
      "type": "string",
      "description": "Limits the response to events tagged with one of the listed event types.  The possible values include: [CONSTRUCTION, INCIDENT, SPECIAL_EVENT, WEATHER_CONDITION].  Multiple values may be listed, and should be separated by a comma. The default is to return events of all types.",
      "enum": [
        "CONSTRUCTION",
        "SPECIAL_EVENT",
        "INCIDENT",
        "WEATHER_CONDITION",
        "ROAD_CONDITION"
      ]
    },
    "created": {
      "type": "string",
      "description": "Limits the response to events based on the date and time that the event was created (first recorded). The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events create after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time.  The default is to return events with any creation time."
    },
    "updated": {
      "type": "string",
      "description": "Limits the response to events based on the date and time that the event was last updated. The date/time must be specified in ISO 8601 format, and may be prefixed by one of the following operators [<, <=, >, >=] to indicate 'before', 'before or equal to', 'after' or 'after or equal to' respectively.  For example, >2013-12-01T12:00:00Z requests all events updated after Dec. 1, 2015 at 12pm (noon) Coordinated Universal Time. The default is to return events with any update time"
    },
    "road_name": {
      "type": "string",
      "description": "Limits the response to events on a given road as specified by the road name.  An example of a valid road name is 'Highway 1'. The default is to return events on all roads."
    },
    "area_id": {
      "type": "string",
      "description": "Limits the response to events within one of the specified areas.  An area must be specified as the ID of an item returned by the /areas resource. For example: an area_id of 'drivebc.ca/1' limits events to those within the Lower Mainland District.  The default is to return events in all areas."
    },
    "bbox": {
      "type": "string",
      "description": "Limits the response to events that fall within the specified geographical bounding box.  The bbox format must be '[min longitude],[min latitude],[max longitude],[max latitude]' with WGS84 coordinates.  For example: -123.45,48.99,-122.45,49.49.  The default is to return events in all geographical locations."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: jurisdiction.get
Lists the jurisdictions publishing data through this Open511 API implementation

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "The format of the response",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: jurisdictiongeography.get
Provides the geographical boundaries for all the jurisdictions.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "format": {
      "type": "string",
      "description": "The format of the response",
      "enum": [
        "json",
        "xml"
      ]
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```