import { describe, expect, it } from 'vitest';
import { builds } from '@/content/builds';
import { demos } from '@/content/demos';
import { site } from '@/content/site';

describe('demo data', () => {
  for (const scenario of demos) {
    it(`${scenario.id}: every source phrase appears in the input`, () => {
      const missing = scenario.records
        .flatMap((record) => record.fields)
        .filter((field) => field.source !== undefined && !scenario.input.includes(field.source))
        .map((field) => field.source);
      expect(missing).toEqual([]);
    });

    it(`${scenario.id}: links to a published build`, () => {
      const build = builds.find((b) => b.slug === scenario.caseStudySlug);
      expect(build?.published).toBe(true);
    });
  }

  it('scenario 1 summary matches its field statuses', () => {
    const order = demos.find((d) => d.id === 'order-email');
    const fields = order?.records.flatMap((r) => r.fields) ?? [];
    expect(fields.filter((f) => f.status === 'auto')).toHaveLength(6);
    expect(fields.filter((f) => f.status === 'review')).toHaveLength(2);
  });
});

describe('content references', () => {
  it('every service proof points to an existing build', () => {
    const slugs = new Set(builds.map((b) => b.slug));
    for (const service of site.servicesSection.services) {
      for (const slug of service.proofBuilds) expect(slugs.has(slug)).toBe(true);
    }
  });

  it('every build maps to a service', () => {
    const ids = new Set(site.servicesSection.services.map((s) => s.id));
    for (const build of builds) expect(ids.has(build.serviceId)).toBe(true);
  });

  it('build slugs are unique', () => {
    expect(new Set(builds.map((b) => b.slug)).size).toBe(builds.length);
  });
});
