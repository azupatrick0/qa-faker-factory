# qa-faker-factory

[![npm version](https://img.shields.io/npm/v/qa-faker-factory?color=brightgreen&label=npm)](https://www.npmjs.com/package/qa-faker-factory)
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Test](https://github.com/azupatrick0/qa-faker-factory/actions/workflows/ci.yml/badge.svg)](https://github.com/azupatrick0/qa-faker-factory/actions/workflows/ci.yml)

A comprehensive, lightweight test data factory generating realistic fake data for Quality Assurance (QA) and testing workflows.  
Built on [faker-js/faker](https://github.com/faker-js/faker) to produce diverse domain-specific mock data objects for rapid testing and prototyping.

---

## Features

- Generate fake **Users**, **Addresses**, **Products**, **Orders**, **Companies**, **Vehicles**, **Bank Accounts**, and more
- Includes test data for specialized domains like **Medical Records**, **Travel Bookings**, **Support Tickets**, and **Subscription Plans**
- Customizable options (e.g., country codes for phone numbers)
- Lightweight and easy to integrate in Node.js projects
- CLI and mock JSON data generation (planned / extendable)
- Ideal for frontend, backend, and API testing

---

## Installation

```bash
npm install qa-faker-factory
```

---


## Usage

```js
const {
  generateUser,
  generateAddress,
  generateProduct,
  generateOrder,
  generateCompany,
  generatePaymentCard,
  generateVehicle,
  generateBankAccount,
  generateJobProfile,
  generateEducationRecord,
  generateSocialProfile,
  generateMedicalRecord,
  generateTravelBooking,
  generateSupportTicket,
  generateSubscriptionPlan,
  generateChatMessage
} = require('qa-faker-factory');

// Generate a random user with default +1 country code for phone
const user = generateUser();
console.log(user);

// Generate an address with a specified country
const address = generateAddress({ country: 'United States' });
console.log(address);

// Generate an order with user's phone country code override
const order = generateOrder({ countryCode: '+1' });
console.log(order);
```


## API Reference
```js
generateUser(options) - Generate a random user object.

Parameters:

options (optional):

countryCode (string) - Country dialing code for phone number (default: '+1')

Returns:

{
  firstName: string,
  lastName: string,
  email: string,
  phone: string, // formatted with countryCode
  gender: 'Male' | 'Female' | 'Other'
}
```
```js
generateAddress(options) - Generate a random address.

Parameters:

options (optional):

country (string) - Country name (default: 'United States')

Returns:

{
  street: string,
  city: string,
  state: string,
  postalCode: string,
  country: string
}
```

```js
generateProduct() - Generate a random product.

Returns:

{
  name: string,
  price: string, // in Currency e.g ($)
  category: string,
  stock: number
}
```

```js
generateOrder(options) - Generate an order object including a user, product, quantity, and total price.

Parameters:

options (optional):

countryCode (string) - Passed to generateUser to generate a user based on the country

Returns:

{
  user: object,
  product: object,
  quantity: number,
  total: string // total price string with currency symbol
}
```
```js
generateCompany() - Generate a random company.

Returns:

{
  name: string,
  catchPhrase: string,
  industry: string,
  website: string
}
```
```js
generatePaymentCard() - Generate a random payment card.

Returns:

{
  type: string,
  number: string,
  cvv: string,
  expiry: string // YYYY-MM-DD format
}
```

```js
generateVehicle() - Generate a vehicle profile.

Returns:

{
  make: string,
  model: string,
  type: string,
  vin: string,
  registrationNumber: string
}
```
```js
generateBankAccount() - Generate a bank account.

Returns:

{
  bankName: string,
  accountNumber: string,
  iban: string,
  bic: string
}
```
```js
generateJobProfile() - Generate a job profile.

Returns:

{
  title: string,
  area: string,
  type: string,
  company: string
}
```
```js
generateEducationRecord() - Generate an education record.

Returns:

{
  institution: string,
  degree: string,
  field: string,
  graduationYear: number
}
```
```js
generateSocialProfile() - Generate a social media profile.

Returns:

{
  username: string,
  email: string,
  avatar: string, // URL
  url: string,
  followers: number
}
```
```js
generateMedicalRecord() - Generate a medical record.

Returns:

{
  patientId: string,
  bloodType: string,
  allergies: string[],
  diagnosis: string,
  lastVisit: string // YYYY-MM-DD format
}
```
```js
generateTravelBooking() - Generate a travel booking.

Returns:

{
  destination: string,
  departureDate: string, // YYYY-MM-DD
  returnDate: string, // YYYY-MM-DD
  airline: string,
  bookingRef: string
}
```
```js
generateSupportTicket() - Generate a support ticket.

Returns:

{
  ticketId: string,
  subject: string,
  status: 'open' | 'pending' | 'closed',
  priority: 'low' | 'medium' | 'high',
  createdAt: string // ISO timestamp
}
```
```js
generateSubscriptionPlan() - Generate a subscription plan.

Returns:

{
  planName: string,
  pricePerMonth: string, // e.g. "$19.99"
  features: string[]
}
```
```js
generateChatMessage() - Generate a chat message.

Returns: 

{
  messageId: string,
  sender: string,
  message: string,
  timestamp: string // ISO timestamp
}
```

---

## Contributing


Contributions are welcome! If you'd like to improve this project, follow these steps:

- Fork the repository

- Create a new branch 
```js
(git checkout -b feature-branch)
```

- Make your changes

- Commit your changes

```js
(git commit -m 'Add new feature')
```

- Push to the branch (git push origin feature-branch)

- Open a Pull Request

Please make sure your code follows the existing style and includes relevant tests where applicable.

---
## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
You are free to use, modify, and distribute this software as permitted under the terms of the license.