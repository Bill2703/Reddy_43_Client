import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";
import * as matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import App from './App';

describe('App', () => {
    beforeEach(() => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      );
    });
  
    afterEach(() => {
      cleanup();
    });
  
    it('renders the Home page by default', () => {
      const homePage = screen.getByText(/discover/i);
      expect(homePage).toBeInTheDocument();
    });
  
  });
