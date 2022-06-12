---
sidebar_position: 2
---

# Upload a transcript

To upload a transcript all you need to do is sending a `POST` request to the [base URL](Reference/intro#base-url).

## Request body

- Type: `object`

```ts
type Request = {
	channel: Channel; // The channel of the ticket
	messages: Message[]; // The messages inside of the ticket
};
```

- [Channel](Reference/intro#channel)
- [Message](Reference/intro#message)
