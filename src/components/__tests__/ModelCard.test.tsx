import { render, screen, fireEvent } from '@testing-library/react';
import { ModelCard } from '../ModelCard';
import { describe, it, expect } from 'vitest';

describe('ModelCard', () => {
  const mockModel = {
    name: 'Test Model',
    description: 'Test Description'
  };

  it('renders model name and description', () => {
    render(<ModelCard model={mockModel} />);
    expect(screen.getByText('Test Model')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });

  it('opens dialog when clicked', () => {
    render(<ModelCard model={mockModel} />);
    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });
});