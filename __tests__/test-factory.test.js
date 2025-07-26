// __tests__/test-factory.test.js

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
} = require('../index');

describe('QA Faker Factory', () => {

  test('generateUser produces expected properties', () => {
    const user = generateUser({ countryCode: '+1' });
    expect(user).toHaveProperty('firstName');
    expect(user).toHaveProperty('lastName');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('phone');
    expect(user.phone.startsWith('+1')).toBe(true);
    expect(user).toHaveProperty('gender');
  });

  test('generateAddress produces expected properties', () => {
    const address = generateAddress({ country: 'USA' });
    expect(address).toHaveProperty('street');
    expect(address).toHaveProperty('city');
    expect(address).toHaveProperty('state');
    expect(address).toHaveProperty('postalCode');
    expect(address.country).toBe('USA');
  });

  test('generateProduct produces expected properties', () => {
    const product = generateProduct();
    expect(product).toHaveProperty('name');
    expect(product).toHaveProperty('price');
    expect(product.price).toMatch(/^₦\d+/);
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('stock');
  });

  test('generateOrder produces expected properties and consistent total', () => {
    const order = generateOrder({ countryCode: '+44' });
    expect(order).toHaveProperty('user');
    expect(order.user.phone.startsWith('+44')).toBe(true);
    expect(order).toHaveProperty('product');
    expect(order).toHaveProperty('quantity');
    expect(order.quantity).toBeGreaterThanOrEqual(1);
    expect(order.quantity).toBeLessThanOrEqual(5);
    expect(order).toHaveProperty('total');

    // Check total calculation is correct
    const price = parseInt(order.product.price.replace('₦', ''), 10);
    expect(order.total).toBe(`₦${price * order.quantity}`);
  });

  test('generateCompany produces expected properties', () => {
    const company = generateCompany();
    expect(company).toHaveProperty('name');
    expect(company).toHaveProperty('catchPhrase');
    expect(company).toHaveProperty('industry');
    expect(company).toHaveProperty('website');
  });

  test('generatePaymentCard produces expected properties', () => {
    const card = generatePaymentCard();
    expect(card).toHaveProperty('type');
    expect(card).toHaveProperty('number');
    expect(card).toHaveProperty('cvv');
    expect(card).toHaveProperty('expiry');
    expect(new Date(card.expiry).getFullYear()).toBeGreaterThan(new Date().getFullYear());
  });

  test('generateVehicle produces expected properties', () => {
    const vehicle = generateVehicle();
    expect(vehicle).toHaveProperty('make');
    expect(vehicle).toHaveProperty('model');
    expect(vehicle).toHaveProperty('type');
    expect(vehicle).toHaveProperty('vin');
    expect(vehicle).toHaveProperty('registrationNumber');
  });

  test('generateBankAccount produces expected properties', () => {
    const account = generateBankAccount();
    expect(account).toHaveProperty('bankName');
    expect(account).toHaveProperty('accountNumber');
    expect(account).toHaveProperty('iban');
    expect(account).toHaveProperty('bic');
  });

  test('generateJobProfile produces expected properties', () => {
    const job = generateJobProfile();
    expect(job).toHaveProperty('title');
    expect(job).toHaveProperty('area');
    expect(job).toHaveProperty('type');
    expect(job).toHaveProperty('company');
  });

  test('generateEducationRecord produces expected properties', () => {

    const education = generateEducationRecord();

    expect(education).toHaveProperty('institution');
    expect(typeof education.institution).toBe('string');

    expect(education).toHaveProperty('degree');
    expect(['B.Sc.', 'M.Sc.', 'Ph.D.', 'Diploma']).toContain(education.degree);

    expect(education).toHaveProperty('fieldOfStudy');
    expect(typeof education.fieldOfStudy).toBe('string');

    expect(education).toHaveProperty('startDate');
    expect(education.startDate instanceof Date).toBe(true);

    expect(education).toHaveProperty('endDate');
    expect(education.endDate instanceof Date).toBe(true);

    expect(education).toHaveProperty('grade');
    expect(['First Class', 'Second Class Upper', 'Second Class Lower', 'Pass']).toContain(education.grade);

    expect(education).toHaveProperty('description');
    expect(typeof education.description).toBe('string');
    expect(education.description.length).toBeGreaterThan(0);

    expect(education.endDate.getTime()).toBeGreaterThan(education.startDate.getTime());
  });

  test('generateSocialProfile produces expected properties', () => {
    const social = generateSocialProfile();
    expect(social).toHaveProperty('username');
    expect(social).toHaveProperty('email');
    expect(social).toHaveProperty('avatar');
    expect(social).toHaveProperty('url');
    expect(social).toHaveProperty('followers');
  });

  test('generateMedicalRecord produces expected properties', () => {
    const medical = generateMedicalRecord();
    expect(medical).toHaveProperty('patientId');
    expect(medical).toHaveProperty('bloodType');
    expect(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).toContain(medical.bloodType);
    expect(medical).toHaveProperty('allergies');
    expect(Array.isArray(medical.allergies)).toBe(true);
    expect(medical).toHaveProperty('diagnosis');
    expect(medical).toHaveProperty('lastVisit');
  });

  test('generateTravelBooking produces expected properties', () => {
    const booking = generateTravelBooking();
    expect(booking).toHaveProperty('destination');
    expect(booking).toHaveProperty('departureDate');
    expect(booking).toHaveProperty('returnDate');
    expect(booking).toHaveProperty('airline');
    expect(booking).toHaveProperty('bookingRef');
  });

  test('generateSupportTicket produces expected properties', () => {
    const ticket = generateSupportTicket();
    expect(ticket).toHaveProperty('ticketId');
    expect(ticket).toHaveProperty('subject');
    expect(ticket).toHaveProperty('status');
    expect(['open', 'pending', 'closed']).toContain(ticket.status);
    expect(ticket).toHaveProperty('priority');
    expect(['low', 'medium', 'high']).toContain(ticket.priority);
    expect(ticket).toHaveProperty('createdAt');
  });

  test('generateSubscriptionPlan produces expected properties', () => {
    const plan = generateSubscriptionPlan();
    expect(plan).toHaveProperty('planName');
    expect(plan.planName).toMatch(/Plan$/);
    expect(plan).toHaveProperty('pricePerMonth');
    expect(plan.pricePerMonth).toMatch(/^\$\d+/);
    expect(plan).toHaveProperty('features');
    expect(Array.isArray(plan.features)).toBe(true);
    expect(plan.features.length).toBeGreaterThan(0);
  });

  test('generateChatMessage produces expected properties', () => {
    const msg = generateChatMessage();
    expect(msg).toHaveProperty('messageId');
    expect(msg).toHaveProperty('sender');
    expect(msg).toHaveProperty('message');
    expect(msg).toHaveProperty('timestamp');
  });
});
