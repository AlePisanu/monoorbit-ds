import type { Meta, StoryObj } from '@storybook/angular';
import tokens from '../lib/foundations/tokens.json';

type TokenGroups = typeof tokens;

const sectionStyle = 'display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;';
const cardStyle = 'border:1px solid var(--ds-color-border-soft);border-radius:16px;padding:16px;background:var(--ds-color-surface);box-shadow:var(--ds-elevation-1);';
const codeStyle = 'font-family:Consolas,"Courier New",monospace;font-size:12px;color:var(--ds-color-text-muted);word-break:break-word;';

function colorCards(group: Record<string, string>): string {
  return Object.entries(group)
    .map(
      ([name, value]) => `
        <div style="${cardStyle}">
          <div style="height:72px;border-radius:12px;background:${value};border:1px solid rgba(16,24,40,0.08);"></div>
          <div style="margin-top:12px;font-weight:700;font-size:14px;color:var(--ds-color-text);">${name}</div>
          <div style="margin-top:6px;${codeStyle}">${value}</div>
        </div>
      `,
    )
    .join('');
}

function keyValueCards(group: Record<string, string>): string {
  return Object.entries(group)
    .map(
      ([name, value]) => `
        <div style="${cardStyle}">
          <div style="font-weight:700;font-size:14px;color:var(--ds-color-text);">${name}</div>
          <div style="margin-top:10px;${codeStyle}">${value}</div>
        </div>
      `,
    )
    .join('');
}

function themedPreview(): string {
  return `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:20px;">
      <div style="${cardStyle}">
        <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ds-color-text-subtle);">Default Theme</div>
        <div style="margin-top:12px;padding:20px;border-radius:16px;background:var(--ds-color-canvas);">
          <button class="ds-btn ds-btn--primary ds-btn--md">Primary action</button>
          <div style="margin-top:16px;padding:16px;border-radius:16px;background:var(--ds-color-surface);box-shadow:var(--ds-elevation-card);">
            <div style="font-size:18px;font-weight:700;color:var(--ds-color-text);">Foundation surface</div>
            <div style="margin-top:8px;color:var(--ds-color-text-muted);">Components inherit the same token contract.</div>
          </div>
        </div>
      </div>
      <div style="${cardStyle}">
        <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ds-color-text-subtle);">Brand Override</div>
        <div style="margin-top:12px;padding:20px;border-radius:16px;background:#fff7ed;--ds-color-brand:#9a3412;--ds-color-brand-strong:#7c2d12;--ds-color-highlight:#c2410c;--ds-gradient-emphasis:linear-gradient(135deg,#9a3412 0%,#ea580c 100%);--ds-focus-ring:rgba(154,52,18,0.18);">
          <button class="ds-btn ds-btn--primary ds-btn--md">Primary action</button>
          <div style="margin-top:16px;padding:16px;border-radius:16px;background:var(--ds-color-surface);box-shadow:var(--ds-elevation-card);">
            <div style="font-size:18px;font-weight:700;color:var(--ds-color-text);">Same component API</div>
            <div style="margin-top:8px;color:var(--ds-color-text-muted);">Only the token values change.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

const meta: Meta = {
  title: 'Foundations/Tokens',
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component:
          'Framework-agnostic foundations exposed as SCSS, CSS custom properties, and JSON tokens. Angular components consume the same contract without owning it.',
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Overview: Story = {
  render: () => ({
    template: `
      <section style="padding:32px;max-width:1120px;margin:0 auto;">
        <h1 style="margin:0;font-size:40px;line-height:1.05;color:var(--ds-color-text);">Foundations</h1>
        <p style="margin:12px 0 0;font-size:18px;line-height:1.6;color:var(--ds-color-text-muted);max-width:760px;">
          The system core is consumable without Angular. Use SCSS foundations, raw CSS variables, or the token JSON snapshot depending on your stack.
        </p>
        <div style="margin-top:24px;${sectionStyle}">
          <div style="${cardStyle}">
            <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ds-color-text-subtle);">SCSS</div>
            <div style="margin-top:12px;${codeStyle}">@use 'monoorbit-ds/foundations';</div>
          </div>
          <div style="${cardStyle}">
            <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ds-color-text-subtle);">CSS</div>
            <div style="margin-top:12px;${codeStyle}">@import 'monoorbit-ds/tokens.css';</div>
          </div>
          <div style="${cardStyle}">
            <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ds-color-text-subtle);">JSON</div>
            <div style="margin-top:12px;${codeStyle}import tokens from 'monoorbit-ds/tokens.json';</div>
          </div>
          <div style="${cardStyle}">
            <div style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--ds-color-text-subtle);">Angular</div>
            <div style="margin-top:12px;${codeStyle}import { ButtonComponent } from 'monoorbit-ds/angular';</div>
          </div>
        </div>
      </section>
    `,
  }),
};

export const ColorTokens: Story = {
  render: () => ({
    template: `
      <section style="padding:32px;max-width:1120px;margin:0 auto;">
        <h2 style="margin:0 0 8px;font-size:32px;color:var(--ds-color-text);">Color Tokens</h2>
        <p style="margin:0 0 24px;color:var(--ds-color-text-muted);font-size:16px;">Semantic palette used by foundations and component implementations.</p>
        <div style="${sectionStyle}">
          ${colorCards((tokens as TokenGroups).color)}
        </div>
      </section>
    `,
  }),
};

export const ShapeAndElevation: Story = {
  render: () => ({
    template: `
      <section style="padding:32px;max-width:1120px;margin:0 auto;">
        <h2 style="margin:0 0 8px;font-size:32px;color:var(--ds-color-text);">Shape and Elevation</h2>
        <p style="margin:0 0 24px;color:var(--ds-color-text-muted);font-size:16px;">Radius and elevation tokens define the system tone just as much as color.</p>
        <div style="${sectionStyle}">
          ${keyValueCards((tokens as TokenGroups).radius)}
          ${keyValueCards((tokens as TokenGroups).elevation)}
        </div>
      </section>
    `,
  }),
};

export const Theming: Story = {
  render: () => ({
    template: `
      <section style="padding:32px;max-width:1120px;margin:0 auto;">
        <h2 style="margin:0 0 8px;font-size:32px;color:var(--ds-color-text);">Theming Contract</h2>
        <p style="margin:0 0 24px;color:var(--ds-color-text-muted);font-size:16px;">A product can override CSS custom properties without changing component markup or logic.</p>
        ${themedPreview()}
      </section>
    `,
  }),
};
