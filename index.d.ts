export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  gender: 'Male' | 'Female' | 'Other';
  password?: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  industry: string;
  website: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export interface Product {
  name: string;
  price: string;
  category: string;
  stock: number;
}

export interface Order {
  user: User;
  product: Product;
  quantity: number;
  total: string;
}

export interface PaymentCard {
  type: string;
  number: string;
  cvv: string;
  expiry: string;
}

export interface Vehicle {
  make: string;
  model: string;
  type: string;
  vin: string;
  registrationNumber: string;
}

export interface BankAccount {
  bankName: string;
  accountNumber: string;
  iban: string;
  bic: string;
}

export interface JobProfile {
  title: string;
  area: string;
  type: string;
  company: string;
}

export interface EducationRecord {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  description: string;
}

export interface SocialProfile {
  username: string;
  email: string;
  avatar: string;
  url: string;
  followers: number;
}

export interface MedicalRecord {
  patientId: string;
  bloodType: string;
  allergies: string[];
  diagnosis: string;
  lastVisit: string;
}

export interface TravelBooking {
  destination: string;
  departureDate: string;
  returnDate: string;
  airline: string;
  bookingRef: string;
}

export interface SupportTicket {
  ticketId: string;
  subject: string;
  status: 'open' | 'pending' | 'closed';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export interface SubscriptionPlan {
  planName: string;
  pricePerMonth: string;
  features: string[];
}

export interface ChatMessage {
  messageId: string;
  sender: string;
  message: string;
  timestamp: string;
}

// Generator functions
export function generateUser(options?: Partial<User>): User;
export function generateCompany(options?: Partial<Company>): Company;
export function generateAddress(options?: Partial<Address>): Address;
export function generateProduct(options?: Partial<Product>): Product;
export function generateOrder(options?: Partial<Order>): Order;
export function generatePaymentCard(): PaymentCard;
export function generateVehicle(): Vehicle;
export function generateBankAccount(): BankAccount;
export function generateJobProfile(): JobProfile;
export function generateEducationRecord(): EducationRecord;
export function generateSocialProfile(): SocialProfile;
export function generateMedicalRecord(): MedicalRecord;
export function generateTravelBooking(): TravelBooking;
export function generateSupportTicket(): SupportTicket;
export function generateSubscriptionPlan(): SubscriptionPlan;
export function generateChatMessage(): ChatMessage;
