# HOTMESS API Documentation

## Overview

The HOTMESS API provides access to radio shows, podcasts, and blog content. All endpoints return JSON responses and follow RESTful conventions.

**Base URL:** `https://hotmess.dev/api` (or `http://localhost:3000/api` for development)

## Authentication

Currently, all read endpoints are public. Write operations (if implemented) would require authentication.

## Content Types

All responses use `Content-Type: application/json`.

## Error Handling

Errors return appropriate HTTP status codes with JSON error objects:

```json
{
  "error": "Error message description"
}
```

Common status codes:
- `200` - Success
- `404` - Resource not found
- `500` - Internal server error

---

## Blog API

### List Blog Posts

**GET** `/api/blog`

Returns a paginated list of published blog posts.

#### Query Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `page` | integer | Page number (1-based) | 1 |
| `limit` | integer | Posts per page (max 100) | 10 |
| `type` | string | Filter by post type | null |
| `author` | string | Filter by author name | null |
| `tag` | string | Filter by tag | null |

#### Post Types
- `feature` - Feature articles
- `update` - Platform updates
- `guide` - How-to guides
- `recap` - Event recaps
- `release` - Product releases

#### Example Request
```bash
GET /api/blog?page=1&limit=5&type=guide
```

#### Example Response
```json
{
  "posts": [
    {
      "slug": "consent-culture-guide",
      "title": "Building Consent Culture: A Practical Guide",
      "subtitle": "How to create spaces where 'yes' means yes and 'no' is celebrated",
      "type": "guide",
      "author": "Alex Rivera",
      "cover_url": "/assets/blog/consent-culture-guide.svg",
      "summary": "True consent culture goes beyond sexual encounters...",
      "excerpt": "True consent culture means creating spaces where people feel empowered...",
      "tags": ["consent", "community", "safety", "boundaries", "education"],
      "published_at": "2024-02-01T10:00:00Z",
      "status": "published",
      "ai_summary": "A comprehensive guide to building consent culture...",
      "ai_keywords": ["consent culture", "community safety", "boundaries"]
    }
  ],
  "pagination": {
    "current_page": 1,
    "total_pages": 1,
    "total_posts": 4,
    "per_page": 10,
    "has_next_page": false,
    "has_prev_page": false
  },
  "filters": {
    "type": "guide",
    "author": null,
    "tag": null
  }
}
```

### Get Single Blog Post

**GET** `/api/blog/{slug}`

Returns a single blog post by slug, including full markdown content.

#### Example Request
```bash
GET /api/blog/consent-culture-guide
```

#### Example Response
```json
{
  "post": {
    "slug": "consent-culture-guide",
    "title": "Building Consent Culture: A Practical Guide",
    "subtitle": "How to create spaces where 'yes' means yes and 'no' is celebrated",
    "type": "guide",
    "author": "Alex Rivera",
    "cover_url": "/assets/blog/consent-culture-guide.svg",
    "summary": "True consent culture goes beyond sexual encounters...",
    "body_md": "# Building Consent Culture: A Practical Guide\n\nConsent isn't just about sex...",
    "tags": ["consent", "community", "safety", "boundaries", "education"],
    "published_at": "2024-02-01T10:00:00Z",
    "status": "published",
    "ai_summary": "A comprehensive guide to building consent culture...",
    "ai_excerpt": "True consent culture means creating spaces...",
    "ai_keywords": ["consent culture", "community safety", "boundaries"],
    "ai_translations": {
      "es": "Construyendo Cultura de Consentimiento: Una Guía Práctica",
      "fr": "Construire une Culture du Consentement : Un Guide Pratique"
    }
  }
}
```

---

## Podcasts API

### List Podcast Series

**GET** `/api/podcasts`

Returns all podcast series with episode counts and latest episodes.

#### Example Response
```json
{
  "series": [
    {
      "series_slug": "hotmess-talks",
      "series_title": "HOTMESS Talks",
      "tagline": "Real conversations about sex, identity, and finding your people.",
      "description": "The flagship HOTMESS podcast where we dive deep...",
      "keywords": ["queer", "lgbtq", "sex-positive", "mental-health"],
      "cover_url": "/podcasts/hotmess-talks.svg",
      "episode_count": 3,
      "latest_episode": {
        "ep_number": 3,
        "title": "Trans Joy in Practice",
        "published_at": "2024-02-12T10:00:00Z"
      }
    }
  ],
  "total_series": 3
}
```

### Get Podcast Series with Episodes

**GET** `/api/podcasts?series={series_slug}`

Returns a specific podcast series with paginated episodes.

#### Query Parameters

| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `series` | string | Series slug (required) | - |
| `page` | integer | Page number for episodes | 1 |
| `limit` | integer | Episodes per page | 10 |

#### Example Request
```bash
GET /api/podcasts?series=hotmess-talks&page=1&limit=5
```

#### Example Response
```json
{
  "series": {
    "series_slug": "hotmess-talks",
    "series_title": "HOTMESS Talks",
    "tagline": "Real conversations about sex, identity, and finding your people.",
    "description": "The flagship HOTMESS podcast...",
    "keywords": ["queer", "lgbtq", "sex-positive"],
    "cover_url": "/podcasts/hotmess-talks.svg",
    "episodes": [
      {
        "ep_number": 3,
        "title": "Trans Joy in Practice",
        "one_liner": "Celebrating trans resilience, creativity, and the art of becoming.",
        "description": "A celebration of trans experiences...",
        "audio_url": "/audio/hotmess-talks-003.mp3",
        "duration_s": 3890,
        "published_at": "2024-02-12T10:00:00Z",
        "tags": ["trans", "transgender", "joy", "community", "becoming"]
      }
    ]
  },
  "pagination": {
    "current_page": 1,
    "total_pages": 1,
    "total_episodes": 3,
    "per_page": 10,
    "has_next_page": false,
    "has_prev_page": false
  }
}
```

### Get Single Episode

**GET** `/api/podcasts/{series_slug}/{episode_number}`

Returns a specific episode with series context.

#### Example Request
```bash
GET /api/podcasts/hotmess-talks/1
```

#### Example Response
```json
{
  "series": {
    "series_slug": "hotmess-talks",
    "series_title": "HOTMESS Talks",
    "tagline": "Real conversations about sex, identity, and finding your people.",
    "cover_url": "/podcasts/hotmess-talks.svg"
  },
  "episode": {
    "ep_number": 1,
    "title": "Welcome to the Mess",
    "one_liner": "An introduction to HOTMESS and why we're here to fuck up your feed.",
    "description": "Join us for the inaugural episode where we lay out our manifesto...",
    "audio_url": "/audio/hotmess-talks-001.mp3",
    "duration_s": 3420,
    "published_at": "2024-01-15T10:00:00Z",
    "tags": ["introduction", "manifesto", "community", "consent"]
  }
}
```

---

## Radio Shows Data

Radio shows data is available in `/data/radio_shows.json` and includes:

### Show Fields
- `slug` - URL-friendly identifier
- `title` - Show name
- `host` - DJ/Host name
- `schedule` - When the show airs
- `one_liner` - ≤120 character description
- `short_blurb` - 40-60 word description
- `long_blurb` - 110-160 word detailed description
- `tags` - Array of keywords
- `ctas` - Call-to-action buttons
- `image_url` - Show artwork URL
- `live_room` - Community room URL

### Available Shows
- **Wake the Mess** - Morning chaos (Mon-Fri 8-10AM)
- **Dial-a-Daddy** - Advice show (Daily 12-2PM)
- **Hand N Hand** - Aftercare (Sun 6-8PM)
- **Pre-Drinks** - Friday night energy (Fri 8-10PM)
- **Club Hours** - Saturday night dancing (Sat 10PM-2AM)
- **Midnight Confessions** - Late night vulnerability (Wed 11PM-1AM)

---

## Brand Voice Guidelines

All content follows HOTMESS brand voice:
- **Bold** - Unapologetic and confident
- **Queer** - Centered on LGBTQ+ experiences
- **Sex-positive** - Open about sexuality and pleasure
- **Care-driven** - Prioritizes community wellbeing

### Example Phrases
- "Your mess is welcome here"
- "Pleasure is political, care is radical"
- "Too much, never enough"
- "HNH MESS — the only lube with real aftercare"

---

## Rate Limiting

Currently no rate limiting is implemented. For production use, consider implementing rate limiting based on IP address or API key.

---

## Support

For API support or feature requests:
- Community forums: [community.hotmess.dev](https://community.hotmess.dev)
- Technical issues: tech@hotmess.dev
- General questions: hello@hotmess.dev

---

## Data Sources

API data is sourced from:
- `/data/blog_posts.json` - Blog content
- `/data/podcasts.json` - Podcast series and episodes
- `/data/radio_shows.json` - Radio show information
- `/data/schema.sql` - Database schema for production implementation

For production deployment, migrate JSON data to PostgreSQL using the provided schema.