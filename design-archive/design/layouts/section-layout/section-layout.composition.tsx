import React from 'react';
import { PhilipGizzieTheme } from '@philip-gizzie/design.philip-gizzie-theme';
import { Heading } from '@philip-gizzie/design.typography.heading';
import { Paragraph } from '@philip-gizzie/design.typography.paragraph';
import { SectionLayout } from './section-layout.js';

const cardStyle: React.CSSProperties = {
  backgroundColor: 'var(--colors-surface-primary)',
  padding: 'var(--spacing-large)',
  borderRadius: 'var(--borders-radius-large)',
  boxShadow: 'var(--effects-shadows-medium)',
  flex: 1,
  minWidth: '280px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: 'var(--spacing-small)',
};

const cardContainerStyle: React.CSSProperties = {
  display: 'flex',
  gap: 'var(--spacing-large)',
  width: '100%',
  maxWidth: 'var(--layout-max-page-width)',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

export const BasicSectionLayout = () => (
  <PhilipGizzieTheme>
    <SectionLayout
      title="Build Your Full-Stack Vision"
      subtitle="From component libraries to backend services, we provide end-to-end solutions to bring your project to life. This layout helps you structure your message clearly and effectively."
    >
      <Paragraph style={{ maxWidth: '800px', textAlign: 'center' }}>
        This is the content area. You can place any React components here, such as
        feature lists, testimonials, or call-to-action buttons. The layout
        ensures your content is perfectly centered and spaced.
      </Paragraph>
    </SectionLayout>
  </PhilipGizzieTheme>
);

export const FullFeaturedSectionLayout = () => (
  <PhilipGizzieTheme>
    <SectionLayout
      caption="End-to-End Development"
      title="Seamless Integration, Powerful Results"
      subtitle="Our full-stack approach ensures that every layer of your application works in harmony, delivering a robust and scalable user experience that delights users and developers alike."
    >
      <div style={cardContainerStyle}>
        <div style={cardStyle}>
          <Heading level={4} visualLevel={5}>
            Frontend Mastery
          </Heading>
          <Paragraph>
            Crafting beautiful and performant user interfaces with modern
            frameworks like React and Vue.
          </Paragraph>
        </div>
        <div style={cardStyle}>
          <Heading level={4} visualLevel={5}>
            Backend Architecture
          </Heading>
          <Paragraph>
            Building resilient and scalable server-side applications, APIs, and
            databases with Node.js, Go, or Python.
          </Paragraph>
        </div>
        <div style={cardStyle}>
          <Heading level={4} visualLevel={5}>
            DevOps & Cloud
          </Heading>
          <Paragraph>
            Automating deployment and managing infrastructure to ensure your
            application is always available and reliable.
          </Paragraph>
        </div>
      </div>
    </SectionLayout>
  </PhilipGizzieTheme>
);

export const SectionWithOnlyContent = () => (
  <PhilipGizzieTheme>
    <SectionLayout>
      <div style={{ ...cardStyle, maxWidth: '960px', textAlign: 'center' }}>
        <Heading level={3}>A Flexible Content Area</Heading>
        <Paragraph>
          Even without a title or subtitle, the SectionLayout provides a
          perfectly padded and centered container for your main content. It's
          ideal for simpler sections or when you need full control over the
          header's appearance within the children.
        </Paragraph>
      </div>
    </SectionLayout>
  </PhilipGizzieTheme>
);