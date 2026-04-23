import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import { describe, expect, it, afterEach } from 'vitest';
import {
  BentoGridA,
  BentoGridB,
  BentoGridC,
  BentoGridD,
  BentoGridE,
  BentoGridF,
  Card,
  Grid,
} from '../src';

afterEach(() => {
  cleanup();
});

describe('Grid', () => {
  it('renders fixed columns and gap with inline styles', () => {
    render(
      <Grid cols={4} gap={6} data-testid="grid">
        <div>One</div>
      </Grid>
    );
    const grid = screen.getByTestId('grid');
    expect(grid).toHaveStyle({
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
      gap: '1.5rem',
    });
  });
});

describe('Card', () => {
  it('renders bento variant', () => {
    render(<Card variant="bento" data-testid="card-bento">Content</Card>);
    expect(screen.getByTestId('card-bento')).toHaveClass('bg-[#141414]');
  });
});

describe('BentoGrid Components', () => {
  it('renders BentoGridA', () => {
    render(<BentoGridA data-testid="bento-a" />);
    expect(screen.getByText('Epic Web')).toBeInTheDocument();
  });

  it('renders BentoGridB', () => {
    render(<BentoGridB data-testid="bento-b" />);
    expect(screen.getByText('Scenarios made easy with Taipy Studio.')).toBeInTheDocument();
  });

  it('renders BentoGridC', () => {
    render(<BentoGridC data-testid="bento-c" />);
    expect(screen.getByText('Seamless Automatic Payments')).toBeInTheDocument();
  });

  it('renders BentoGridD', () => {
    render(<BentoGridD data-testid="bento-d" />);
    expect(screen.getByText('Pragadeswaran')).toBeInTheDocument();
  });

  it('renders BentoGridE', () => {
    render(<BentoGridE data-testid="bento-e" />);
    expect(screen.getByText('Works Gallery')).toBeInTheDocument();
  });

  it('renders BentoGridF', () => {
    render(<BentoGridF data-testid="bento-f" />);
    expect(screen.getByText('Technical Mastery')).toBeInTheDocument();
  });
});