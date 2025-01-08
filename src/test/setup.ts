// src/test/setup.ts
import '@testing-library/jest-dom';  // For extended DOM assertions
import { cleanup } from '@testing-library/react';  // Import cleanup from React Testing Library

afterEach(() => {
  cleanup();  // Clean up after each test
});
