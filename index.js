// qa-faker-factory/index.js
const { faker } = require('@faker-js/faker');

function generateUser(options = {}) {
  const countryCode = options.countryCode || '+1';
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    phone: `${countryCode} ${faker.string.numeric(10)}`,
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other'])
  };
}

function generateAddress(options = {}) {
  const country = options.country || faker.location.country();
  return {
    street: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country
  };
}

function generateProduct() {
  return {
    name: faker.commerce.productName(),
    price: `₦${faker.commerce.price({ min: 1000, max: 20000, dec: 0 })}`,
    category: faker.commerce.department(),
    stock: faker.number.int({ min: 0, max: 500 })
  };
}

function generateOrder(options = {}) {
  const user = generateUser(options);
  const product = generateProduct();
  const quantity = faker.number.int({ min: 1, max: 5 });
  return {
    user,
    product,
    quantity,
    total: `₦${parseInt(product.price.replace('₦', '')) * quantity}`
  };
}

function generateCompany() {
  return {
    name: faker.company.name(),
    catchPhrase: faker.company.catchPhrase(),
    industry: faker.company.buzzNoun(),
    website: faker.internet.url()
  };
}

function generatePaymentCard() {
  return {
    type: faker.finance.creditCardIssuer(),
    number: faker.finance.creditCardNumber(),
    cvv: faker.finance.creditCardCVV(),
    expiry: faker.date.future({ years: 3 }).toISOString().split('T')[0]
  };
}

function generateVehicle() {
  return {
    make: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    vin: faker.vehicle.vin(),
    registrationNumber: faker.string.alphanumeric(8).toUpperCase()
  };
}

function generateBankAccount() {
  return {
    bankName: faker.finance.accountName(),
    accountNumber: faker.finance.accountNumber(),
    iban: faker.finance.iban(),
    bic: faker.finance.bic()
  };
}

function generateJobProfile() {
  return {
    title: faker.person.jobTitle(),
    area: faker.person.jobArea(),
    type: faker.person.jobType(),
    company: faker.company.name()
  };
}

function generateEducationRecord() {
  return {
    institution: faker.company.name(),
    degree: faker.helpers.arrayElement(['B.Sc.', 'M.Sc.', 'Ph.D.', 'Diploma']),
    fieldOfStudy: faker.person.jobArea(),
    startDate: faker.date.past({ years: 10 }),
    endDate: faker.date.recent(),
    grade: faker.helpers.arrayElement(['First Class', 'Second Class Upper', 'Second Class Lower', 'Pass']),
    description: faker.lorem.sentences(2)
  };
}

function generateSocialProfile() {
  return {
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    url: faker.internet.url(),
    followers: faker.number.int({ min: 0, max: 100000 })
  };
}

function generateMedicalRecord() {
  return {
    patientId: faker.string.uuid(),
    bloodType: faker.helpers.arrayElement(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
    allergies: faker.helpers.arrayElements(['Penicillin', 'Peanuts', 'Latex', 'Bee stings', 'Dust'], 2),
    diagnosis: faker.lorem.words(3),
    lastVisit: faker.date.past().toISOString().split('T')[0]
  };
}

function generateTravelBooking() {
  return {
    destination: faker.location.city(),
    departureDate: faker.date.future().toISOString().split('T')[0],
    returnDate: faker.date.future({ years: 1 }).toISOString().split('T')[0],
    airline: faker.company.name(),
    bookingRef: faker.string.alphanumeric(6).toUpperCase()
  };
}

function generateSupportTicket() {
  return {
    ticketId: faker.string.uuid(),
    subject: faker.lorem.sentence(),
    status: faker.helpers.arrayElement(['open', 'pending', 'closed']),
    priority: faker.helpers.arrayElement(['low', 'medium', 'high']),
    createdAt: faker.date.past().toISOString()
  };
}

function generateSubscriptionPlan() {
  return {
    planName: faker.commerce.productAdjective() + ' Plan',
    pricePerMonth: `$${faker.commerce.price({ min: 5, max: 100, dec: 2 })}`,
    features: faker.helpers.arrayElements([
      'Unlimited access', 'Priority support', 'Custom reports', 'Team management', 'API access'
    ], 3)
  };
}

function generateChatMessage() {
  return {
    messageId: faker.string.uuid(),
    sender: faker.internet.userName(),
    message: faker.lorem.sentences(2),
    timestamp: faker.date.recent().toISOString()
  };
}

module.exports = {
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
};
