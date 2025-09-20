import { NextRequest, NextResponse } from 'next/server';
import podcasts from '../../../data/podcasts.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const series_slug = searchParams.get('series');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    
    if (series_slug) {
      // Return specific series with episodes
      const series = podcasts.find(p => p.series_slug === series_slug);
      
      if (!series) {
        return NextResponse.json(
          { error: 'Podcast series not found' },
          { status: 404 }
        );
      }
      
      // Paginate episodes
      const startIndex = (page - 1) * limit;
      const endIndex = startIndex + limit;
      const paginatedEpisodes = series.episodes
        .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())
        .slice(startIndex, endIndex);
      
      return NextResponse.json({
        series: {
          ...series,
          episodes: paginatedEpisodes
        },
        pagination: {
          current_page: page,
          total_pages: Math.ceil(series.episodes.length / limit),
          total_episodes: series.episodes.length,
          per_page: limit,
          has_next_page: endIndex < series.episodes.length,
          has_prev_page: page > 1
        }
      });
    } else {
      // Return all series (without episodes in list view)
      const seriesList = podcasts.map(series => {
        const { episodes, ...seriesWithoutEpisodes } = series;
        return {
          ...seriesWithoutEpisodes,
          episode_count: episodes.length,
          latest_episode: episodes.length > 0 
            ? episodes.sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime())[0]
            : null
        };
      });
      
      return NextResponse.json({
        series: seriesList,
        total_series: seriesList.length
      });
    }
  } catch (error) {
    console.error('Podcasts API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}