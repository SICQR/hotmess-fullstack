import { NextRequest, NextResponse } from 'next/server';
import podcasts from '../../../../../data/podcasts.json';

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ series: string; episode: string }> }
) {
  try {
    const { series: seriesSlug, episode: episodeNumber } = await context.params;
    
    const series = podcasts.find(p => p.series_slug === seriesSlug);
    
    if (!series) {
      return NextResponse.json(
        { error: 'Podcast series not found' },
        { status: 404 }
      );
    }
    
    const episode = series.episodes.find(ep => ep.ep_number === parseInt(episodeNumber));
    
    if (!episode) {
      return NextResponse.json(
        { error: 'Episode not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      series: {
        series_slug: series.series_slug,
        series_title: series.series_title,
        tagline: series.tagline,
        cover_url: series.cover_url
      },
      episode
    });
  } catch (error) {
    console.error('Podcast episode API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}