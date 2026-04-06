import { render, screen } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import {
  BentoGridA,
  BentoGridB,
  BentoGridC,
  BentoGridD,
  BentoGridE,
  Card,
  Grid,
} from '../src';

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

  it('renders supported responsive Tailwind column classes', () => {
    render(
      <Grid cols={{ sm: 1, md: 2, lg: 4 }} data-testid="grid-responsive">
        <div>One</div>
      </Grid>
    );

    expect(screen.getByTestId('grid-responsive')).toHaveClass(
      'grid',
      'sm:grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-4'
    );
  });
});

describe('Card', () => {
  it('renders slot content', () => {
    render(
      <Card
        header={<div>Header</div>}
        media={<img alt="Preview" src="/preview.png" />}
        footer={<button type="button">Action</button>}
      >
        <p>Body</p>
      </Card>
    );

    expect(screen.getByText('Header')).toBeInTheDocument();
    expect(screen.getByAltText('Preview')).toBeInTheDocument();
    expect(screen.getByText('Body')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });
});

describe('Bento grids', () => {
  it('renders BentoGridA with the expected responsive columns', () => {
    render(
      <BentoGridA data-testid="grid-a">
        <div>First</div>
      </BentoGridA>
    );

    expect(screen.getByTestId('grid-a')).toHaveClass(
      'grid',
      'sm:grid-cols-1',
      'md:grid-cols-2',
      'lg:grid-cols-3'
    );
  });

  it('wraps each child in BentoGridB, BentoGridC, and BentoGridD', () => {
    const { rerender, container } = render(
      <BentoGridB>
        <div>One</div>
        <div>Two</div>
      </BentoGridB>
    );

    expect(container.querySelectorAll('.group.cursor-pointer')).toHaveLength(2);

    rerender(
      <BentoGridC>
        <div>One</div>
        <div>Two</div>
      </BentoGridC>
    );

    expect(container.querySelectorAll('.backdrop-blur-md')).toHaveLength(2);

    rerender(
      <BentoGridD>
        <div>One</div>
        <div>Two</div>
      </BentoGridD>
    );

    expect(container.querySelectorAll('.break-inside-avoid')).toHaveLength(2);
  });

  it('makes the first BentoGridE child the hero tile', () => {
    const { container } = render(
      <BentoGridE>
        <div>Hero</div>
        <div>Support 1</div>
        <div>Support 2</div>
      </BentoGridE>
    );

    const items = container.querySelectorAll('.rounded-lg.border');

    expect(items).toHaveLength(3);
    expect(items[0]).toHaveClass('md:col-span-2', 'md:row-span-2');
    expect(items[1]).toHaveClass('md:col-span-1', 'md:row-span-1');
  });
});
