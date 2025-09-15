import { Heading, Paragraph } from '@hotmess/design-system';

export default function AboutPage() {
  return (
    <div className="hm-container space-y-4">
      <Heading level={1} className="text-4xl" style={{ fontFamily: 'var(--font-anton)' }}>
        Always too much, never enough.
      </Heading>
      <Paragraph>
        A queer, men-only ecosystem built on care and grit.
      </Paragraph>
    </div>
  );
}
