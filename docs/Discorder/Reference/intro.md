---
sidebar_position: 1
---

# API Reference

## Base URL

- Type: `string`

`https://example.com/`

## Channel

- Type: `object`

```ts
type Channel = {
	guild: Guild; // The guild the channel is in
	id: string; // The ID of the channel
	name: string; // The name of the channel
};
```

- [Guild](#guild)

## Embed

- Type: `object`

```ts
type Embed = {
	author?: EmbedAuthor; // Author information
	color?: number; // Color code of the embed
	description?: string; // Description of embed
	fields?: EmbedField[]; // Fields information
	footer?: EmbedFooter; // Footer information
	image?: EmbedImage; // Image information
	timestamp?: number; // Timestamp of embed content
	title?: string; // Title of embed
	url?: string; // Url of embed
};
```

- [EmbedAuthor](#embedauthor)
- [EmbedField](#embedfield)
- [EmbedFooter](#embedfooter)
- [EmbedImage](#embedimage)

## EmbedAuthor

- Type: `object`

```ts
type EmbedAuthor = {
	iconUrl?: string; // Url of author icon
	name: string; // Name of author
	url?: string; // Url of author
};
```

## EmbedField

- Type: `object`

```ts
type EmbedField = {
	inline?: boolean; // Whether or not this field should display inline
	name: string; // Name of the field
	value: string; // Value of the field
};
```

## EmbedFooter

- Type: `object`

```ts
type EmbedFooter = {
	text: string; // Footer text
	iconUrl?: string; // Url of footer icon
};
```

## EmbedImage

- Type: `object`

```ts
type EmbedImage = {
	url: string; // Source url of image
};
```

## Guild

- Type: `object`

```ts
type Guild = {
	icon: string | null; // Guild icon's hash
	id: string; // The guild's ID
	name: string; // The guild's name
};
```

## Member

- Type: `object`

```ts
type Member = {
	avatar?: string | null; // The member's guild avatar hash
	nick?: string | null; // This user's guild nickname
};
```

## Message

- Type: `object`

```ts
type Message = {
	attachments?: MessageAttachment[]; // Any attached files to the message
	author: User; // The author of this message
	content?: string; // The contents of the message
	editedTimestamp: number | null; // When this message was edited (or null if never)
	embeds?: Embed[]; // Any embedded content
	id?: string; // The ID of the message
	interaction?: MessageInteraction; // If the message is a response to an interaction, the interaction it responds to
	member?: Member; // The member properties for this message's author
	mentionChannels?: Channel[]; // The channels specifically mentioned in this message
	mentionRoles?: Role[]; // The roles specifically mentioned in this message
	mentions?: User[]; // The users specifically mentioned in the message
	messageReference?: MessageReference; // The data showing the source of a crosspost, channel follow add, pin, or reply message
	thread?: ThreadChannel; // The thread that was started from this message, includes thread member object
	timestamp: number; // An ISO8601 timestamp representing when this message was sent
	type: number; // The type of the message
};
```

- [Channel](#channel)
- [Embed](#embed)
- [Member](#member)
- [MessageAttachment](#messageattachment)
- [MessageInteraction](#messageinteraction)
- [MessageReference](#messagereference)
- [Role](#role)
- [ThreadChannel](#threadchannel)
- [User](#user)

## MessageAttachment

- Type: `object`

```ts
type MessageAttachment = {
	contentType?: string; // The attachment's media type
	url: string; // The source URL of the file
};
```

## MessageInteraction

- Type: `object`

```ts
type MessageInteraction = {
	member?: Member;
	name: string;
	user: User;
};
```

- [Member](#member)
- [User](#user)

## MessageReference

- Type: `object`

```ts
type MessageReference = {
	messageId?: string;
};
```

## Role

- Type: `object`

```ts
type Role = {
	id: string; // Role id
	name: string; // Role name
};
```

## ThreadChannel

- Type: `object`

```ts
type ThreadChannel = {
	name: string; // The name of the channel
};
```

## User

- Type: `object`

```ts
type User = {
	accentColor?: number | null; // The user's banner color encoded as an integer representation of hexadecimal color code
	avatar: string | null; // The user's avatar hash
	banner?: string | null; // The user's banner hash
	bot?: boolean; // Whether the user belongs to an OAuth2 application
	discriminator: string; // The user's 4-digit discord-tag
	id: string; // The user's id
	username: string; // The user's username, not unique across the platform
};
```
