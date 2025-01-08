import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from '../Sidebar';
import { describe, it, expect, vi } from 'vitest';

describe('Sidebar', () => {
  const mockProps = {
    selectedType: 'chat' as const,
    onTypeSelect: vi.fn(),
    isCollapsed: false,
    onToggle: vi.fn(),
  };

  it('renders model library title', () => {
    render(<Sidebar {...mockProps} />);
    expect(screen.getByText('Model Library')).toBeInTheDocument();
  });

  it('calls onToggle when toggle button is clicked', () => {
    render(<Sidebar {...mockProps} />);
    fireEvent.click(screen.getByRole('button'));
    expect(mockProps.onToggle).toHaveBeenCalled();
  });

  it('calls onTypeSelect when model type is selected', () => {
    render(<Sidebar {...mockProps} />);
    fireEvent.click(screen.getByText('Chat Models'));
    expect(mockProps.onTypeSelect).toHaveBeenCalledWith('chat');
  });
});